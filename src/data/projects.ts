import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'ongoing-dev',
    title: 'Well-Planned Layouts Under Active Work',
    category: 'ONGOING',
    categoryLabel: 'Ongoing Developments',
    description:
      'Carefully laid-out residential plots featuring finished approach roads, reliable power lines, and clear, ready-to-verify documentation.',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Ongoing Developments',
    image: '/assets/projects/ongoing.png',
    statusBadgeColor: 'bg-blue-600 text-white',
  },
  {
    id: 'upcoming-dev',
    title: 'Future Communities in Growth Belts',
    category: 'UPCOMING',
    categoryLabel: 'Upcoming Developments',
    description:
      'Handpicked land locations selected for practical connectivity, upcoming infrastructure, and strong long-term security.',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Upcoming Developments',
    image: '/assets/projects/upcoming.png',
    statusBadgeColor: 'bg-amber-600 text-white',
  },
  {
    id: 'completed-dev',
    title: 'Fully Handed-Over Neighbourhoods',
    category: 'COMPLETED',
    categoryLabel: 'Completed Developments',
    description:
      'Completed developments where boundaries are marked, title deeds are registered, and hundreds of families are already enjoying real appreciation on their hard-earned money.',
    location: 'Visakhapatnam, Andhra Pradesh',
    type: 'Completed Developments',
    image: '/assets/projects/completed.png',
    statusBadgeColor: 'bg-emerald-600 text-white',
  },
];
