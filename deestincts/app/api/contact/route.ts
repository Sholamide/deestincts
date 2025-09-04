// import { NextRequest } from "next/server";
// import { resend } from "@/lib/resend";

// interface ContactFormData {
//   name: string;
//   email: string;
//   subject?: string;
//   message: string;
//   phone?: string;
//   company?: string;
// }

// export async function POST(req: NextRequest) {
//   const ADMIN_EMAIL = 'contact@deestincts.com';
//   const FROM_EMAIL = 'noreply@deestincts.com';

//   try {
//     const body = (await req.json()) as ContactFormData;
//     const name = (body.name || "").trim();
//     const email = (body.email || "").trim();
//     const subject = (body.subject || "").trim();
//     const message = (body.message || "").trim();

//     const { data, error } = await resend.emails.send({
//       from: 'Deestincts <contact@deestincts.com>',
//       to: ['contact@deestincts.com'],
//       replyTo: email,
//       subject: "Hello Deestincts",
//       react: AdminContactEmail({ name, email, subject, message }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json({ data });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { AcknowledgmentEmail, NotificationEmail } from '@/app/components/emails/email-templates';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

export async function POST(req: NextRequest) {
  const ADMIN_EMAIL = 'contact@deestincts.com';
  const FROM_EMAIL = 'noreply@deestincts.com';

  try {
    const body = await req.json() as ContactFormData;
    const { name, email, subject, message, phone, company } = {
      name: (body.name || '').trim(),
      email: (body.email || '').trim(),
      subject: (body.subject || '').trim(),
      message: (body.message || '').trim(),
      phone: (body.phone || '').trim(),
      company: (body.company || '').trim(),
    };

    // Send acknowledgment email to the user
    const acknowledgmentResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Deestincts - We received your message',
      react: AcknowledgmentEmail({ data: { name, email, subject, message, phone, company } }),
    });

    // Send notification email to admin
    const notificationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      react: NotificationEmail({ data: { name, email, subject, message, phone, company } }),
      replyTo: email,
    });

    // Check for errors in either email send
    if (acknowledgmentResult.error || notificationResult.error) {
      throw new Error('Something went wrong');
    }

    // Return success response with email IDs
    return NextResponse.json({
      data: {
        acknowledgmentId: acknowledgmentResult.data?.id,
        notificationId: notificationResult.data?.id,
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}

