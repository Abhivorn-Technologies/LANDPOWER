'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AnimatedSection } from '../common/AnimatedSection';
import { GraduationCap, HeartPulse, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const CSR: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const initiatives = [
    {
      number: '01',
      icon: GraduationCap,
      title: t.csr.pillar1Title,
      desc: t.csr.pillar1Desc,
      highlights: ['School Tuition & Examination Fees', 'Textbooks, Bags & Stationary', 'Uniforms & Essential Supplies'],
    },
    {
      number: '02',
      icon: HeartPulse,
      title: t.csr.pillar2Title,
      desc: t.csr.pillar2Desc,
      highlights: ['Free Health Screenings & Tests', 'Essential Medicines Distribution', 'Doctor Consultations & Elderly Care'],
    },
    {
      number: '03',
      icon: HeartHandshake,
      title: t.csr.pillar3Title,
      desc: t.csr.pillar3Desc,
      highlights: ['Dry Rations & Nutrition Packs', 'Warm Blankets & Clothes Support', 'Grassroots Shelter & Orphanage Aid'],
    },
  ];

  return (
    <section id="csr" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8] relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="max-w-[1280px] mx-auto relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-[#775a19]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
              {t.csr.eyebrow}
            </span>
            <div className="w-8 h-[1px] bg-[#775a19]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-4">
            {t.csr.heading}
          </h2>

          <p className="font-sans text-base text-[#43474e] leading-relaxed">
            {t.csr.subtitle}
          </p>
        </AnimatedSection>

        {/* 3 CSR Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl font-bold text-[#034F90]/25 group-hover:text-[#034F90] transition-colors">
                        {item.number}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-[#034F90]/10 flex items-center justify-center text-[#034F90] group-hover:bg-[#034F90] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#034F90] mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-[#43474e] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-6 border-t border-[#e5e2e1] space-y-2.5">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-sans font-medium text-[#775a19]">
                        <CheckCircle2 className="w-4 h-4 text-[#034F90] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Community Commitment Statement Banner */}
        <AnimatedSection delay={0.2} direction="up" className="mt-14">
          <div className="bg-[#034F90] text-[#fcf9f8] p-8 md:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffdea5]/20 border border-[#ffdea5]/40 flex items-center justify-center text-[#ffdea5] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  Real Estate Handled Responsibly
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#e5e2e1]/90">
                  Every property developed by LAND POWER creates sustainable value for buyers and continuous support for local communities.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#fed488] text-[#034F90] hover:bg-[#e9c176] font-sans text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-all duration-200 shrink-0"
            >
              <span>CONNECT WITH US</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
