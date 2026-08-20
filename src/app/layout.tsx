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
  metadataBase: new URL('https://www.landpower.com'),
  title: {
    default: 'LAND POWER | Real Estate & Constructions',
    template: '%s | LAND POWER',
  },
  description:
    'LAND POWER is your trusted partner in premier real estate and turnkey construction solutions. Specializing in RERA-approved open plots, luxury villas, residential communities, and commercial developments.',
  keywords: [
    'LAND POWER',
    'Real Estate Bangalore',
    'Open Plots Bangalore',
    'Luxury Villas',
    'Residential Communities',
    'Commercial Construction',
    'Turnkey Civil Engineering',
    'Rama Krishna Rompivalasa',
    'RERA Approved Layouts',
    'Property Investments',
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
      'Building Your Dreams Into Reality with trust, transparency, and structural excellence across luxury villas, open plots, and commercial developments.',
    url: 'https://www.landpower.com',
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
      'Building Your Dreams Into Reality with trust, transparency, and structural excellence across luxury villas, open plots, and commercial developments.',
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
  image: 'https://www.landpower.com/assets/branding/logo.png',
  '@id': 'https://www.landpower.com',
  url: 'https://www.landpower.com',
  telephone: '+916360644099',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bangalore Business District',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
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
