'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { testimonialsData } from '@/data/testimonials';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const getQuote = (quoteKey: string) => {
    return (t.testimonials as Record<string, string>)[quoteKey] || '';
  };

  const getRole = (roleKey: string) => {
    return (t.testimonials as Record<string, string>)[roleKey] || '';
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <AnimatedSection direction="up">
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            heading={t.testimonials.heading}
            subtitle={t.testimonials.subtitle}
            lightTheme
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-[#fcf9f8] text-[#034F90] p-8 rounded-xl h-full flex flex-col justify-between shadow-xl border border-white/10 transition-all duration-300"
              >
                <div>
                  {/* Star Ratings */}
                  <div className="flex text-[#d4af37] mb-6 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-[#d4af37]" />
                    ))}
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#43474e] mb-8 italic leading-relaxed">
                    {getQuote(item.quoteKey)}
                  </p>
                </div>

                <div className="border-t border-[#e5e2e1] pt-4">
                  <h4 className="font-serif text-lg font-bold text-[#034F90]">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs text-[#775a19] font-medium">
                    {getRole(item.role)}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
