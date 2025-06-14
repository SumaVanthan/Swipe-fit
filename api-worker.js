import { createClient } from '@supabase/supabase-js';

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let email;
    try {
      const body = await request.json();
      email = body.email;

      // Basic email validation (consider more robust validation if needed)
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return new Response(JSON.stringify({ error: 'Valid email is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) { // Catches errors from request.json() or if body.email is accessed on non-object
      console.error('Error parsing request body in api-worker:', error);
      return new Response(JSON.stringify({ error: 'Invalid JSON payload or missing email field' }), {
         status: 400,
         headers: { 'Content-Type': 'application/json' }
      });
    }

    // Ensure SUPABASE_URL and SUPABASE_SERVICE_KEY are set in worker environment
    if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_KEY) {
      console.error('Supabase URL or Service Key not configured in worker environment.');
      return new Response(JSON.stringify({ error: 'API configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY);

    try {
      // Check if email exists
      // Supabase table name is 'email', column name is 'email'
      const { data: existingEntry, error: selectError } = await supabase
        .from('email') // Table name
        .select('email')    // Column name
        .eq('email', email) // Column name, value
        .maybeSingle(); // Returns one record or null, doesn't error if not found

      if (selectError) {
        console.error('Supabase select error:', selectError);
        throw selectError; // Propagate to general error handler
      }

      if (existingEntry) {
        return new Response(JSON.stringify({ message: 'Thanks! We’ve already got your interest. We’ll notify you once we’re ready.' }), {
          status: 200, // Or 200 if you prefer for "already exists"
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // If email does not exist, add it
      const { error: insertError } = await supabase
        .from('email') // Table name
        .insert([{ email: email }]); // [{ column_name: value }]

      if (insertError) {
        console.error('Supabase insert error:', insertError);
        // Could be unique constraint violation if race condition, or other db error
        if (insertError.code === '23505') { // Unique violation
             return new Response(JSON.stringify({ message: 'Thanks! We’ve already got your interest. We’ll notify you once we’re ready.' }), {
                status: 200, // Treat as already exists
                headers: { 'Content-Type': 'application/json' },
            });
        }
        throw insertError; // Propagate to general error handler
      }

      return new Response(JSON.stringify({ message: 'Success! You’ve been added to the waitlist.' }), {
        status: 201, // 201 Created
        headers: { 'Content-Type': 'application/json' },
      });

    } catch (error) {
      // Log the specific email that caused an error for easier debugging, if appropriate
      console.error(`Supabase operation error for email ${email}:`, error);
      return new Response(JSON.stringify({ error: 'Database operation failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};
