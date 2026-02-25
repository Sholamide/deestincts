import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ctrl + Chill - The Creative Direction Room for Ambitious Creatives. The 1-Day Reset for Creatives',
    description: 'Ctrl + Chill is a 1-Day Reset for Creatives — a curated Creative Direction Room for ambitious designers, developers, and founders ready to gain clarity, reposition their careers, and build with intention.',
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
        title: 'The Creative Direction Room for Ambitious Creatives. The 1-Day Reset for Creatives',
        description: 'Ctrl + Chill is a 1-Day Reset for Creatives — a curated Creative Direction Room for ambitious designers, developers, and founders ready to gain clarity, reposition their careers, and build with intention.',
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
        title: 'The Creative Direction Room for Ambitious Creatives. The 1-Day Reset for Creatives',
        description: 'Ctrl + Chill is a 1-Day Reset for Creatives — a curated Creative Direction Room for ambitious designers, developers, and founders ready to gain clarity, reposition their careers, and build with intention.',images: ['/ctrlflyer.PNG'],
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
