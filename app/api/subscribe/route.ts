import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body  = await request.json();
    const email = (body.email ?? '').trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;

    // Dev fallback: no API key configured yet, just log and succeed
    if (!apiKey) {
      console.log(`[subscribe] ${email}`);
      return NextResponse.json({ success: true });
    }

    // Submit to Buttondown (buttondown.email)
    const res = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, tags: ['humancapitaletf'] }),
    });

    if (res.status === 400) {
      const data = await res.json() as Record<string, unknown>;
      // "already subscribed" is a soft success
      if (JSON.stringify(data).toLowerCase().includes('already')) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: 'Could not subscribe.' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[subscribe]', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
