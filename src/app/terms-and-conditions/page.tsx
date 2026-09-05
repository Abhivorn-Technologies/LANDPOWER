'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { FileText, ChevronLeft, Mail, Phone, Clock, Scale } from 'lucide-react';

export default function TermsAndConditionsPage() {
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

              <p className="font-sans text-sm sm:text-base md:text-lg text-[#e5e2e1]/90 max-w-2xl mx-auto leading-relaxed">
                LAND POWER operates under strict principles of transparency, legal clarity, and professional accountability.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Content Area (Clean Placeholder Card / Future Content Container)
            ========================================================================= */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[960px] mx-auto">
            <AnimatedSection direction="up">
              <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#e5e2e1] shadow-xl text-center flex flex-col items-center">
                {/* Icon Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#034F90]/10 border-2 border-[#034F90]/20 flex items-center justify-center text-[#034F90] mb-6">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#034F90]" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-[1px] bg-[#775a19]" />
                  <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                    STATUS UPDATE
                  </span>
                  <div className="w-8 h-[1px] bg-[#775a19]" />
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#034F90] font-bold mb-4">
                  Terms & Conditions information will be updated soon.
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#43474e] max-w-xl mx-auto mb-8 leading-relaxed">
                  We are currently preparing our Terms & Conditions. The complete information will be available here soon.
                </p>

                <div className="w-full max-w-md h-[1px] bg-[#e5e2e1] mb-8" />

                {/* Contact Support Box */}
                <div className="w-full max-w-lg bg-[#f6f3f2] p-6 rounded-2xl border border-[#e5e2e1] text-left">
                  <h3 className="font-serif text-base font-bold text-[#034F90] mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#775a19]" />
                    <span>Need Agreement or Legal Information?</span>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#43474e] mb-4 leading-relaxed">
                    For information regarding purchase agreements, title deeds, documentation, or terms of service, please contact our legal advisory desk:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:sales@landpower.in"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#034F90] hover:text-[#023b6d] bg-white border border-[#034F90]/20 px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#034F90]" />
                      <span>sales@landpower.in</span>
                    </a>
                    <a
                      href="tel:+919866387871"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#034F90] hover:text-[#023b6d] bg-white border border-[#034F90]/20 px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#034F90]" />
                      <span>+91 98663 87871</span>
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#034F90] text-white hover:bg-[#023b6d] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Return to Homepage
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
