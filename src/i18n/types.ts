import { Language } from '@/types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    history: string;
    services: string;
    manager: string;
    ambassador: string;
    whyUs: string;
    projects: string;
    testimonials: string;
    gallery: string;
    csr: string;
    contact: string;
    callExpert: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    supportingText: string;
    exploreBtn: string;
    whatsappBtn: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    yearsExcellence: string;
    subtitle: string;
    para1: string;
    para2: string;
    previewPara1: string;
    previewPara2: string;
    moreAboutBtn: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    leaderHeading: string;
    leaderQuote: string;
    pillarsTitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  history: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    story1: string;
    story2: string;
    story3: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    openPlotsDesc: string;
    luxuryVillasDesc: string;
    residentialDesc: string;
    commercialDesc: string;
    explore: string;
  };
  leadership: {
    eyebrow: string;
    name: string;
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
    name: string;
    role: string;
    description1: string;
    description2: string;
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    all: string;
    ongoing: string;
    upcoming: string;
    completed: string;
    ongoingDesc: string;
    upcomingDesc: string;
    completedDesc: string;
    viewProject: string;
    requestInfo: string;
    location: string;
    brochureNote: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    exploreFull: string;
  };
  csr: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    mobileTitle: string;
    landlineTitle: string;
    emailTitle: string;
    officeTitle: string;
    officeAddress: string;
    formTitle: string;
    formSubtitle: string;
    firstName: string;
    email: string;
    phone: string;
    projectDetails: string;
    submit: string;
    whatsappCtaTitle: string;
    whatsappCtaDesc: string;
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
