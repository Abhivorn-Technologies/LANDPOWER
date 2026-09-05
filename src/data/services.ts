import { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'open-plots',
    titleKey: 'Open Plots',
    descriptionKey: 'openPlotsDesc',
    iconName: 'landscape',
    image: '/assets/services/openplots2.png',
  },
  {
    id: 'luxury-villas',
    titleKey: 'Luxury Villas',
    descriptionKey: 'luxuryVillasDesc',
    iconName: 'villa',
    image: '/assets/services/luxury-villas.png',
  },
  {
    id: 'residential-spaces',
    titleKey: 'Residential Spaces & Gated Communities',
    descriptionKey: 'residentialDesc',
    iconName: 'apartment',
    image: '/assets/services/residential.png',
  },
  {
    id: 'commercial-spaces',
    titleKey: 'Commercial Spaces',
    descriptionKey: 'commercialDesc',
    iconName: 'domain',
    image: '/assets/services/commercial.png',
  },
];
