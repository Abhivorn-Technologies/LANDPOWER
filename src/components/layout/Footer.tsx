'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, Smartphone, Mail, MapPin } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/pratapas+pride,+Akkayyapalem,+Visakhapatnam,+Andhra+Pradesh+530016/@17.7365583,83.3028294,17z/data=!4m6!3m5!1s0x3a39432e474bdf79:0xf5484a99e9507fd4!8m2!3d17.7365065!4d83.3027272!16s%2Fg%2F11q2sdpfr3?hl=en&entry=ttu';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#034F90] text-[#fcf9f8] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Col 1: Brand & Logo */}
        <div className="space-y-4">
          <div className="relative h-20 sm:h-24 md:h-28 w-56 sm:w-64 md:w-72">
            <Image
              src="/assets/branding/footer-logo.png"
              alt="LAND POWER Logo"
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>
          <p className="font-sans text-sm text-[#e5e2e1]/80 leading-relaxed pt-1">
            {t.footer.tagline}
          </p>
          {/* Social Icons: Instagram · Facebook · X · LinkedIn · Reddit */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            {/* 1. Instagram */}
            <a
              href="https://www.instagram.com/landpower_realestate/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow LAND POWER on Instagram"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-[#E1306C] hover:text-[#E1306C] hover:[box-shadow:0_0_10px_rgba(225,48,108,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* 2. Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61594138986849"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow LAND POWER on Facebook"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-[#1877F2] hover:text-[#1877F2] hover:[box-shadow:0_0_10px_rgba(24,119,242,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* 3. X / Twitter */}
            <a
              href="https://x.com/LandPower_VIZAG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow LAND POWER on X"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-white hover:text-white hover:bg-black/40 hover:[box-shadow:0_0_10px_rgba(255,255,255,0.35)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* 4. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/land-power-50bb72435/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow LAND POWER on LinkedIn"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-[#0A66C2] hover:text-[#0A66C2] hover:[box-shadow:0_0_10px_rgba(10,102,194,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* 5. Reddit */}
            <a
              href="https://www.reddit.com/user/Land_Power/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow LAND POWER on Reddit"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-[#FF4500] hover:text-[#FF4500] hover:[box-shadow:0_0_10px_rgba(255,69,0,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Final Website Section Links */}
        <div>
          <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-6 border-b border-white/10 pb-2">
            {t.footer.quickLinks}
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 font-sans text-xs sm:text-sm text-[#e5e2e1]/80">
            <Link href="/#home" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/#about" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/#history" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.history}
            </Link>
            <Link href="/#services" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.services}
            </Link>
            <Link href="/#leadership" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.manager}
            </Link>
            <Link href="/#ambassador" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.ambassador}
            </Link>
            <Link href="/#why-us" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.whyUs}
            </Link>
            <Link href="/#projects" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="/#testimonials" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.testimonials}
            </Link>
            <Link href="/#gallery" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.gallery}
            </Link>
            <Link href="/#csr" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.csr}
            </Link>
            <Link href="/#contact" className="hover:text-[#ffdea5] transition-colors">
              {t.nav.contact}
            </Link>
          </div>
        </div>

        {/* Col 3: Primary Offerings */}
        <div>
          <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-6 border-b border-white/10 pb-2">
            {t.footer.servicesTitle}
          </h4>
          <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#e5e2e1]/80">
            <li>
              <Link href="/services/open-plots" className="hover:text-[#ffdea5] transition-colors">
                Open Plots
              </Link>
            </li>
            <li>
              <Link href="/services/luxury-villas" className="hover:text-[#ffdea5] transition-colors">
                Luxury Villas
              </Link>
            </li>
            <li>
              <Link href="/services/residential-spaces" className="hover:text-[#ffdea5] transition-colors">
                Residential Spaces & Gated Communities
              </Link>
            </li>
            <li>
              <Link href="/services/commercial-spaces" className="hover:text-[#ffdea5] transition-colors">
                Commercial Spaces
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ffdea5] transition-colors">
                About LAND POWER
              </Link>
            </li>
            <li>
              <Link href="/founder" className="hover:text-[#ffdea5] transition-colors">
                Managing Director Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-6 border-b border-white/10 pb-2">
            {t.footer.contactInfo}
          </h4>
          <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#e5e2e1]/80">
            <li className="flex items-start gap-3">
              <Smartphone className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <a href="tel:+919866387871" className="hover:text-[#ffdea5] transition-colors font-semibold">
                Mobile: +91 98663 87871
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <a href="tel:08912712345" className="hover:text-[#ffdea5] transition-colors">
                Landline: 0891-2712345
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <a href="mailto:info@landpower.in" className="hover:text-[#ffdea5] font-semibold text-[#ffdea5] transition-colors">
                  info@landpower.in
                </a>
                <a href="mailto:sales@landpower.in" className="hover:text-[#ffdea5] transition-colors">
                  sales@landpower.in
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffdea5] transition-colors leading-relaxed group text-xs"
              >
                LAND POWER LLP, No: 49-47-9, Flat No: 201 & 202, Prathapas Pride, Santhipuram, Akkayapalem, Visakhapatnam – 530016
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar & Developer Credit */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 border-t border-white/10 pt-6 flex flex-col lg:flex-row justify-between items-center text-xs font-sans text-[#e5e2e1]/70 gap-4 text-center lg:text-left">
        {/* Left Side: Copyright & Clickable Developer Credit */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 leading-relaxed">
          <p>{t.footer.rights}</p>
          <span className="hidden sm:inline-block text-white/30">|</span>
          <p className="inline-flex items-center gap-1.5 font-medium">
            <span>Developed by</span>
            <a
              href="https://www.abhivorn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center transition-all duration-300 hover:scale-[1.04]"
            >
              <span className="bg-gradient-to-r from-[#ffdea5] via-white via-50% to-[#ffdea5] bg-[length:250%_100%] bg-clip-text text-transparent font-semibold tracking-wide animate-glassShimmer drop-shadow-[0_0_8px_rgba(255,222,165,0.4)] group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]">
                Abhivorn Technologies
              </span>
            </a>
          </p>
        </div>

        {/* Right Side: Legal Links */}
        <div className="flex space-x-6 shrink-0">
          <Link href="/privacy-policy" className="hover:text-[#ffdea5] transition-colors">
            {t.footer.privacy}
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-[#ffdea5] transition-colors">
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
};
