import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface TicketEmailProps {
    data: {
        name: string;
        email?: string;
        phone?: string;
        eventTitle?: string;
        eventDate?: string;
        eventTime?: string;
        venue?: string;
    };
}

export const TicketEmail = ({ data }: TicketEmailProps) => {
    const {
        name,
        eventTitle = "Ctrl + Chill",
        eventDate = "26th February 2026",
        eventTime = "10:00 AM WAT",
        venue = "CR8TIVE SPACE: E10, Adeniran Ogunsanya Shopping Mall, Surulere, Lagos, Nigeria",
    } = data;

    return (
        <Html lang="en">
            <Head />
            <Preview>You&apos;re in! 🎟️ Your Ctrl + Chill ticket is confirmed</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Hero SVG Header */}
                    <Section style={headerSection}>
                        <Img
                            src="https://www.deestincts.com/images/ticketing.png"
                            alt="Ctrl + Chill Ticket Header"
                            width="600"
                            height="200"
                            style={headerImage}
                        />
                    </Section>

                    {/* Greeting */}
                    <Section style={contentSection}>
                        <Heading style={heading}>Hey {name} — you&apos;re in! 🔥</Heading>
                        <Text style={paragraph}>
                            Your spot is confirmed. Get ready for games, real brand breakdowns,
                            pitching, networking, and the chance to win an internship with Deestincts.
                        </Text>
                    </Section>

                    {/* Ticket Info Card */}
                    <Section style={ticketCard}>
                        <div style={badgeWrapper}>
                            <div style={{
                                display: "inline-block",
                                backgroundColor: "#000000",
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: 700,
                                padding: "8px 24px",
                                borderRadius: "999px",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                            }}>OFFICIAL TICKET</div>
                        </div>

                        <Heading style={ticketTitle}>{eventTitle}</Heading>

                        <div style={detailsGrid}>
                            <div style={detailRow}>
                                <span style={icon}>📅</span>
                                <span>{eventDate}</span>
                                <span style={separator}>•</span>
                                <span>{eventTime}</span>
                            </div>

                            <div style={detailRow}>
                                <span style={iconPink}>📍</span>
                                <span>{venue}</span>
                            </div>
                        </div>
                    </Section>

                    {/* Closing */}
                    <Section style={closingSection}>
                        <Text style={closingText}>
                            Bring good vibes, your laptop (if you want), and energy — we can’t wait to see you!
                        </Text>

                        <Text style={seeYouText}>See you on the 28th ✨</Text>

                        <Text style={footerText}>— Deestincts</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default TicketEmail;

// ── Styles (unchanged) ──
const main = {
    backgroundColor: "#0f0f17",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "0 20px 40px",
    maxWidth: "600px",
    backgroundColor: "#0f0f17",
};

const headerSection = {
    padding: "20px 0",
    textAlign: "center" as const,
};

const headerImage = {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    display: "block",
    margin: "0 auto",
};

const contentSection = {
    margin: "32px 0",
};

const heading = {
    fontSize: "26px",
    fontWeight: 700,
    color: "#e0e7ff",
    margin: "0 0 16px",
    textAlign: "center" as const,
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#cbd5e1",
    margin: "0",
};

const ticketCard = {
    backgroundColor: "#1a1a2e",
    borderRadius: "16px",
    padding: "28px",
    border: "1px solid #2d2d44",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
};

const badgeWrapper = {
    textAlign: "center" as const,
    marginBottom: "20px",
};


const ticketTitle = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#e0e7ff",
    margin: "0 0 20px",
    textAlign: "center" as const,
};

const detailsGrid = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    fontSize: "15px",
    color: "#cbd5e1",
};

const detailRow = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
};

const icon = {
    color: "#d5e6b4",
    fontWeight: 600,
    fontSize: "18px",
};

const iconPink = {
    color: "#ffcaf7",
    fontWeight: 600,
    fontSize: "18px",
};

const iconYellow = {
    color: "#f8e386",
    fontWeight: 600,
    fontSize: "18px",
};

const separator = {
    margin: "0 10px",
    color: "#64748b",
};

const qrSection = {
    textAlign: "center" as const,
    marginTop: "32px",
};

const qrCode = {
    width: "160px",
    height: "160px",
    borderRadius: "12px",
    border: "2px solid #2d2d44",
};

const qrText = {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "12px",
};

const closingSection = {
    textAlign: "center" as const,
    marginTop: "40px",
};

const closingText = {
    margin: "0 0 16px",
    fontSize: "16px",
    color: "#e0e7ff",
};

const seeYouText = {
    margin: "0",
    fontSize: "16px",
    color: "#d5e6b4",
    fontWeight: 600,
};

const footerText = {
    margin: "32px 0 0",
    fontSize: "14px",
    color: "#94a3b8",
};