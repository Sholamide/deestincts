import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ctrl + Chill - Not Another Design Class | Deestincts',
    description: 'Join Ctrl + Chill in Lagos on February 26, 2026: Networking, games, live brand case study review, and pitch competition. Only 25 spots — winner gets an internship at Deestincts. ₦25,000.',
    keywords: [
        'Ctrl + Chill',
        'Not Another Design Class',
        'design event Lagos',
        'creative networking Nigeria',
        'brand design case study',
        'design pitch competition',
        'internship opportunity designers',
        'Deestincts event',
        'Lagos design workshop',
        'hands-on design experience',
        '#CtrlChill'
    ],
    authors: [{ name: 'Deestincts', url: 'https://deestincts.com' }],
    creator: 'Deestincts',
    publisher: 'Deestincts',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://deestincts.com'),
    alternates: {
        canonical: '/career/trainings/ctrl-chill',
    },
    openGraph: {
        title: 'Ctrl + Chill - Not Another Design Class',
        description: 'Curated networking + games-driven creative event in Lagos. Live brand case study, pitch competition (winner gets internship at Deestincts). Only 25 spots – Feb 26, 2026.',
        url: 'https://deestincts.com/career/trainings/ctrl-chill',
        siteName: 'Deestincts',
        images: [
            {
                url: '/ctrlflyer.PNG',
                width: 1200,
                height: 630,
                alt: 'Ctrl + Chill – Networking, games, live brand review & pitch for designers in Lagos',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ctrl + Chill - Not Another Design Class',
        description: 'Networking + games + live brand case study + pitch competition in Lagos. Winner gets internship at Deestincts. Only 25 spots – Feb 26, 2026. #CtrlChill',images: ['/ctrlflyer.PNG'],
        creator: '@deestincts',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function CtrlChillPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    )
}