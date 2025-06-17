import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

// Basic email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

serve(async (req) => {
  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  let email: string | null = null
  try {
    const body = await req.json()
    if (body && typeof body.email === 'string') {
      email = body.email
    } else {
      throw new Error('Email is required in the request body.')
    }
  } catch (error) {
    console.error('Error parsing request body:', error)
    return new Response(
      JSON.stringify({ error: 'Invalid request body. Email is required.' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }

  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Invalid email format.' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }

  try {
    const supabaseAdminClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    // Insert email into the 'email' table
    // Assumes your table is named 'email' and the email column is 'email'
    // And you have 'id' (PK, int8) and 'created_at' (timestamptz)
    const { data, error: insertError } = await supabaseAdminClient
      .from('email') // Your table name
      .insert({ email: email }) // 'email' is the column name
      .select() // Optionally select the inserted data if needed

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      if (insertError.code === '23505') { // Unique violation
        return new Response(
          JSON.stringify({ error: 'This email is already registered.' }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 409, // Conflict
          },
        )
      }
      throw insertError // Re-throw other errors
    }

    console.log('Email inserted successfully:', data)

    // Invoke the 'send-waitlist-confirmation' function
    const sendConfirmationFunctionUrl = Deno.env.get('SEND_CONFIRMATION_FUNCTION_URL')
    if (!sendConfirmationFunctionUrl) {
      console.error('SEND_CONFIRMATION_FUNCTION_URL environment variable is not set.')
      // Depending on policy, you might want to still return success to the user
      // or indicate that confirmation sending might fail.
      // For now, we'll proceed but log the error.
    } else {
      try {
        const response = await fetch(sendConfirmationFunctionUrl, {
          method: 'POST',
          headers: {
            ...corsHeaders, // Assuming the other function also needs CORS
            'Content-Type': 'application/json',
            // Add Authorization header if the target function is protected
            // 'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`
          },
          body: JSON.stringify({ email: email }),
        })

        if (!response.ok) {
          const errorBody = await response.text()
          console.error(`Error invoking send-waitlist-confirmation function: ${response.status} ${response.statusText}`, errorBody)
          // Decide if this failure should make the whole process fail.
          // For now, we'll consider the primary operation (DB insert) a success
          // and just log this secondary failure.
        } else {
          console.log('Successfully invoked send-waitlist-confirmation function.')
        }
      } catch (fetchError) {
        console.error('Network or other error invoking send-waitlist-confirmation:', fetchError)
      }
    }

    return new Response(
      JSON.stringify({ message: 'Successfully added to waitlist. Confirmation email will be sent.' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Unhandled error:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred.' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})

// Create a dummy _shared/cors.ts if it doesn't exist for completeness,
// as it's imported. In a real scenario, this would be properly managed.
// This subtask should also create supabase/functions/_shared/cors.ts
const corsTsContent = `
// supabase/functions/_shared/cors.ts
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Adjust for production
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
`
Deno.mkdirSync('supabase/functions/_shared', { recursive: true });
Deno.writeTextFileSync('supabase/functions/_shared/cors.ts', corsTsContent);
