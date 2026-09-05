'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedSection } from '../common/AnimatedSection';
import { FileCheck, Sparkles, Users2, ShieldCheck, Milestone } from 'lucide-react';

export const History: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    {
      icon: FileCheck,
      title: t.history.point1Title,
      desc: t.history.point1Desc,
    },
    {
      icon: Milestone,
      title: t.history.point2Title,
      desc: t.history.point2Desc,
    },
    {
      icon: Users2,
      title: t.history.point3Title,
      desc: t.history.point3Desc,
    },
  ];

  return (
    <section id="history" className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#034F90_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Timeline / Image Collage (5 Cols) */}
          <AnimatedSection direction="up" className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-[#034F90]/15 rounded-3xl transform -translate-x-3 -translate-y-3" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full border border-[#e5e2e1] group">
                <Image
                  src="/assets/gallery/g2.png"
                  alt="LAND POWER 20+ Years History & Heritage in Visakhapatnam"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/90 via-[#034F90]/30 to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdea5]/20 backdrop-blur-md border border-[#ffdea5]/40 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffdea5]" />
                    <span className="font-sans text-[11px] uppercase tracking-widest text-[#ffdea5] font-bold">
                      SINCE TWO DECADES
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    20+ Years of Proven Heritage
                  </h4>
                  <p className="font-sans text-xs text-[#e5e2e1]/90 mt-1">
                    Building landmarks of trust & security across Visakhapatnam.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="absolute -bottom-6 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-[#e5e2e1] hidden sm:flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#034F90]/10 flex items-center justify-center text-[#034F90]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#034F90]">100%</p>
                  <p className="font-sans text-xs uppercase tracking-wider text-[#775a19] font-semibold">
                    Clear Title Deeds
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Column: Editorial Journey Content (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  {t.history.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-4 leading-tight">
                {t.history.heading}
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#775a19] font-semibold mb-6">
                {t.history.subtitle}
              </p>

              <div className="space-y-4 font-sans text-sm sm:text-base text-[#43474e] leading-relaxed mb-8">
                <p>{t.history.story1}</p>
                <p>{t.history.story2}</p>
                <p>{t.history.story3}</p>
              </div>

              {/* Key Timeline Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#e5e2e1]">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={shouldReduceMotion ? {} : { y: -3 }}
                      className="bg-white p-5 rounded-xl border border-[#e5e2e1] hover:border-[#034F90]/30 transition-all shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-[#034F90]/10 flex items-center justify-center text-[#034F90] mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif text-base font-bold text-[#034F90] mb-1">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs text-[#43474e] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
