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
  Compass,
  ShieldCheck,
  Award,
  TrendingUp,
  Mail,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Target,
  Sparkles,
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Core brand values
  const values = [
    {
      icon: Compass,
      title: 'Vision',
      desc: 'Forward-thinking architectural design and strategic location planning that anticipate future urban growth.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity',
      desc: 'Uncompromising legal transparency, 100% clear titles, and complete honesty in every customer transaction.',
    },
    {
      icon: Award,
      title: 'Trust',
      desc: 'Over 15 years of proven excellence, delivering premium properties on time to hundreds of satisfied families.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      desc: 'Maximizing investment returns and long-term capital appreciation for property owners and investors.',
    },
  ];

  // Highlights for Why LAND POWER
  const highlights = [
    'RERA Approved & Clear Legal Titles',
    'Prime Strategic Locations with High Growth Potential',
    'Luxury Architecture & High-End Amenities',
    'Transparent Pricing with Zero Hidden Costs',
    'Dedicated Customer Support & End-to-End Assistance',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: About Hero / Page Header
            ========================================================================= */}
        <section className="relative py-24 md:py-32 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] overflow-hidden">
          {/* Background Image with Dark Luxury Gradient Overlay */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/assets/hero/hero.png"
              alt="LAND POWER Luxury Estate"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#034F90] via-[#034F90]/80 to-transparent z-0" />

          <div className="max-w-[1280px] mx-auto relative z-10 text-center">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdea5]/20 border border-[#ffdea5]/40 mb-6">
                <Sparkles className="w-4 h-4 text-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  ABOUT LAND POWER
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                Building Better Lives, <br />
                <span className="text-[#ffdea5]">Every Day</span>
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2e1]/90 max-w-2xl mx-auto leading-relaxed">
                Transformative real estate developments built on trust, architectural innovation, and uncompromising quality standards across South India.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Our Story
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Story Text */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  OUR JOURNEY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-6 leading-tight">
                Crafting Premier Landmarks Since 2011
              </h2>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                Founded with a visionary commitment to elevate real estate benchmarks, <strong>LAND POWER</strong> has evolved from a boutique property developer into a premier real estate powerhouse known for luxury open plots, bespoke villas, and gated communities.
              </p>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                Our foundation rests upon total transparency, legal clarity, and selecting high-potential growth corridors. Every project we undertake is meticulously curated to provide families with security, prosperity, and an elevated lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#e5e2e1] mt-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#034F90]">15+</h3>
                  <p className="font-sans text-xs text-[#775a19] uppercase tracking-wider font-semibold mt-1">
                    Years of Industry Leadership
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#034F90]">100%</h3>
                  <p className="font-sans text-xs text-[#775a19] uppercase tracking-wider font-semibold mt-1">
                    Clear Legal Title Guarantee
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Image */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-[#e5e2e1]">
                <Image
                  src="/assets/about/about.png"
                  alt="LAND POWER Luxury Architecture"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-lg font-bold block">Uncompromising Quality</span>
                  <span className="font-sans text-xs text-[#ffdea5] uppercase tracking-widest">Master-Planned Communities</span>
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
                Guided by Purpose & Excellence
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
                      Our Vision
                    </h3>
                    <p className="font-sans text-base text-[#43474e] leading-relaxed">
                      To redefine luxury real estate across India by delivering world-class, sustainable, and iconic architectural landmarks that inspire generations and foster prosperous communities.
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
                      Our Mission
                    </h3>
                    <p className="font-sans text-base text-[#43474e] leading-relaxed">
                      To empower families and investors with complete legal clarity, prime location advantages, premium design, and transparent dealings in every footprint we build.
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
            SECTION 4: Leadership (Managing Director)
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Director Image */}
              <AnimatedSection direction="up" className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ffdea5]/20 rounded-2xl transform -translate-x-4 -translate-y-4" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full border border-white/10 group">
                    <Image
                      src="/assets/founder/managing-director.png"
                      alt="Rama Krishna Rompivalasa - Managing Director of LAND POWER"
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
                    MEET OUR LEADERSHIP
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-2">
                  Rama Krishna Rompivalasa
                </h2>

                <p className="font-sans text-sm text-[#ffdea5] mb-6 uppercase tracking-widest font-semibold">
                  Managing Director
                </p>

                <p className="font-sans text-base sm:text-lg text-[#e5e2e1]/90 mb-6 leading-relaxed italic">
                  &ldquo;At LAND POWER, we do not merely construct buildings — we craft enduring legacies built on trust, innovation, and an unwavering commitment to quality.&rdquo;
                </p>

                <p className="font-sans text-base text-[#e5e2e1]/80 mb-8 leading-relaxed">
                  Under the strategic leadership of Rama Krishna Rompivalasa, LAND POWER has pioneered customer-centric real estate development, delivering transparent, high-appreciation properties to hundreds of home buyers and investors.
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#ffdea5]/20 flex items-center justify-center text-[#ffdea5]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-[#e5e2e1]/60 block uppercase tracking-wider">Direct Email</span>
                    <a href="mailto:rk@landpower.in" className="font-sans text-sm font-semibold text-[#ffdea5] hover:underline">
                      rk@landpower.in
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: What We Believe In (Brand Values)
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  OUR PHILOSOPHY
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
                What We Believe In
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -6 }}
                      className="bg-white p-8 rounded-xl border border-[#e5e2e1] hover:border-[#034F90]/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-lg bg-[#034F90]/10 flex items-center justify-center mb-6">
                          <Icon className="w-6 h-6 text-[#034F90]" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                          {val.title}
                        </h3>
                        <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                          {val.desc}
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
            SECTION 6: Why LAND POWER & CTA
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#e5e2e1] shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Highlights */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  THE LAND POWER PROMISE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-6 leading-tight">
                Why Choose LAND POWER For Your Next Property?
              </h2>

              <ul className="space-y-4 mb-8">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#43474e] font-sans">
                    <CheckCircle2 className="w-5 h-5 text-[#034F90] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* CTA Box */}
            <AnimatedSection delay={0.2} direction="up" className="bg-[#034F90] p-8 sm:p-10 rounded-2xl text-white text-center flex flex-col items-center justify-center">
              <Users className="w-12 h-12 text-[#ffdea5] mb-4" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Ready to Find Your Ideal Space?
              </h3>
              <p className="font-sans text-sm text-[#e5e2e1]/80 mb-8 max-w-sm">
                Speak directly with our real estate experts today and explore exclusive ongoing and upcoming projects.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fed488] text-[#034F90] hover:bg-[#e9c176] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 text-[#034F90] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
