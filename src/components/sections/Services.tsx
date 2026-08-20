'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { servicesData } from '@/data/services';
import { ArrowRight, Trees, Home, Building, Landmark, TrendingUp, HardHat } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'landscape':
        return <Trees className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
      case 'villa':
        return <Home className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
      case 'apartment':
        return <Building className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
      case 'domain':
        return <Landmark className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
      case 'trending_up':
        return <TrendingUp className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
      case 'construction':
        return <HardHat className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
      default:
        return <HardHat className="w-7 h-7 text-[#034F90] group-hover:text-white transition-colors" />;
    }
  };

  const getServiceDesc = (descKey: string) => {
    return (t.services as Record<string, string>)[descKey] || '';
  };

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection direction="up">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            heading={t.services.heading}
            subtitle={t.services.subtitle}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            // Direct route for construction is /construction
            const navRoute = service.id === 'construction' ? '/construction' : `/services/${service.id}`;

            return (
              <AnimatedSection key={service.id} delay={idx * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group bg-white rounded-xl p-8 border border-[#e5e2e1] hover:border-[#034F90]/40 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Service Image Thumbnail */}
                    <div className="relative h-44 w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src={service.image}
                        alt={service.titleKey}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute top-3 left-3 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-[#034F90] transition-colors shadow-md">
                        {getIcon(service.iconName)}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#034F90] mb-3 group-hover:text-[#023b6d] transition-colors">
                      {service.titleKey}
                    </h3>

                    <p className="font-sans text-sm text-[#43474e] mb-6 leading-relaxed">
                      {getServiceDesc(service.descriptionKey)}
                    </p>
                  </div>

                  <Link
                    href={navRoute}
                    className="inline-flex items-center text-xs font-bold text-[#034F90] hover:text-[#023b6d] uppercase tracking-wider gap-1 mt-auto"
                  >
                    {t.services.explore}{' '}
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
