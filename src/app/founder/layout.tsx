import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Founder - Rama Krishna Rompivalasa | LAND POWER',
  description:
    'Discover the vision and leadership of Rama Krishna Rompivalasa, Founder & Managing Director of LAND POWER Real Estate & Constructions.',
  openGraph: {
    title: 'Meet Our Founder - Rama Krishna Rompivalasa | LAND POWER',
    description:
      'Discover the vision and leadership of Rama Krishna Rompivalasa, Founder & Managing Director of LAND POWER Real Estate & Constructions.',
  },
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
