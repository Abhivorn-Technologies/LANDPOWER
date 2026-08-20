import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction & Civil Engineering Services | LAND POWER',
  description:
    'Turnkey construction solutions, architectural planning, civil engineering, and quality-driven project execution for residential & commercial developments.',
  openGraph: {
    title: 'Construction & Civil Engineering Services | LAND POWER',
    description:
      'Turnkey construction solutions, architectural planning, civil engineering, and quality-driven project execution for residential & commercial developments.',
  },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
