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
          {/* Social Icons: Facebook · Instagram · WhatsApp */}
          <div className="flex space-x-3 pt-2">
            {/* Facebook */}
            <a
              href="#"
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

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow LAND POWER on Instagram"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-[#C13584] hover:text-[#C13584] hover:[box-shadow:0_0_10px_rgba(193,53,132,0.4)]"
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

            {/* WhatsApp */}
            <a
              href="https://wa.me/919010214100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with LAND POWER on WhatsApp"
              className="group w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[#fcf9f8] transition-all duration-300 hover:scale-[1.05] hover:border-[#25D366] hover:text-[#25D366] hover:[box-shadow:0_0_10px_rgba(37,211,102,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
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
                <a href="mailto:ajayguvva7890@gmail.com" className="hover:text-[#ffdea5] font-semibold text-[#ffdea5] transition-colors">
                  ajayguvva7890@gmail.com
                </a>
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
