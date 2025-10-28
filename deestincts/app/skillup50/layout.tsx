import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillUp50 - Transform Your Design Career | Deestincts',
  description: 'Join Nigeria\'s most exclusive design bootcamp. Only 50 spots available for this intensive program in Lagos. Register now for SkillUp50 by Deestincts.',
  keywords: [
    'SkillUp50',
    'design bootcamp',
    'Nigeria design',
    'Lagos design',
    'UI/UX design',
    'brand design',
    'motion graphics',
    'design training',
    'Deestincts',
    'design career'
  ],
  authors: [{ name: 'Deestincts' }],
  creator: 'Deestincts',
  publisher: 'Deestincts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deestincts.com'),
  alternates: {
    canonical: '/skillup50',
  },
  openGraph: {
    title: 'SkillUp50 - Transform Your Design Career',
    description: 'Join Nigeria\'s most exclusive design bootcamp. Only 50 spots available for this intensive program in Lagos.',
    url: 'https://deestincts.com/skillup50',
    siteName: 'Deestincts',
    images: [
      {
        url: '/skilluplogo.PNG',
        width: 1200,
        height: 630,
        alt: 'SkillUp50 - Design Bootcamp by Deestincts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillUp50 - Transform Your Design Career',
    description: 'Join Nigeria\'s most exclusive design bootcamp. Only 50 spots available for this intensive program in Lagos.',
    images: ['/skilluplogo.PNG'],
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default function SkillUp50Layout({
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
