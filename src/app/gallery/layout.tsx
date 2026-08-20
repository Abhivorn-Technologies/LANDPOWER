import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio & Image Gallery | LAND POWER',
  description:
    'Explore LAND POWER’s full project gallery featuring luxury villas, architectural elevations, interior living suites, open plot layouts, and commercial hubs.',
  openGraph: {
    title: 'Project Portfolio & Image Gallery | LAND POWER',
    description:
      'Explore LAND POWER’s full project gallery featuring luxury villas, architectural elevations, interior living suites, open plot layouts, and commercial hubs.',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
