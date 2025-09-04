import * as React from "react";

interface ContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

export const AcknowledgmentEmail: React.FC<{ data: ContactData }> = ({ data }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Thank you for contacting us!</h2>
      
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        Hi {data.name},
      </p>
      
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        Thank you for reaching out to Deestincts. We have received your message and will get back to you within 24 hours.
      </p>
      
      <div style={{ backgroundColor: '#white', padding: '15px', borderRadius: '5px', margin: '20px 0', border: '1px solid #ddd' }}>
        <h3 style={{ color: '#333', marginTop: '0' }}>Your message:</h3>
        <p style={{ color: '#666', lineHeight: '1.6', margin: '10px 0' }}>
          <strong>Subject:</strong> {data.subject || 'General Inquiry'}
        </p>
        <p style={{ color: '#666', lineHeight: '1.6', margin: '0' }}>
          <strong>Message:</strong> {data.message}
        </p>
      </div>
      
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        Best regards,<br />
        The Deestincts Team
      </p>
      
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
      
      <p style={{ color: '#999', fontSize: '12px', lineHeight: '1.4' }}>
        This is an automated acknowledgment email. Please do not reply to this email.
        If you have any urgent questions, please contact us directly at contact@deestincts.com
      </p>
    </div>
  </div>
);


export const NotificationEmail: React.FC<{ data: ContactData }> = ({ data }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
      <h2 style={{ color: '#856404', marginBottom: '20px' }}>🔔 New Contact Form Submission</h2>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', marginBottom: '15px' }}>
        <h3 style={{ color: '#333', marginTop: '0' }}>Contact Details:</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#333' }}>Name:</td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', color: '#666' }}>{data.name}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#333' }}>Email:</td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', color: '#666' }}>{data.email}</td>
          </tr>
          {data.phone && (
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#333' }}>Phone:</td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', color: '#666' }}>{data.phone}</td>
            </tr>
          )}
          {data.company && (
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#333' }}>Company:</td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', color: '#666' }}>{data.company}</td>
            </tr>
          )}
          <tr>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#333' }}>Subject:</td>
            <td style={{ padding: '8px 0', borderBottom: '1px solid #eee', color: '#666' }}>{data.subject || 'General Inquiry'}</td>
          </tr>
        </table>
      </div>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <h3 style={{ color: '#333', marginTop: '0' }}>Message:</h3>
        <p style={{ color: '#666', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{data.message}</p>
      </div>
      
      <p style={{ color: '#856404', marginTop: '20px', fontSize: '14px' }}>
        📅 Received: {new Date().toLocaleString()}
      </p>
    </div>
  </div>
);


