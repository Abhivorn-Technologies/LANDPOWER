'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { History, FileCheck2, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const trustCards = [
    {
      number: '01',
      icon: History,
      title: t.whyUs.card1Title,
      desc: t.whyUs.card1Desc,
      points: [
        'Over two decades of hands-on presence',
        'Deep local land acquisition expertise',
        'Longstanding relationships with buyers',
      ],
    },
    {
      number: '02',
      icon: FileCheck2,
      title: t.whyUs.card2Title,
      desc: t.whyUs.card2Desc,
      points: [
        '100% legally scrutinized & clear titles',
        'Zero ambiguity or hidden clauses',
        'Complete registration & approval support',
      ],
    },
    {
      number: '03',
      icon: HeartHandshake,
      title: t.whyUs.card3Title,
      desc: t.whyUs.card3Desc,
      points: [
        'Education support for underprivileged children',
        'Free rural & peri-urban healthcare camps',
        'Grassroots community relief & shelter aid',
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden">
      {/* Grid pattern background overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <SectionHeading
          eyebrow={t.whyUs.eyebrow}
          heading={t.whyUs.heading}
          subtitle={t.whyUs.subtitle}
          lightTheme
        />

        {/* 3 Core Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 0.12} direction="up">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-[#ffdea5]/50 transition-all duration-300 h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl font-bold text-[#ffdea5]/40 group-hover:text-[#ffdea5] transition-colors">
                        {card.number}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-[#ffdea5]/10 border border-[#ffdea5]/30 flex items-center justify-center text-[#ffdea5] group-hover:bg-[#ffdea5] group-hover:text-[#034F90] transition-colors duration-300 shadow-md">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-snug">
                      {card.title}
                    </h3>

                    <p className="font-sans text-sm text-[#e5e2e1]/85 leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-6 border-t border-white/15 space-y-2.5">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs font-sans text-[#ffdea5]">
                        <CheckCircle2 className="w-4 h-4 text-[#ffdea5] shrink-0 mt-0.5" />
                        <span className="text-[#e5e2e1]/90">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
