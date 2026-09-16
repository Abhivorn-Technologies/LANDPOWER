'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ShieldCheck, ChevronLeft, ArrowLeft, Mail, Globe, Building2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                <ShieldCheck className="w-4 h-4 text-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  LEGAL INFORMATION
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Privacy Policy
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
                    PRIVACY POLICY
                  </h2>
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-5 sm:space-y-6 mb-10">
                  <p className="font-sans text-base sm:text-lg text-[#1d1b1a] font-medium leading-relaxed">
                    LAND POWER respects your privacy and protects the personal information collected through our website and communications.
                  </p>

                  <p className="font-sans text-sm sm:text-base text-[#43474e] leading-relaxed">
                    We do not sell personal information. We use collected information only to respond to enquiries, provide services, and comply with applicable laws.
                  </p>
                </div>

                {/* Privacy Concerns Box */}
                <div className="bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 border border-[#e5e2e1] mb-8">
                  <h3 className="font-sans text-sm uppercase tracking-wider text-[#775a19] font-bold mb-4">
                    For privacy concerns:
                  </h3>
                  <div className="space-y-2.5 font-sans text-sm sm:text-base text-[#1d1b1a]">
                    <div className="font-bold text-[#034F90] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#034F90]" />
                      <span>LAND POWER</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#775a19]" />
                      <a
                        href="https://www.landpower.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#034F90] hover:underline font-medium"
                      >
                        www.landpower.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#775a19]" />
                      <a
                        href="mailto:info@landpower.in"
                        className="text-[#034F90] hover:underline font-medium"
                      >
                        info@landpower.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Copyright Line */}
                <div className="border-t border-[#e5e2e1] pt-6 mb-8">
                  <p className="font-sans text-xs sm:text-sm text-[#74777f] font-medium">
                    © 2026 LAND POWER. All Rights Reserved.
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
