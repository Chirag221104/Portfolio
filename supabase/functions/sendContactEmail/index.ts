// Edge Function: sendContactEmail.ts
// Supabase Edge Functions provide `serve` globally

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, message' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY not configured');

    console.log('📧 New contact form submission:', { name, email, subject, timestamp: new Date().toISOString() });

    // Send notification email to yourself
    const notificationPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <portfolio@yourdomain.com>',
        to: 'chiragmalde166@apsit.edu.in',
        reply_to: email,
        subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
      }),
    });

    // Send acknowledgment email to user (async, non-blocking)
    const ackPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Chirag Malde <portfolio@yourdomain.com>',
        to: email,
        subject: `Thank you for contacting me - ${name}`,
        html: `<p>Hi ${name},</p>
               <p>Thank you for reaching out! I have received your message regarding "${subject || 'your message'}" and will respond shortly.</p>`,
      }),
    });

    const [notificationResponse, ackResponse] = await Promise.all([notificationPromise, ackPromise]);

    if (notificationResponse.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message sent successfully! Acknowledgment email sent.',
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      const errorText = await notificationResponse.text();
      console.error('Email sending failed:', errorText);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send emails', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('❌ Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process message', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
