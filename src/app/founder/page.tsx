'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  HeartHandshake,
  GraduationCap,
  HeartPulse,
  Globe2,
  Award,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  Mail,
  Building2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function FounderPage() {
  const shouldReduceMotion = useReducedMotion();

  // Pillars Data
  const pillars = [
    {
      number: '01',
      title: 'Ethical Real Estate',
      description:
        'Transparent practices, clear development processes, and an unyielding commitment to 100% legal clarity and customer trust.',
      icon: ShieldCheck,
    },
    {
      number: '02',
      title: 'Sustainable Growth',
      description:
        'A focus on master-planned quality developments, long-term asset value, and environmental responsibility in urban growth.',
      icon: TrendingUp,
    },
    {
      number: '03',
      title: 'Inclusive Leadership',
      description:
        'Encouraging innovation, operational excellence, team empowerment, and shared value creation across all project tiers.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Corporate Citizenship',
      description:
        'Integrating social responsibility, community welfare, and philanthropic giving into the organisation’s core purpose.',
      icon: HeartHandshake,
    },
  ];

  // Philanthropy Data
  const impactPrograms = [
    {
      title: 'Educational Support',
      desc: 'Supporting learning opportunities, scholarships, and school infrastructure to create brighter futures for the next generation.',
      icon: GraduationCap,
      color: '#034F90',
    },
    {
      title: 'Healthcare Programmes',
      desc: 'Sponsoring essential medical camps, emergency assistance, and health awareness initiatives for community wellbeing.',
      icon: HeartPulse,
      color: '#034F90',
    },
    {
      title: 'Community Welfare',
      desc: 'Contributing to rural development, clean water projects, and social initiatives that uplift underprivileged families.',
      icon: Globe2,
      color: '#034F90',
    },
  ];

  // Core Strengths Data
  const coreStrengths = [
    {
      title: 'Strategic Vision',
      desc: 'Identifying high-growth corridors early to maximize capital appreciation.',
    },
    {
      title: 'Entrepreneurial Leadership',
      desc: 'Driving innovation and operational agility in complex markets.',
    },
    {
      title: 'Real Estate Perspective',
      desc: 'Over 20 years of hands-on property development experience.',
    },
    {
      title: 'Relationship Building',
      desc: 'Cultivating lifelong trust with buyers, partners, and financial institutions.',
    },
    {
      title: 'Professional Integrity',
      desc: 'Uncompromising legal standards, clear titles, and transparent contracts.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: Founder Hero / Introduction
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8] relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Portrait (5 Cols) */}
            <AnimatedSection direction="up" className="lg:col-span-5 w-full">
              <div className="relative">
                {/* Decorative Background Frame Accent */}
                <div className="absolute inset-0 bg-[#034F90]/15 rounded-3xl transform -translate-x-4 -translate-y-4" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full border border-[#e5e2e1] group">
                  <Image
                    src="/assets/founder/managing-director.png"
                    alt="Rama Krishna Rompivalasa - Managing Director of Land Power"
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle Dark Blue Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="font-serif text-xl font-bold block">Rama Krishna Rompivalasa</span>
                    <span className="font-sans text-xs text-[#ffdea5] uppercase tracking-widest">Managing Director</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Founder Editorial Content (7 Cols) */}
            <AnimatedSection delay={0.15} direction="up" className="lg:col-span-7">
              {/* Back Link */}
              <Link
                href="/#leadership"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#775a19] hover:text-[#034F90] uppercase tracking-widest mb-6 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Leadership</span>
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  LEADERSHIP PROFILE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#034F90] font-bold mb-2 leading-tight">
                Rama Krishna Rompivalasa
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#775a19] mb-6 uppercase tracking-widest font-semibold">
                Managing Director, Land Power
              </p>

              {/* Tagline */}
              <div className="inline-block px-4 py-2 bg-[#034F90]/10 rounded-lg text-[#034F90] font-sans text-sm sm:text-base font-bold mb-6 border border-[#034F90]/20">
                Visionary Leader. Ethical Entrepreneur. Committed Philanthropist.
              </div>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                Rama Krishna Rompivalasa is an accomplished entrepreneur, business leader, and philanthropist with more than two decades of real estate experience. As the Managing Director of <strong>Land Power</strong>, his leadership is built around total transparency, architectural innovation, customer trust, and long-term value creation.
              </p>

              {/* Email Link */}
              <div className="mb-6">
                <a
                  href="mailto:rk@landpower.in"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#034F90] hover:text-[#023b6d] bg-white border border-[#034F90]/30 px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
                >
                  <Mail className="w-4 h-4 text-[#034F90]" />
                  <span>rk@landpower.in</span>
                </a>
              </div>

              {/* Quote Block */}
              <blockquote className="border-l-4 border-[#034F90] pl-6 py-3 bg-[#f6f3f2] rounded-r-xl mb-8">
                <p className="font-serif text-lg sm:text-xl text-[#034F90] italic font-normal leading-relaxed">
                  &ldquo;Successful business is built not only on financial returns, but on trust, reputation and the ability to create lasting value for generations to come.&rdquo;
                </p>
              </blockquote>

              {/* Scroll Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#034F90]/70 uppercase tracking-widest animate-pulse">
                <ChevronDown className="w-4 h-4 text-[#034F90]" />
                <span>SCROLL TO EXPLORE LEADERSHIP JOURNEY</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Leadership Story Section
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Story Text */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  OUR FOUNDING VISION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-6 leading-tight">
                Building a Legacy of Excellence
              </h2>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                Under the strategic direction of Rama Krishna Rompivalasa, Land Power has redefined modern real estate development. His philosophy harmonizes strategic growth corridor selection with meticulous legal scrutiny and customer empowerment.
              </p>

              <p className="font-sans text-base text-[#43474e] mb-8 leading-relaxed">
                By combining ethical business practices with forward-thinking architectural master planning, he has spearheaded developments that consistently deliver high capital appreciation for land buyers and home owners.
              </p>

              <div className="space-y-4 pt-6 border-t border-[#e5e2e1]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#034F90] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans text-sm font-bold text-[#034F90]">Strategic Vision & Growth</h4>
                    <p className="font-sans text-xs text-[#43474e]">Pioneering development in high-potential urban infrastructure zones.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#034F90] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-sans text-sm font-bold text-[#034F90]">Uncompromising Integrity</h4>
                    <p className="font-sans text-xs text-[#43474e]">100% clear legal titles with transparent documentation at every step.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Supporting Visual */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-[#e5e2e1]">
                <Image
                  src="/assets/about/about.png"
                  alt="Land Power Master Planned Community Architecture"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-lg font-bold block">Architectural Excellence</span>
                  <span className="font-sans text-xs text-[#ffdea5] uppercase tracking-widest">Master-Planned Communities</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Four Pillars of Purposeful Leadership
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  CORE GUIDING VALUES
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-4">
                Four Pillars of Purposeful Leadership
              </h2>

              <p className="font-sans text-base text-[#43474e]">
                Every decision is guided by values that place people, ethics, trust, and long-term vision at the centre of the organisation.
              </p>
            </AnimatedSection>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pil, idx) => {
                const Icon = pil.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                      className="bg-white p-8 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="font-serif text-3xl font-bold text-[#034F90]/30 group-hover:text-[#034F90] transition-colors">
                            {pil.number}
                          </span>
                          <div className="w-12 h-12 rounded-xl bg-[#034F90]/10 flex items-center justify-center group-hover:bg-[#034F90] transition-colors">
                            <Icon className="w-6 h-6 text-[#034F90] group-hover:text-white transition-colors" />
                          </div>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                          {pil.title}
                        </h3>

                        <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                          {pil.description}
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
            SECTION 4: Leadership Philosophy (Dark Blue Statement)
            ========================================================================= */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden text-center">
          {/* Subtle Parallax Architectural Pattern Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <AnimatedSection direction="up">
              <div className="w-14 h-14 bg-[#ffdea5]/20 border border-[#ffdea5]/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-[#ffdea5]" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Vision. Integrity. <br />
                <span className="text-[#ffdea5]">Trust. Growth.</span>
              </h2>

              <p className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2e1]/90 max-w-2xl mx-auto leading-relaxed">
                Create lasting value through responsible leadership, strong relationships, ethical decisions, and a clear vision for the future.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: Philanthropy & Social Impact
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  SOCIAL IMPACT
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-4">
                Leadership Beyond Business
              </h2>

              <p className="font-sans text-base text-[#43474e] italic">
                &ldquo;True leadership is measured not only by what we build, but by the positive impact we create in people&apos;s lives.&rdquo;
              </p>
            </AnimatedSection>

            {/* 3 Impact Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactPrograms.map((prog, idx) => {
                const Icon = prog.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -6 }}
                      className="bg-white p-8 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full text-center flex flex-col items-center justify-between"
                    >
                      <div>
                        {/* Circular Icon Container */}
                        <div className="w-20 h-20 rounded-full bg-[#034F90]/10 flex items-center justify-center mx-auto mb-6 border-2 border-[#034F90]/20">
                          <Icon className="w-9 h-9 text-[#034F90]" />
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-[#034F90] mb-3">
                          {prog.title}
                        </h3>

                        <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                          {prog.desc}
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
            SECTION 6: Core Strengths
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  LEADERSHIP CAPABILITIES
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
                Core Strengths & Pillars
              </h2>
            </AnimatedSection>

            {/* Horizontal Timeline / Cards Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {coreStrengths.map((str, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.08} direction="up">
                  <div className="bg-white p-6 rounded-xl border border-[#e5e2e1] hover:border-[#034F90] shadow-md hover:shadow-lg transition-all h-full flex flex-col justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold text-[#034F90] block mb-2">
                        0{idx + 1}
                      </span>
                      <h4 className="font-sans text-base font-bold text-[#034F90] mb-2">
                        {str.title}
                      </h4>
                      <p className="font-sans text-xs text-[#43474e] leading-relaxed">
                        {str.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: Closing Section & CTA
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto bg-[#034F90] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl text-center flex flex-col items-center">
            <AnimatedSection direction="up" className="max-w-3xl mx-auto">
              <Award className="w-14 h-14 text-[#ffdea5] mx-auto mb-6" />

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                A Leader Defined by Purpose
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#e5e2e1]/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Rama Krishna Rompivalasa’s journey reflects the belief that lasting success is built through vision, integrity, trust, and an unwavering commitment to creating value that extends beyond business.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#fed488] text-[#034F90] hover:bg-[#e9c176] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>EXPLORE LAND POWER PROJECTS</span>
                  <ArrowRight className="w-4 h-4 text-[#034F90] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="mailto:rk@landpower.in"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border border-white/30 hover:border-white hover:bg-[#023b6d] font-sans text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4 text-[#ffdea5]" />
                  <span>CONTACT (rk@landpower.in)</span>
                </a>
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
