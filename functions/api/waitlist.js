export async function onRequestPost(context) {
  try {
    const { request } = context;
    const body = await request.json();
    const email = body.email;

    if (!email) {
      return new Response('Email is required', { status: 400 });
    }

    // TODO: Add logic to save the email to a database or other service.
    // For now, just return a success response.
    console.log(`Received email for waitlist: ${email}`);

    return new Response(JSON.stringify({ message: 'Successfully added to waitlist' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing waitlist request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
