'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  HeartHandshake,
  Target,
  Building2,
  ArrowRight,
  Sparkles,
  Quote,
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      icon: ShieldCheck,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc,
      tag: '01',
    },
    {
      icon: TrendingUp,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc,
      tag: '02',
    },
    {
      icon: Users,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc,
      tag: '03',
    },
    {
      icon: HeartHandshake,
      title: t.about.pillar4Title,
      desc: t.about.pillar4Desc,
      tag: '04',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: About Hero / Page Header
            ========================================================================= */}
        <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] overflow-hidden">
          {/* Background Image with Dark Luxury Gradient Overlay */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/assets/hero/hero.png"
              alt="LAND POWER - A Real Estate Partner with a Human Soul"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#034F90] via-[#034F90]/85 to-transparent z-0" />

          <div className="max-w-[1280px] mx-auto relative z-10 text-center">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdea5]/20 border border-[#ffdea5]/40 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  ABOUT LAND POWER
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                {t.about.heading}
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2e1]/95 max-w-3xl mx-auto leading-relaxed">
                {t.about.subtitle}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Foundation & Overview
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Story Text */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-6 leading-tight">
                {t.about.heading}
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#775a19] font-semibold mb-6 leading-relaxed">
                {t.about.subtitle}
              </p>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                {t.about.para1}
              </p>

              <p className="font-sans text-base text-[#43474e] mb-8 leading-relaxed">
                {t.about.para2}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#e5e2e1]">
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#034F90]">20+</h3>
                  <p className="font-sans text-xs text-[#775a19] uppercase tracking-wider font-semibold mt-1">
                    {t.about.yearsExcellence}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#034F90]">100%</h3>
                  <p className="font-sans text-xs text-[#775a19] uppercase tracking-wider font-semibold mt-1">
                    Clear Title Guarantee
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Image */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group border border-[#e5e2e1]">
                <Image
                  src="/assets/about/about.png"
                  alt="LAND POWER - A Real Estate Partner with a Human Soul"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-lg font-bold block">LAND POWER</span>
                  <span className="font-sans text-xs text-[#ffdea5] uppercase tracking-widest">
                    A Safe Piece of Earth Rooted in Peace & Trust
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Our Vision & Mission
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  CORE PURPOSE
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
                Our Vision & Mission
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <AnimatedSection direction="up" delay={0.1}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 bg-[#034F90]/10 rounded-xl flex items-center justify-center mb-6">
                      <Target className="w-7 h-7 text-[#034F90]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#034F90] mb-4">
                      {t.about.visionTitle}
                    </h3>
                    <p className="font-sans text-base text-[#43474e] leading-relaxed">
                      {t.about.visionDesc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#e5e2e1] text-xs font-semibold text-[#034F90] uppercase tracking-wider">
                    Future-Ready Real Estate
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Mission Card */}
              <AnimatedSection direction="up" delay={0.2}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 bg-[#034F90]/10 rounded-xl flex items-center justify-center mb-6">
                      <Building2 className="w-7 h-7 text-[#034F90]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#034F90] mb-4">
                      {t.about.missionTitle}
                    </h3>
                    <p className="font-sans text-base text-[#43474e] leading-relaxed">
                      {t.about.missionDesc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#e5e2e1] text-xs font-semibold text-[#034F90] uppercase tracking-wider">
                    Customer-Centric Trust
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Leadership — The Person Behind Our Principles
            ========================================================================= */}
        <section className="py-24 md:py-36 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
              {/* Director Image */}
              <AnimatedSection direction="up" className="lg:w-1/2 w-full flex justify-center">
                <div className="relative w-full max-w-md sm:max-w-lg">
                  <div className="absolute inset-0 bg-[#ffdea5]/20 rounded-2xl transform -translate-x-4 -translate-y-4" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full border border-white/10 group">
                    <Image
                      src="/assets/founder/79116.png"
                      alt="Ramakrishna Rompivalasa - Managing Director & Designated Partner, LAND POWER"
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Director Content */}
              <AnimatedSection delay={0.2} direction="up" className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[1px] bg-[#ffdea5]" />
                  <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                    LEADERSHIP PROFILE
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
                  {t.about.leaderHeading}
                </h2>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#ffdea5] font-bold mb-2">
                  {t.leadership.name}
                </h3>

                <p className="font-sans text-sm text-[#ffdea5]/90 mb-6 uppercase tracking-widest font-semibold">
                  {t.leadership.role}
                </p>

                {/* Quote Box */}
                <div className="bg-white/10 p-6 rounded-xl border border-white/15 mb-6 relative">
                  <Quote className="w-8 h-8 text-[#ffdea5]/40 absolute top-4 right-4" />
                  <p className="font-serif text-base sm:text-lg text-[#ffdea5] italic leading-relaxed">
                    {t.about.leaderQuote}
                  </p>
                </div>

                <p className="font-sans text-base text-[#e5e2e1]/90 mb-8 leading-relaxed">
                  {t.leadership.description}
                </p>

                {/* Core Leadership Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
                    <span className="font-serif text-sm font-bold text-white block">{t.leadership.vision}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
                    <span className="font-serif text-sm font-bold text-white block">{t.leadership.integrity}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
                    <span className="font-serif text-sm font-bold text-white block">{t.leadership.trust}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-center">
                    <span className="font-serif text-sm font-bold text-white block">{t.leadership.growth}</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: Standalone Strategic Advisory — M. Jagannadha Rao
            ========================================================================= */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-[#f6f3f2] relative overflow-hidden border-y border-[#e5e2e1]">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-8 border border-[#e5e2e1] shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Left: Compact Rectangular Portrait Image */}
                <AnimatedSection direction="up" className="lg:col-span-4 w-full flex justify-center">
                  <div className="relative w-full max-w-[220px] sm:max-w-[250px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 border-[#034F90]/15 group bg-[#023b6d] shrink-0">
                    <Image
                      src="/assets/CUSTOMERS/JAGANNADHA RAO.jpg"
                      alt="M. Jagannadha Rao - Chief Strategy Advisor, Land Power"
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/35 via-transparent to-transparent opacity-30 pointer-events-none" />
                  </div>
                </AnimatedSection>

                {/* Right: Advisor Information */}
                <AnimatedSection delay={0.2} direction="up" className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <div className="w-6 h-[1px] bg-[#775a19]" />
                    <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#775a19] font-bold">
                      CHIEF STRATEGY ADVISOR
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#034F90] font-bold mb-1.5 leading-tight">
                    M. Jagannadha Rao
                  </h2>

                  <div className="space-y-0.5 mb-3">
                    <p className="font-sans text-sm sm:text-base text-[#43474e] font-semibold">
                      Former Vice Chancellor
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[#775a19] font-medium">
                      Adikavi Nannayya University
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-[#e5e2e1] my-2.5" />

                  <div className="inline-flex self-center lg:self-start bg-[#034F90]/10 border border-[#034F90]/20 px-4 py-1.5 rounded-lg mb-3">
                    <p className="font-sans text-xs sm:text-sm font-bold text-[#034F90] uppercase tracking-wider">
                      Chief Strategy Advisor, Land Power
                    </p>
                  </div>

                  {/* Advisor Insight Paragraph */}
                  <p className="font-sans text-xs sm:text-sm md:text-base text-[#43474e] leading-relaxed max-w-2xl">
                    M. Jagannadha Rao brings extensive academic leadership and strategic insight to LAND POWER. His experience and guidance support our commitment to responsible development, long-term value creation, and decisions grounded in integrity and community.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: The Four Pillars Behind Every Decision
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  CORE VALUES
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
                {t.about.pillarsTitle}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -6 }}
                      className="bg-white p-8 rounded-xl border border-[#e5e2e1] hover:border-[#034F90]/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-[#034F90]/10 flex items-center justify-center text-[#034F90] group-hover:bg-[#034F90] group-hover:text-white transition-colors duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-serif text-lg font-bold text-[#775a19]/40">{pillar.tag}</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                          {pillar.title}
                        </h3>
                        <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: CTA Box
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#e5e2e1] shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Info */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  EXPERIENCE LAND POWER
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-4 leading-tight">
                Ready to Find Your Safe Piece of Earth?
              </h2>

              <p className="font-sans text-base text-[#43474e] leading-relaxed">
                Connect with our advisors to receive transparent documentation, layout approvals, and schedule an on-site visit in Visakhapatnam.
              </p>
            </AnimatedSection>

            {/* Right Buttons */}
            <AnimatedSection delay={0.2} direction="up" className="bg-[#034F90] p-8 sm:p-10 rounded-2xl text-white text-center flex flex-col items-center justify-center">
              <Users className="w-12 h-12 text-[#ffdea5] mb-4" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Speak with Our Experts
              </h3>
              <p className="font-sans text-sm text-[#e5e2e1]/80 mb-8 max-w-sm">
                Explore our ongoing and upcoming developments across Visakhapatnam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link
                  href="/#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#fed488] text-[#034F90] hover:bg-[#e9c176] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-4 h-4 text-[#034F90] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
                >
                  <span>CONTACT US</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  );
}
