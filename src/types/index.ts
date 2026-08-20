export type ProjectCategory = 'ALL' | 'ONGOING' | 'UPCOMING' | 'COMPLETED';

export interface Project {
  id: string;
  title: string;
  category: 'ONGOING' | 'UPCOMING' | 'COMPLETED';
  categoryLabel: string;
  location: string;
  type: string;
  image: string;
  statusBadgeColor: string;
}

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: string;
  image: string;
  exploreLink?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quoteKey: string;
  rating: number;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  gridSpan: string; // Tailwind grid span classes
}

export type Language = 'en' | 'te' | 'hi' | 'or';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}
