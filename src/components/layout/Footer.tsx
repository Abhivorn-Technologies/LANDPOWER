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
        {/* Col 1: Brand & Logo (Clean spacing between logo, tagline, and social icons) */}
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
          <div className="flex space-x-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] hover:text-[#ffdea5] hover:border-[#ffdea5] hover:bg-[#023b6d] transition-all text-xs font-bold"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] hover:text-[#ffdea5] hover:border-[#ffdea5] hover:bg-[#023b6d] transition-all text-xs font-bold"
              aria-label="Instagram"
            >
              ig
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] hover:text-[#ffdea5] hover:border-[#ffdea5] hover:bg-[#023b6d] transition-all text-xs font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] hover:text-[#ffdea5] hover:border-[#ffdea5] hover:bg-[#023b6d] transition-all text-xs font-bold"
              aria-label="Twitter"
            >
              x
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-6 border-b border-white/10 pb-2">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#e5e2e1]/80">
            <li>
              <Link href="/#home" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link href="/#why-us" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.whyUs}
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.testimonials}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-[#ffdea5] transition-colors">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-6 border-b border-white/10 pb-2">
            {t.footer.servicesTitle}
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#e5e2e1]/80">
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
                Residential Spaces
              </Link>
            </li>
            <li>
              <Link href="/services/commercial-spaces" className="hover:text-[#ffdea5] transition-colors">
                Commercial Spaces
              </Link>
            </li>
            <li>
              <Link href="/services/investment-guidance" className="hover:text-[#ffdea5] transition-colors">
                Investment Guidance
              </Link>
            </li>
            <li>
              <Link href="/construction" className="hover:text-[#ffdea5] transition-colors">
                Construction Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-semibold text-[#fcf9f8] mb-6 border-b border-white/10 pb-2">
            {t.footer.contactInfo}
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#e5e2e1]/80">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <a href="tel:08912712345" className="hover:text-[#ffdea5] transition-colors">
                Phone: 0891-2712345
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Smartphone className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <a href="tel:+919010214100" className="hover:text-[#ffdea5] transition-colors font-semibold">
                Mobile: +91 90102 14100
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <a href="mailto:sales@landpower.in" className="hover:text-[#ffdea5] transition-colors">
                  sales@landpower.in
                </a>
                <a href="mailto:marketing@landpower.in" className="hover:text-[#ffdea5] transition-colors">
                  marketing@landpower.in
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#ffdea5] mt-1 shrink-0" />
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffdea5] transition-colors leading-relaxed group"
              >
                Prathapas Pride, Santhipuram, Akkayapalem, Visakhapatnam – 530016, Andhra Pradesh
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
          <a href="#" className="hover:text-[#ffdea5] transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#" className="hover:text-[#ffdea5] transition-colors">
            {t.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
};
