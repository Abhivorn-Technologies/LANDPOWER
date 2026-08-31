'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';

export const BrandAmbassador: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#034F90]/5 skew-x-12 translate-x-32 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-[#034F90]/10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Content */}
          <AnimatedSection direction="up" delay={0.2} className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-[#775a19]" />
              <span className="font-sans text-sm sm:text-base uppercase tracking-widest text-[#775a19] font-bold">
                {t.ambassador.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#034F90] font-bold mb-3 leading-tight">
              Mishti Chakraborty
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#775a19] mb-8 uppercase tracking-widest font-semibold">
              {t.ambassador.role}
            </p>

            <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#034F90] mb-6 leading-relaxed font-medium">
              {t.ambassador.description1}
            </p>

            <p className="font-sans text-base sm:text-lg md:text-xl text-[#43474e] mb-8 leading-relaxed">
              {t.ambassador.description2}
            </p>
          </AnimatedSection>

          {/* Right: Image Side */}
          <AnimatedSection direction="left" delay={0.1} className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-[#034F90]/20 rounded-2xl transform translate-x-4 translate-y-4" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full border border-[#e5e2e1]">
                <Image
                  src="/assets/ambassador/brand-ambassador.png"
                  alt="Mishti Chakraborty - Brand Ambassador of LAND POWER"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
