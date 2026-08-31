import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, phone, details } = body;

    if (!firstName || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    const targetEmail = 'ajayguvva7890@gmail.com';

    // Forward form data to FormSubmit API with browser headers
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Referer: 'https://landpower.in/contact',
        Origin: 'https://landpower.in',
      },
      body: JSON.stringify({
        _subject: `⚡ New LAND POWER Consultation Request: ${firstName}`,
        _template: 'table',
        _captcha: 'false',
        'Client Name': firstName,
        'Phone Number': phone,
        'Email Address': email || 'Not provided',
        'Project Requirements': details || 'None specified',
        SubmittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }),
    });

    const result = await response.json();

    // Check if form activation is pending
    if (result.message && result.message.includes('Activation')) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          'FormSubmit activation email sent to ajayguvva7890@gmail.com. Please check your Gmail (Inbox/Spam) and click "Activate Form" once to enable instant inbox delivery!',
      });
    }

    if (response.ok && (result.success === 'true' || result.success === true)) {
      return NextResponse.json({ success: true, message: 'Email delivered successfully!' });
    }

    return NextResponse.json(
      { success: false, error: result.message || 'Failed to deliver email.' },
      { status: 500 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
