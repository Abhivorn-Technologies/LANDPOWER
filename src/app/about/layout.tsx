import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | LAND POWER Real Estate & Constructions',
  description:
    'Learn about LAND POWER’s legacy of excellence, core values of integrity and transparency, strategic vision, and leadership in South India real estate.',
  openGraph: {
    title: 'About Us | LAND POWER Real Estate & Constructions',
    description:
      'Learn about LAND POWER’s legacy of excellence, core values of integrity and transparency, strategic vision, and leadership in South India real estate.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
