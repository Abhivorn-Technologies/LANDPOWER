import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.landpower.in'),
  title: {
    default: 'LAND POWER | Real Estate & Constructions',
    template: '%s | LAND POWER',
  },
  description:
    'LAND POWER is your trusted partner in premier real estate and turnkey construction solutions. Headquartered in Visakhapatnam, specializing in open plots, luxury villas, residential communities, and commercial developments.',
  keywords: [
    'LAND POWER',
    'Real Estate Visakhapatnam',
    'Open Plots Visakhapatnam',
    'Luxury Villas Andhra Pradesh',
    'Residential Communities Visakhapatnam',
    'Commercial Construction Visakhapatnam',
    'Turnkey Civil Engineering',
    'Rama Krishna Rompivalasa',
    'Akkayapalem Real Estate',
    'Prathapas Pride Visakhapatnam',
  ],
  authors: [{ name: 'LAND POWER Real Estate & Constructions' }],
  creator: 'LAND POWER',
  publisher: 'LAND POWER Real Estate & Constructions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/assets/branding/favicon.png', type: 'image/png' }],
    shortcut: '/assets/branding/favicon.png',
    apple: '/assets/branding/favicon.png',
  },
  openGraph: {
    title: 'LAND POWER | Real Estate & Constructions',
    description:
      'Building Your Dreams Into Reality with trust, transparency, and structural excellence across luxury villas, open plots, and commercial developments in Visakhapatnam & Andhra Pradesh.',
    url: 'https://www.landpower.in',
    siteName: 'LAND POWER',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/branding/logo.png',
        width: 1200,
        height: 630,
        alt: 'LAND POWER Real Estate & Constructions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAND POWER | Real Estate & Constructions',
    description:
      'Building Your Dreams Into Reality with trust, transparency, and structural excellence across luxury villas, open plots, and commercial developments in Visakhapatnam & Andhra Pradesh.',
    images: ['/assets/branding/logo.png'],
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
};

// Schema.org JSON-LD Structured Data for LocalBusiness / RealEstateAgent
const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'LAND POWER Real Estate & Constructions',
  image: 'https://www.landpower.in/assets/branding/logo.png',
  '@id': 'https://www.landpower.in',
  url: 'https://www.landpower.in',
  telephone: '+91 90102 14100',
  additionalType: '0891-2712345',
  email: 'sales@landpower.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No: 49-47-9, Flat No: 201 & 202, Prathapas Pride, Santhipuram, Akkayapalem',
    addressLocality: 'Visakhapatnam',
    addressRegion: 'Andhra Pradesh',
    postalCode: '530016',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.7365065,
    longitude: 83.3027272,
  },
  hasMap:
    'https://www.google.com/maps/place/pratapas+pride,+Akkayyapalem,+Visakhapatnam,+Andhra+Pradesh+530016/@17.7365583,83.3028294,17z/data=!4m6!3m5!1s0x3a39432e474bdf79:0xf5484a99e9507fd4!8m2!3d17.7365065!4d83.3027272!16s%2Fg%2F11q2sdpfr3?hl=en&entry=ttu',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '19:00',
  },
  founder: {
    '@type': 'Person',
    name: 'Rama Krishna Rompivalasa',
    jobTitle: 'Managing Director & Founder',
  },
  sameAs: [
    'https://www.facebook.com',
    'https://www.instagram.com',
    'https://www.linkedin.com',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-[#fcf9f8] text-[#1c1b1b]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
