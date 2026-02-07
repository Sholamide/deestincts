import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend'
import { TicketEmail } from '@/app/components/emails/email-templates';
import { getRedis } from '@/lib/redis';

const resend = new Resend(process.env.RESEND_API_KEY)

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_VERIFY_URL = 'https://api.paystack.co/transaction/verify';
const EXPECTED_AMOUNT = 30000; // kobo (matches initialize) 2500000

export async function POST(req: NextRequest) {
  if (!PAYSTACK_SECRET) {
    return NextResponse.json({ error: 'Paystack not configured' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const reference = (body.reference || '').trim();

    if (!reference) {
      return NextResponse.json({ error: 'Reference is required' }, { status: 400 });
    }

    // ✅ CHECK: Has this ticket been sent already?
    const redis = await getRedis();
    const alreadySent = await redis.get(`ticket:${reference}`);

    if (alreadySent) {
      return NextResponse.json({
        ok: true,
        message: 'Ticket already sent to your email'
      });
    }

    const verifyRes = await fetch(
      `${PAYSTACK_VERIFY_URL}/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.status || !verifyData.data) {
      return NextResponse.json(
        { error: verifyData.message || 'Verification failed' },
        { status: 400 }
      );
    }

    const { status, amount, customer, metadata } = verifyData.data;

    if (status !== 'success') {
      return NextResponse.json(
        { error: 'Transaction was not successful' },
        { status: 400 }
      );
    }

    if (Number(amount) !== EXPECTED_AMOUNT) {
      return NextResponse.json({ error: 'Amount mismatch' }, { status: 400 });
    }

    const email = customer?.email || '';
    if (!email) {
      return NextResponse.json({ error: 'Customer email not found' }, { status: 400 });
    }

    let name = 'Attendee';
    let phone = '';
    if (metadata) {
      try {
        const meta = typeof metadata === 'string' ? JSON.parse(metadata) : metadata;
        if (meta.name) name = meta.name;
        if (meta.phone) phone = meta.phone;
      } catch {
        // ignore
      }
    }


    //MARK as sent BEFORE sending email (to prevent race conditions)
    await redis.set(
      `ticket:${reference}`,
      JSON.stringify({ email, name, phone, sentAt: new Date().toISOString() }),
      { EX: 60 * 60 * 24 * 90 } // Expire after 90 days
    );

    // Send ticket email
    const { error: sendError } = await resend.emails.send({
      from: `Ctrl + Chill Deestincts <noreply@deestincts.com>`,
      to: email,
      subject: 'Your Ctrl + Chill ticket 🎟️',
      react: TicketEmail({
        data: {
          name,
          email,
          phone,
          eventTitle: 'Ctrl + Chill',
          eventDate: '26th Feb',
          eventTime: '10:00 AM',
          venue:
            'CR8TIVE SPACE: E10, Adeniran Ogunsanya Shopping Mall, Surulere, Lagos, Nigeria',
        },
      }),
    });

    if (sendError) {
      await redis.del(`ticket:${reference}`);
      return NextResponse.json({ error: 'Ticket could not be sent' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Verify and fulfill error:', err);
    return NextResponse.json(
      { error: 'Failed to verify or fulfill' },
      { status: 500 }
    );
  }
}
