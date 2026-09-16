'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Scale, ChevronLeft, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const termsList = [
    'All project details, prices, images, specifications, availability and amenities are subject to change without prior notice.',
    'Website information is for general guidance only and should not be considered a guarantee or offer. Please verify project approvals and documents before making any purchase or investment decision.',
    'By submitting an enquiry, you consent to LAND POWER or its authorised representatives contacting you by phone, email or WhatsApp regarding your enquiry and related projects.',
    'All website content, including logos, images, videos and text, is protected by applicable intellectual property laws and may not be used without permission.',
    'LAND POWER is not responsible for third-party website content or links.',
    'These Terms are governed by the applicable laws of India.',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: Header / Hero
            ========================================================================= */}
        <section className="relative py-16 md:py-24 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#034F90] via-[#034F90]/90 to-transparent" />

          <div className="max-w-[1280px] mx-auto relative z-10 text-center">
            <AnimatedSection direction="up">
              {/* Back to Home Link */}
              <div className="flex justify-center mb-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffdea5] hover:text-white uppercase tracking-widest transition-colors group"
                >
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>Back to Home</span>
                </Link>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdea5]/20 border border-[#ffdea5]/40 mb-4 backdrop-blur-sm">
                <Scale className="w-4 h-4 text-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  LEGAL INFORMATION
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Terms & Conditions
              </h1>

              <div className="w-20 h-1 bg-[#ffdea5] mx-auto rounded-full mt-2" />
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Content Area
            ========================================================================= */}
        <section className="py-12 md:py-20 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[860px] mx-auto">
            <AnimatedSection direction="up">
              <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-[#e5e2e1] shadow-xl text-left">
                {/* Header within Card */}
                <div className="border-b border-[#e5e2e1] pb-6 mb-8">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#034F90] font-bold tracking-tight">
                    TERMS & CONDITIONS
                  </h2>
                </div>

                {/* Introductory Statement */}
                <p className="font-sans text-base sm:text-lg text-[#1d1b1a] font-medium leading-relaxed mb-8">
                  By using the LAND POWER website, you agree to these Terms & Conditions.
                </p>

                {/* Bullet-Point List */}
                <ul className="space-y-5 sm:space-y-6 mb-10">
                  {termsList.map((term, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3.5 sm:gap-4 font-sans text-sm sm:text-base text-[#43474e] leading-relaxed group"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#034F90] mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>

                {/* Concluding Statement */}
                <div className="bg-[#f6f3f2] rounded-2xl p-5 sm:p-6 border border-[#e5e2e1] mb-8">
                  <p className="font-sans text-sm sm:text-base text-[#1d1b1a] font-semibold leading-relaxed">
                    LAND POWER reserves the right to update these Terms & Conditions at any time.
                  </p>
                </div>

                {/* Return Button */}
                <div className="pt-2 flex justify-start">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#034F90] text-white hover:bg-[#023b6d] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-md hover:shadow-lg transition-all group"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span>Return to Homepage</span>
                  </Link>
                </div>
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
