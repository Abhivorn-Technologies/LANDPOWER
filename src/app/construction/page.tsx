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
  HardHat,
  Building2,
  DraftingCompass,
  ClipboardList,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  Award,
} from 'lucide-react';

export default function ConstructionPage() {
  const shouldReduceMotion = useReducedMotion();

  // Construction Service Areas
  const serviceAreas = [
    {
      icon: HomeIcon,
      title: 'Residential Construction',
      description:
        'Turnkey construction of luxury villas, independent houses, and modern multi-family residential apartments.',
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description:
        'State-of-the-art corporate office buildings, retail centers, and commercial hubs designed for modern enterprise.',
    },
    {
      icon: DraftingCompass,
      title: 'Architectural Planning',
      description:
        'Turnkey 3D elevation design, structural engineering drafting, Vastu planning, and spatial optimization.',
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description:
        'End-to-end site supervision, transparent budget management, material logistics, and quality assurance.',
    },
    {
      icon: Wrench,
      title: 'Renovation & Development',
      description:
        'Modern structural retrofitting, building facade upgrades, interior remodeling, and space expansions.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality & Safety Management',
      description:
        'Rigorous raw material lab testing, IS code structural compliance, and strict on-site safety protocols.',
    },
  ];

  // Why Choose Land Power Construction
  const whyChooseHighlights = [
    {
      icon: Award,
      title: 'Quality Construction',
      desc: 'Uncompromising material standards, IS code structural engineering, and premium finishes.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      desc: 'Seasoned civil engineers, senior architects, and project managers with 20+ years of expertise.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Process',
      desc: 'Clear milestone schedules, open cost breakdowns, and transparent contracts with zero hidden charges.',
    },
    {
      icon: Sparkles,
      title: 'Modern Planning',
      desc: 'Smart building technology, energy-efficient designs, and sustainable construction practices.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      desc: 'Rigorous project management guaranteeing on-schedule handover without delays.',
    },
    {
      icon: CheckCircle2,
      title: 'Customer Satisfaction',
      desc: 'Dedicated single-point relationship managers from groundbreaking to key handover.',
    },
  ];

  function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Building2 {...props} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: Hero Section
            ========================================================================= */}
        <section className="relative py-24 md:py-32 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] overflow-hidden">
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/assets/services/Construction.png"
              alt="LAND POWER Construction Services"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#034F90] via-[#034F90]/85 to-transparent z-0" />

          <div className="max-w-[1280px] mx-auto relative z-10">
            <AnimatedSection direction="up">
              {/* Back to Services breadcrumb */}
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffdea5] hover:text-white uppercase tracking-widest mb-6 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Services</span>
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  LAND POWER CONSTRUCTION SERVICES
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Building Spaces. <br />
                <span className="text-[#ffdea5]">Creating Lasting Value.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2e1]/90 max-w-3xl leading-relaxed">
                Comprehensive, end-to-end construction solutions focused on superior craftsmanship, architectural innovation, strict quality control, and timely project delivery across residential and commercial sectors.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Overview & Image
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Overview Text */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  ENGINEERING EXCELLENCE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-6 leading-tight">
                Turnkey Construction Solutions Built to Last
              </h2>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                At <strong>Land Power</strong>, construction is more than assembling materials — it is the art of transforming architectural vision into resilient, high-performance structures. We provide complete Engineering, Procurement, and Construction (EPC) services tailored to individual homeowners, commercial developers, and institutional investors.
              </p>

              <p className="font-sans text-base text-[#43474e] mb-8 leading-relaxed">
                From initial soil testing and structural design to final interior handover, our civil engineering teams maintain strict compliance with IS codes, environmental safety standards, and transparent milestone reporting.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#e5e2e1]">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#034F90]">100%</h3>
                  <p className="font-sans text-xs text-[#775a19] uppercase tracking-wider font-semibold mt-1">
                    Quality Material Assurance
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#034F90]">On-Time</h3>
                  <p className="font-sans text-xs text-[#775a19] uppercase tracking-wider font-semibold mt-1">
                    Guaranteed Project Delivery
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Construction Thumbnail Container */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-[#e5e2e1]">
                <Image
                  src="/assets/services/Construction.png"
                  alt="Land Power Modern Construction Site"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xl font-bold block">Master Construction Quality</span>
                  <span className="font-sans text-xs text-[#ffdea5] uppercase tracking-widest">Precision Civil Engineering</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Our Construction Services (6 Key Areas)
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  SERVICE CAPABILITIES
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-4">
                Our Construction Services
              </h2>
              <p className="font-sans text-base text-[#43474e]">
                Comprehensive end-to-end building solutions engineered for longevity, design excellence, and safety.
              </p>
            </AnimatedSection>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.08} direction="up">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -6 }}
                      className="bg-white p-8 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#034F90]/10 flex items-center justify-center mb-6">
                          <Icon className="w-6 h-6 text-[#034F90]" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                          {area.title}
                        </h3>
                        <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                          {area.description}
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
            SECTION 4: Why Choose Land Power Construction
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  THE LAND POWER DIFFERENCE
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-4">
                Why Choose Land Power Construction?
              </h2>
            </AnimatedSection>

            {/* Why Choose Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.08} direction="up">
                    <div className="bg-[#f6f3f2] p-8 rounded-2xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#034F90] text-white flex items-center justify-center mb-6 shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: Construction CTA
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto bg-[#034F90] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
            <AnimatedSection direction="up" className="max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-[#775a19]/30 border border-[#775a19]/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-7 h-7 text-[#ffdea5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white">
                Ready to Build Your Project?
              </h2>

              <p className="font-sans text-base text-[#e5e2e1]/80 mb-8 leading-relaxed">
                Connect with our master construction team today for expert consultation, site inspection, and detailed project cost estimation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-[#fed488] text-[#034F90] hover:bg-[#e9c176] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>START YOUR CONSTRUCTION JOURNEY</span>
                  <ArrowRight className="w-4 h-4 text-[#034F90] transition-transform group-hover:translate-x-1" />
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
