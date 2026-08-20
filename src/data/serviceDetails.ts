export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  shortIntro: string;
  image: string;
  overviewHeading: string;
  overviewText1: string;
  overviewText2: string;
  featuresHeading: string;
  featuresSubtitle: string;
  features: {
    iconName: string;
    title: string;
    description: string;
  }[];
  highlights: string[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const serviceDetailsData: Record<string, ServiceDetail> = {
  'open-plots': {
    slug: 'open-plots',
    title: 'Open Plots & Gated Communities',
    eyebrow: 'LAND POWER SERVICES',
    shortIntro:
      'Invest in strategically located, RERA-approved open plots with 100% clear legal titles, premium infrastructure, and immense capital appreciation potential.',
    image: '/assets/services/openplots2.png',
    overviewHeading: 'Strategic Land Investments Built for Long-Term Wealth',
    overviewText1:
      'LAND POWER offers premier open plots situated along rapidly developing growth corridors in South India. Every plot layout is master-planned with wide asphalt roads, underground electrical cabling, rainwater harvesting systems, and manicured landscaped parks.',
    overviewText2:
      'We handle all legal title verifications, encumbrance certificates, and RERA approvals upfront so that you can invest with absolute peace of mind. Whether building your dream home or creating a resilient wealth portfolio, our open plots deliver unmatched security and value.',
    featuresHeading: 'What We Offer in Open Plots',
    featuresSubtitle: 'Key benefits that make our open plots the preferred choice for discerning buyers.',
    features: [
      {
        iconName: 'ShieldCheck',
        title: '100% Clear Titles & Spot Registration',
        description:
          'Fully verified legal documentation with hassle-free, transparent spot registration procedures.',
      },
      {
        iconName: 'MapPin',
        title: 'Strategic High-Growth Corridors',
        description:
          'Carefully chosen locations in fast-growing urban peripheral zones with upcoming infrastructure projects.',
      },
      {
        iconName: 'Trees',
        title: 'World-Class Layout Amenities',
        description:
          'Gated layouts featuring wide 40ft/60ft roads, underground drainage, street lighting, and children parks.',
      },
      {
        iconName: 'TrendingUp',
        title: 'High Capital Appreciation',
        description:
          'Consistently high ROI driven by proximity to major highways, industrial zones, and IT parks.',
      },
    ],
    highlights: [
      'RERA Approved Layouts with HMDA/DTCP Approvals',
      'Bank Loan Facilities from Leading Financial Institutions',
      '24/7 Security & Boundary Wall Protection',
      'Immediate Construction & Registration Ready',
    ],
    ctaTitle: 'Ready to Invest in Your Ideal Plot?',
    ctaSubtitle:
      'Contact our property experts today to schedule an exclusive site visit and explore available plot dimensions.',
  },

  'luxury-villas': {
    slug: 'luxury-villas',
    title: 'Luxury Villas & Bespoke Living',
    eyebrow: 'LAND POWER SERVICES',
    shortIntro:
      'Experience unmatched elegance with custom-designed architectural villas offering private gardens, infinity pools, and world-class community amenities.',
    image: '/assets/services/luxury-villas.png',
    overviewHeading: 'Redefining Opulence Through Bespoke Architectural Craftsmanship',
    overviewText1:
      'Our luxury villas are designed for individuals who appreciate refined sophistication and privacy. Every villa seamlessly blends modern architectural aesthetics with functional luxury, featuring double-height living areas, private rooftop terraces, and lush landscaped gardens.',
    overviewText2:
      'Nestled within secure, gated communities, LAND POWER villas provide a sanctuary of peace while maintaining excellent connectivity to premier schools, fine dining, and financial hubs.',
    featuresHeading: 'Exclusive Villa Features & Amenities',
    featuresSubtitle: 'Unrivaled comfort, privacy, and modern luxury tailored to your lifestyle.',
    features: [
      {
        iconName: 'Home',
        title: 'Contemporary Luxury Architecture',
        description:
          'Bespoke modern elevation featuring premium marble flooring, floor-to-ceiling glass facades, and Italian fittings.',
      },
      {
        iconName: 'Sparkles',
        title: 'Private Infinity Pools & Decks',
        description:
          'Personalized swimming pools, sun decks, and rooftop gardens designed for private relaxation.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Multi-Tier Gated Security',
        description:
          '24/7 CCTV surveillance, biometric access controls, and smart home automation integration.',
      },
      {
        iconName: 'Award',
        title: 'Customizable Floor Plans',
        description:
          'Flexible space design options allowing you to tailor home theaters, private gyms, and wine cellars.',
      },
    ],
    highlights: [
      'Private Solar Power Integration & EV Charging Ports',
      'Exclusive Clubhouse with Spa, Gym, & Tennis Courts',
      'High-Yield Rental Potential & Prestige Asset Value',
      'Complete Property Maintenance & Concierge Support',
    ],
    ctaTitle: 'Find Your Dream Luxury Villa Today',
    ctaSubtitle:
      'Schedule a private walkthrough with our luxury real estate advisors and explore our premium villa portfolios.',
  },

  'residential-spaces': {
    slug: 'residential-spaces',
    title: 'Residential Spaces & Modern Communities',
    eyebrow: 'LAND POWER SERVICES',
    shortIntro:
      'Thoughtfully crafted residential developments designed for vibrant family living, modern comforts, and long-term security in prime urban neighborhoods.',
    image: '/assets/services/residential.png',
    overviewHeading: 'Creating Warm, Connected Communities for Happy Families',
    overviewText1:
      'LAND POWER residential developments are designed around the principles of ergonomics, natural lighting, and green spaces. We create environments where families thrive, offering state-of-the-art clubhouses, sports arenas, and peaceful walking trails.',
    overviewText2:
      'Built with superior construction materials and adherence to strict safety standards, our residential projects guarantee long-term durability and peace of mind.',
    featuresHeading: 'Why Choose Our Residential Communities',
    featuresSubtitle: 'Designed to elevate your everyday living experience.',
    features: [
      {
        iconName: 'Building',
        title: 'Ergonomic & Spacious Layouts',
        description:
          'Vastu-compliant floor plans maximized for ventilation, natural sunlight, and functional space utility.',
      },
      {
        iconName: 'Users',
        title: 'Vibrant Community Spaces',
        description:
          'Multi-purpose community halls, amphitheaters, and dedicated play parks for children and seniors.',
      },
      {
        iconName: 'MapPin',
        title: 'Prime Location Connectivity',
        description:
          'Strategic proximity to international schools, multi-specialty hospitals, and shopping centers.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Eco-Friendly Living Features',
        description:
          'Rainwater harvesting, sewage treatment plants, and energy-efficient LED communal lighting.',
      },
    ],
    highlights: [
      'Seismic Zone III Compliant Structural Integrity',
      'High-Speed Elevators with Power Backup',
      'Dedicated Covered Car Parking & Visitor Facilities',
      '24/7 Water Supply & On-Site Facility Management',
    ],
    ctaTitle: 'Discover Your New Family Home',
    ctaSubtitle:
      'Get in touch with our residential consultants to explore current floor plans and brochure details.',
  },

  'commercial-spaces': {
    slug: 'commercial-spaces',
    title: 'Commercial Spaces & Retail Hubs',
    eyebrow: 'LAND POWER SERVICES',
    shortIntro:
      'High-visibility commercial properties, office spaces, and retail storefronts situated in high-footfall business districts for maximum commercial success.',
    image: '/assets/services/commercial.png',
    overviewHeading: 'Prime Commercial Real Estate to Power Business Expansion',
    overviewText1:
      'LAND POWER commercial developments provide businesses and investors with cutting-edge retail and office spaces. Situated in strategic urban corridors with heavy daily footfalls, our commercial towers offer maximum brand visibility and operational efficiency.',
    overviewText2:
      'From corporate office suites to high-street retail shops, our properties are designed with modern glass elevations, spacious floor plates, and high-speed infrastructure to support modern enterprise.',
    featuresHeading: 'Commercial Property Advantages',
    featuresSubtitle: 'Engineered for high footfall, high rental yields, and business growth.',
    features: [
      {
        iconName: 'Landmark',
        title: 'High-Visibility Glass Elevations',
        description:
          'Modern architectural design crafted to give your retail brand or office an impressive presence.',
      },
      {
        iconName: 'TrendingUp',
        title: 'Superior Rental Yields',
        description:
          'Commercial assets in prime business hubs delivering strong capital growth and dependable rental returns.',
      },
      {
        iconName: 'Building',
        title: 'Flexible Business Floor Plates',
        description:
          'Customizable workspace options suited for IT firms, corporate headquarters, and retail outlets.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Advanced Building Management',
        description:
          '100% power backup, central air-conditioning provisions, multi-tier fire security, and high-speed lifts.',
      },
    ],
    highlights: [
      'Ample Multi-Level Basement Parking Spaces',
      'High Traffic Footfall & Highway Frontage Access',
      'Institutional Lease Management Assistance',
      'Clear Commercial Approvals & Occupancy Certificates',
    ],
    ctaTitle: 'Elevate Your Business Location Today',
    ctaSubtitle:
      'Speak with our commercial real estate specialists to inquire about leasing options and property purchases.',
  },

  'investment-guidance': {
    slug: 'investment-guidance',
    title: 'Real Estate Investment Guidance',
    eyebrow: 'LAND POWER SERVICES',
    shortIntro:
      'Expert real estate advisory services delivering data-backed market insights, portfolio diversification, and high-ROI property acquisitions.',
    image: '/assets/services/open-plots.png',
    overviewHeading: 'Maximize Returns With Data-Driven Real Estate Advisory',
    overviewText1:
      'Navigating the real estate market requires deep domain expertise and data-backed market analysis. LAND POWER provides comprehensive investment guidance to help individuals, NRIs, and institutional investors build high-yielding real estate portfolios.',
    overviewText2:
      'We evaluate upcoming infrastructure corridors, government master plans, and historical price appreciation trends to recommend assets that match your risk profile and long-term financial goals.',
    featuresHeading: 'Our Investment Advisory Framework',
    featuresSubtitle: 'Strategic guidance designed to protect capital and maximize growth.',
    features: [
      {
        iconName: 'TrendingUp',
        title: 'Data-Backed Market Analytics',
        description:
          'Thorough analysis of land appreciation rates, infrastructure roadmaps, and micro-market demand trends.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Risk Mitigation & Due Diligence',
        description:
          'Comprehensive legal, financial, and regulatory checks before presenting investment opportunities.',
      },
      {
        iconName: 'Award',
        title: 'Customized Wealth Portfolios',
        description:
          'Tailored investment roadmaps for short-term flipping, long-term land holding, or passive rental income.',
      },
      {
        iconName: 'Compass',
        title: 'NRI Investment Facilitation',
        description:
          'Dedicated NRI desk providing end-to-end legal support, RBI compliance guidance, and asset management.',
      },
    ],
    highlights: [
      'Proven Track Record of Delivering Above-Market Gains',
      'Transparent Fee Structure & Direct Developer Deals',
      'Portfolio Rebalancing & Timely Exit Strategies',
      'Complete Confidentiality & Dedicated Wealth Managers',
    ],
    ctaTitle: 'Build a High-Yield Real Estate Portfolio',
    ctaSubtitle:
      'Book a 1-on-1 strategic consultation with our senior investment advisors today.',
  },

  'construction': {
    slug: 'construction',
    title: 'Construction & Architectural Services',
    eyebrow: 'LAND POWER CONSTRUCTION SERVICES',
    shortIntro:
      'End-to-end construction solutions focused on superior craftsmanship, architectural innovation, strict quality control, and timely project delivery.',
    image: '/assets/services/Construction.png',
    overviewHeading: 'Building Spaces. Creating Lasting Value.',
    overviewText1:
      'LAND POWER offers turnkey construction and engineering services for residential villas, commercial complexes, and master-planned layouts. From architectural design to structural execution and interior handover, our engineering team adheres to IS code standards and modern construction benchmarks.',
    overviewText2:
      'With over two decades of industry leadership, we leverage advanced project management tools, high-grade construction materials, and continuous quality audits to build resilient, sustainable, and aesthetically commanding structures built to last for generations.',
    featuresHeading: 'Our Construction Solutions',
    featuresSubtitle: 'Comprehensive turnkey engineering, design, and project management services.',
    features: [
      {
        iconName: 'Building',
        title: 'Residential & Commercial Construction',
        description:
          'Turnkey construction of luxury villas, apartments, retail hubs, and corporate offices.',
      },
      {
        iconName: 'Sparkles',
        title: 'Architectural & Spatial Planning',
        description:
          'Custom 3D elevations, structural design, Vastu planning, and sustainable space utilization.',
      },
      {
        iconName: 'ShieldCheck',
        title: 'Quality & Safety Engineering',
        description:
          'Rigorous material testing, seismic structural compliance, and strict site safety management.',
      },
      {
        iconName: 'Award',
        title: 'On-Schedule Delivery & Management',
        description:
          'Structured milestone tracking, transparent cost control, and guaranteed timely project handover.',
      },
    ],
    highlights: [
      'Turnkey EPC (Engineering, Procurement, & Construction)',
      'Strict Material Quality Inspection & Lab Certifications',
      'Dedicated Site Engineers & Project Managers',
      'Post-Handover Warranty & Structural Integrity Guarantee',
    ],
    ctaTitle: 'Start Your Construction Journey Today',
    ctaSubtitle:
      'Connect with our master construction team today for expert consultation and cost estimation.',
  },
};
