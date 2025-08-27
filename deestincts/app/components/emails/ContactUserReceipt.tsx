import * as React from "react";

type Props = {
  name: string;
  subject: string;
};

export default function UserReceiptEmail({ name, subject }: Props) {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#0f172a' }}>
      <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#f8fafc', padding: 24 }}>
        <tbody>
          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} style={{ maxWidth: 640, margin: '0 auto', backgroundColor: '#ffffff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '20px 24px', backgroundColor: '#111827', color: '#ffffff' }}>
                      <h1 style={{ margin: 0, fontSize: 18, lineHeight: '24px' }}>Thanks for reaching out</h1>
                      <p style={{ margin: 0, opacity: 0.9, fontSize: 13 }}>Deestincts</p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 24 }}>
                      <p style={{ margin: '0 0 12px 0' }}>Hi {name},</p>
                      <p style={{ margin: '0 0 12px 0' }}>
                        We have received your message about &quot;{subject}&quot;. Our team will review it and respond as soon as possible.
                      </p>
                      <p style={{ margin: '0 0 12px 0' }}>
                        If this is urgent, please reply to this email and include any additional context.
                      </p>
                      <p style={{ margin: '16px 0 0 0' }}>Best regards,</p>
                      <p style={{ margin: 0 }}>Deestincts Team</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


