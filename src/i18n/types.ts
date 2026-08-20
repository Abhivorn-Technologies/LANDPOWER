import { Language } from '@/types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    properties: string;
    projects: string;
    whyUs: string;
    testimonials: string;
    contact: string;
    callExpert: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreBtn: string;
    contactBtn: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    yearsExcellence: string;
    para1: string;
    para2: string;
    qualityTitle: string;
    qualityDesc: string;
    deliveryTitle: string;
    deliveryDesc: string;
    processTitle: string;
    processDesc: string;
    satisfactionTitle: string;
    satisfactionDesc: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    openPlotsDesc: string;
    luxuryVillasDesc: string;
    residentialDesc: string;
    commercialDesc: string;
    investmentDesc: string;
    constructionDesc: string;
    explore: string;
  };
  leadership: {
    eyebrow: string;
    role: string;
    quote: string;
    description: string;
    vision: string;
    integrity: string;
    trust: string;
    growth: string;
    meetFounder: string;
  };
  ambassador: {
    eyebrow: string;
    role: string;
    description1: string;
    description2: string;
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    trustedTitle: string;
    trustedDesc: string;
    primeTitle: string;
    primeDesc: string;
    qualityTitle: string;
    qualityDesc: string;
    transparentTitle: string;
    transparentDesc: string;
    customerTitle: string;
    customerDesc: string;
    longtermTitle: string;
    longtermDesc: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    all: string;
    ongoing: string;
    upcoming: string;
    completed: string;
    viewProject: string;
    location: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    exploreFull: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    test1Quote: string;
    test1Role: string;
    test2Quote: string;
    test2Role: string;
    test3Quote: string;
    test3Role: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    callTitle: string;
    whatsappTitle: string;
    officeTitle: string;
    officeAddress: string;
    formTitle: string;
    formSubtitle: string;
    firstName: string;
    email: string;
    phone: string;
    projectDetails: string;
    submit: string;
    mapView: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactInfo: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

export type TranslationDictionary = Record<Language, Translations>;
