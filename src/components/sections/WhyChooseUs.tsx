'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { Award, MapPin, Compass, ShieldCheck, Users, BarChart3 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.whyUs.trustedTitle,
      desc: t.whyUs.trustedDesc,
    },
    {
      icon: MapPin,
      title: t.whyUs.primeTitle,
      desc: t.whyUs.primeDesc,
    },
    {
      icon: Compass,
      title: t.whyUs.qualityTitle,
      desc: t.whyUs.qualityDesc,
    },
    {
      icon: ShieldCheck,
      title: t.whyUs.transparentTitle,
      desc: t.whyUs.transparentDesc,
    },
    {
      icon: Users,
      title: t.whyUs.customerTitle,
      desc: t.whyUs.customerDesc,
    },
    {
      icon: BarChart3,
      title: t.whyUs.longtermTitle,
      desc: t.whyUs.longtermDesc,
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden">
      {/* Grid pattern background overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <SectionHeading
          eyebrow={t.whyUs.eyebrow}
          heading={t.whyUs.heading}
          subtitle={t.whyUs.subtitle}
          lightTheme
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-[#ffdea5] flex items-center justify-center text-[#ffdea5] bg-white/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-sm text-[#e5e2e1]/80 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
