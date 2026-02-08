import * as React from "react";
import { ImageWrapper } from "./ImageWrapper";

interface ContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

export interface TicketData {
  name: string;
  email: string;
  phone?: string;
  eventTitle?: string;
  eventDate?: string;
  eventTime?: string;
  venue?: string;
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


export const TicketEmail: React.FC<{ data: TicketData }> = ({ data }) => {
  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacOSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '0',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      }}
    >
      {/* Hero SVG Image Header */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        padding: '20px 0',
        textAlign: 'center',
      }}>
        <img
          src="https://res.cloudinary.com/olamide-cloud/image/upload/v1770545393/ticketing_nwcdyw.svg"
          alt="Ctrl + Chill Ticket Header"
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{ padding: '32px 24px' }}>
        {/* Greeting */}
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '26px',
              margin: '0 0 12px',
              color: '#000000',
              fontWeight: 700,
            }}
          >
            Hey {data.name} — you&apos;re in! 🔥
          </h2>
          <p style={{ margin: '0', lineHeight: 1.6, color: '#000000', fontSize: '16px' }}>
            Your spot is confirmed. Get ready for games, real brand breakdowns, pitching, networking, and the chance to win an internship with Deestincts.
          </p>
        </div>

        {/* Ticket Card */}
        <div
          style={{
            backgroundColor: '#d5e6b4',
            borderRadius: '16px',
            padding: '28px',
            margin: '32px 0',
            border: '1px solid #2d2d44',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {/* Official Ticket Badge */}
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#000000',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                padding: '8px 24px',
                borderRadius: '999px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              }}
            >
              OFFICIAL TICKET
            </div>
          </div>

          <h3
            style={{
              fontSize: '24px',
              fontWeight: 700,
              margin: '0 0 20px',
              color: '#000000',
              textAlign: 'center',
            }}
          >
            {data.eventTitle || 'Ctrl + Chill 2026'}
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontSize: '15px',
              color: '#cbd5e1',
            }}
          >
            <div style={{ color: "#000000", display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontWeight: 600, fontSize: '18px' }}>📅</span>
              <span>{data.eventDate || '26th February 2026'}</span>
              <span style={{ margin: '0 10px', color: '#64748b' }}>•</span>
              <span>{data.eventTime || '10:00 AM WAT'}</span>
            </div>

            <div style={{ color: "#000000", display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontWeight: 600, fontSize: '18px' }}>📍</span>
              <span>{data.venue || 'Cre8tive Space, Surulere, Lagos'}</span>
            </div>

            {/* {data.ticketId && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ color: '#f8e386', fontWeight: 600, fontSize: '18px' }}>🎫</span>
                <span>Ticket ID: {data.ticketId}</span>
              </div>
            )} */}
          </div>

          {/* {data.qrCodeUrl && (
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <img
                src={data.qrCodeUrl}
                alt="QR Code for check-in"
                style={{ width: '160px', height: '160px', borderRadius: '12px', border: '2px solid #2d2d44' }}
              />
              <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '12px' }}>
                Scan at the door
              </p>
            </div>
          )} */}
        </div>

        {/* Closing */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ margin: '0 0 16px', fontSize: '16px', color: "#000000" }}>
            Bring good vibes, your laptop (if you want), and energy — we can’t wait to see you!
          </p>

          <p style={{ margin: '0', fontSize: '16px', color: '#000000', fontWeight: 600 }}>
            See you on the 26th ✨
          </p>

          <p
            style={{
              margin: '32px 0 0',
              fontSize: '14px',
              color: '#000000',
            }}
          >
            — Deestincts Crew
          </p>
        </div>
      </div>
    </div>
  );
};
// export const TicketEmail: React.FC<{ data: TicketData }> = ({ data }) => {
//   return (
//     <div
//       style={{
//         fontFamily: '-apple-system, BlinkMacOSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
//         maxWidth: '560px',
//         margin: '0 auto',
//         backgroundColor: '#0f0f17',
//         color: '#e2e8f0',
//         padding: '32px 24px',
//         borderRadius: '16px',
//         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
//       }}
//     >
//       {/* Header with gradient accent */}
//       <div
//         style={{
//           textAlign: 'center',
//           paddingBottom: '24px',
//           borderBottom: '1px solid rgba(139, 92, 246, 0.3)',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '36px',
//             fontWeight: 900,
//             margin: '0',
//             background: 'linear-gradient(90deg, #a78bfa, #f472b6, #fbbf24)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             letterSpacing: '-1px',
//           }}
//         >
//           Ctrl + Chill
//         </h1>
//         <p
//           style={{
//             margin: '8px 0 0',
//             fontSize: '18px',
//             fontWeight: 600,
//             color: '#c4b5fd',
//           }}
//         >
//           Not Another Design Class 🎟️
//         </p>
//       </div>

//       {/* Greeting */}
//       <div style={{ margin: '32px 0 24px' }}>
//         <h2
//           style={{
//             fontSize: '24px',
//             margin: '0 0 12px',
//             color: '#e0e7ff',
//           }}
//         >
//           Hey {data.name} — you&apos;re in! 🔥
//         </h2>
//         <p style={{ margin: '0', lineHeight: 1.6, color: '#cbd5e1' }}>
//           Your spot is confirmed. Get ready for games, real brand breakdowns, pitching, networking, and the chance to win an internship with Deestincts.
//         </p>
//       </div>

//       {/* Ticket Card */}
//       <div
//         style={{
//           background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(49, 46, 129, 0.6))',
//           borderRadius: '16px',
//           padding: '24px',
//           margin: '24px 0',
//           border: '1px solid rgba(139, 92, 246, 0.25)',
//           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
//         }}
//       >
//         <div style={{ textAlign: 'center', marginBottom: '16px' }}>
//           <div
//             style={{
//               display: 'inline-block',
//               background: 'rgba(139, 92, 246, 0.15)',
//               color: '#c4b5fd',
//               fontSize: '13px',
//               fontWeight: 600,
//               padding: '4px 12px',
//               borderRadius: '999px',
//               marginBottom: '8px',
//             }}
//           >
//             OFFICIAL TICKET
//           </div>
//         </div>

//         <h3
//           style={{
//             fontSize: '22px',
//             fontWeight: 700,
//             margin: '0 0 16px',
//             color: '#e0e7ff',
//             textAlign: 'center',
//           }}
//         >
//           {data.eventTitle || 'Ctrl + Chill 2026'}
//         </h3>

//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '12px',
//             fontSize: '15px',
//             color: '#cbd5e1',
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//             <span style={{ color: '#a78bfa', fontWeight: 600 }}>📅</span>
//             <span>{data.eventDate || '26th February 2026'}</span>
//             <span style={{ margin: '0 8px', color: '#64748b' }}>•</span>
//             <span>{data.eventTime || '10:00 AM WAT'}</span>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//             <span style={{ color: '#f472b6', fontWeight: 600 }}>📍</span>
//             <span>{data.venue || 'Cre8tive Space, Surulere, Lagos'}</span>
//           </div>

//           {/* {data.ticketId && (
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//               <span style={{ color: '#fbbf24', fontWeight: 600 }}>🎫</span>
//               <span>Ticket ID: {data.ticketId}</span>
//             </div>
//           )} */}
//         </div>

//         {/* QR placeholder – replace with real QR if you generate one */}
//         {/* {data.qrCodeUrl && (
//           <div style={{ textAlign: 'center', marginTop: '24px' }}>
//             <img
//               src={data.qrCodeUrl}
//               alt="QR Code for check-in"
//               style={{ width: '140px', height: '140px', borderRadius: '12px' }}
//             />
//             <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px' }}>
//               Scan at the door
//             </p>
//           </div>
//         )} */}
//       </div>

//       {/* Closing */}
//       <div style={{ textAlign: 'center', marginTop: '32px' }}>
//         <p style={{ margin: '0 0 16px', fontSize: '16px', color: '#e0e7ff' }}>
//           Bring good vibes, your laptop (if you want), and energy — we can’t wait to see you!
//         </p>

//         <p style={{ margin: '0', fontSize: '15px', color: '#a78bfa', fontWeight: 600 }}>
//           See you on the 26th ✨
//         </p>

//         <p
//           style={{
//             margin: '24px 0 0',
//             fontSize: '14px',
//             color: '#64748b',
//           }}
//         >
//           — Deestincts 
//         </p>
//       </div>
//     </div>
//   );
// };