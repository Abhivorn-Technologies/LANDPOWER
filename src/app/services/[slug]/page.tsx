'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { serviceDetailsData } from '@/data/serviceDetails';
import {
  ShieldCheck,
  MapPin,
  Trees,
  TrendingUp,
  Home,
  Sparkles,
  Award,
  Building,
  Users,
  Landmark,
  Compass,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ChevronLeft,
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const service = serviceDetailsData[slug];
  const shouldReduceMotion = useReducedMotion();

  if (!service) {
    notFound();
  }

  // Icon mapping function for features grid
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#034F90]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#034F90]" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#034F90]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#034F90]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#034F90]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#034F90]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#034F90]" />;
      case 'Building':
        return <Building className="w-6 h-6 text-[#034F90]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#034F90]" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-[#034F90]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#034F90]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#034F90]" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: Service Hero / Header
            ========================================================================= */}
        <section className="relative py-24 md:py-32 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] overflow-hidden">
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src={service.image}
              alt={service.title}
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
                  {service.eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {service.title}
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2e1]/90 max-w-3xl leading-relaxed">
                {service.shortIntro}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Detailed Service Information & Image
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Detailed Text */}
            <AnimatedSection direction="up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  OVERVIEW
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-6 leading-tight">
                {service.overviewHeading}
              </h2>

              <p className="font-sans text-base text-[#43474e] mb-6 leading-relaxed">
                {service.overviewText1}
              </p>

              <p className="font-sans text-base text-[#43474e] mb-8 leading-relaxed">
                {service.overviewText2}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 pt-6 border-t border-[#e5e2e1]">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#034F90] shrink-0" />
                    <span className="font-sans text-sm font-semibold text-[#034F90]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Service Thumbnail Container */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-[#e5e2e1]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-serif text-xl font-bold block">{service.title}</span>
                  <span className="font-sans text-xs text-[#ffdea5] uppercase tracking-widest">LAND POWER Excellence</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: What We Offer / Features Grid
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[1px] bg-[#775a19]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                  FEATURES & BENEFITS
                </span>
                <div className="w-8 h-[1px] bg-[#775a19]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#034F90] font-bold mb-4">
                {service.featuresHeading}
              </h2>
              <p className="font-sans text-base text-[#43474e]">
                {service.featuresSubtitle}
              </p>
            </AnimatedSection>

            {/* Features Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feat, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -6 }}
                    className="bg-[#ffffff] p-8 rounded-2xl shadow-xl border border-[#e5e2e1] hover:border-[#034F90]/40 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#034F90]/10 flex items-center justify-center mb-6">
                        {getFeatureIcon(feat.iconName)}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                        {feat.title}
                      </h3>
                      <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Service CTA Section
            ========================================================================= */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto bg-[#034F90] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-[#775a19]/30 border border-[#775a19]/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-7 h-7 text-[#ffdea5]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-white">
                {service.ctaTitle}
              </h2>

              <p className="font-sans text-base text-[#e5e2e1]/80 mb-8 leading-relaxed">
                {service.ctaSubtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-[#fed488] text-[#034F90] hover:bg-[#e9c176] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 text-[#034F90] transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/#projects"
                  className="px-8 py-4 bg-transparent text-white border border-white/30 hover:border-white hover:bg-[#023b6d] font-sans text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <span>EXPLORE PROJECTS</span>
                </Link>
              </div>
            </div>
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
