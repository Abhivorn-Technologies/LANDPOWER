import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Modern Villa',
    category: 'COMPLETED',
    categoryLabel: 'Premium Villa',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Premium Villa',
    image: '/assets/gallery/gallery-6.jpg',
    statusBadgeColor: 'bg-emerald-600 text-white',
  },
  {
    id: 'proj-2',
    title: 'Luxury Apartments',
    category: 'ONGOING',
    categoryLabel: 'Residential',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Residential',
    image: '/assets/gallery/gallery-5.png',
    statusBadgeColor: 'bg-blue-600 text-white',
  },
  {
    id: 'proj-3',
    title: 'Commercial Complex',
    category: 'UPCOMING',
    categoryLabel: 'Commercial',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Commercial',
    image: '/assets/gallery/gallery-7.png',
    statusBadgeColor: 'bg-amber-600 text-white',
  },
  {
    id: 'proj-4',
    title: 'Premium Plots',
    category: 'COMPLETED',
    categoryLabel: 'Open Plots',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Open Plots',
    image: '/assets/services/openplots2.png',
    statusBadgeColor: 'bg-red-600 text-white',
  },
];
