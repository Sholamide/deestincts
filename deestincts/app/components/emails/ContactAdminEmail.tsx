import * as React from "react";

type Props = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function AdminContactEmail({ name, email, subject, message }: Props) {
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
                      <h1 style={{ margin: 0, fontSize: 18, lineHeight: '24px' }}>New Contact Message</h1>
                      <p style={{ margin: 0, opacity: 0.9, fontSize: 13 }}>Deestincts Contact Form</p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: 24 }}>
                      <p style={{ margin: '0 0 12px 0' }}>
                        <strong>From:</strong> {name} &lt;{email}&gt;
                      </p>
                      <p style={{ margin: '0 0 12px 0' }}>
                        <strong>Subject:</strong> {subject}
                      </p>
                      <div style={{ marginTop: 16, padding: 16, backgroundColor: '#f9fafb', borderRadius: 8, border: '1px solid #e5e7eb' }}>
                        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{message}</p>
                      </div>
                      <div style={{ marginTop: 20, fontSize: 12, color: '#6b7280' }}>
                        <p style={{ margin: 0 }}>Reply directly to this email to contact the sender.</p>
                      </div>
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


