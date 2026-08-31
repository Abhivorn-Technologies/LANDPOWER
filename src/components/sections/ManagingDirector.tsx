'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';
import { Eye, Scale, Shield, TrendingUp, ArrowRight } from 'lucide-react';

export const ManagingDirector: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="leadership" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#034F90] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          {/* Image Side */}
          <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-[550px]">
            <Image
              src="/assets/founder/managing-director.png"
              alt="Managing Director Rama Krishna Rompivalasa"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#034F90] via-[#034F90]/20 to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Content Side */}
          <div className="lg:w-3/5 p-8 md:p-14 flex flex-col justify-center text-[#fcf9f8]">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  {t.leadership.eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#fcf9f8] mb-2">
                Rama Krishna Rompivalasa
              </h3>

              <p className="font-sans text-sm text-[#ffdea5] mb-6 uppercase tracking-widest font-semibold">
                {t.leadership.role}
              </p>

              <blockquote className="border-l-4 border-[#ffdea5] pl-6 mb-6 py-1 italic bg-white/5 rounded-r-lg">
                <p className="font-serif text-lg sm:text-xl text-[#fcf9f8] leading-relaxed font-normal">
                  {t.leadership.quote}
                </p>
              </blockquote>

              <p className="font-sans text-sm sm:text-base text-[#e5e2e1]/90 mb-8 leading-relaxed">
                {t.leadership.description}
              </p>

              {/* Leadership Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 border-t border-white/20 pt-6">
                <div className="flex flex-col items-start">
                  <Eye className="w-6 h-6 text-[#ffdea5] mb-1" />
                  <span className="font-sans text-xs font-semibold text-[#fcf9f8]">
                    {t.leadership.vision}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <Scale className="w-6 h-6 text-[#ffdea5] mb-1" />
                  <span className="font-sans text-xs font-semibold text-[#fcf9f8]">
                    {t.leadership.integrity}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <Shield className="w-6 h-6 text-[#ffdea5] mb-1" />
                  <span className="font-sans text-xs font-semibold text-[#fcf9f8]">
                    {t.leadership.trust}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <TrendingUp className="w-6 h-6 text-[#ffdea5] mb-1" />
                  <span className="font-sans text-xs font-semibold text-[#fcf9f8]">
                    {t.leadership.growth}
                  </span>
                </div>
              </div>

              <div>
                <Link
                  href="/founder"
                  className="inline-flex items-center text-xs font-bold text-[#ffdea5] hover:text-white transition-colors group tracking-widest uppercase"
                >
                  <span>MEET OUR FOUNDER</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
