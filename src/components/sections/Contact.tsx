'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';
import { Phone, Smartphone, Mail, MapPin, ExternalLink, Send, CheckCircle } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/pratapas+pride,+Akkayyapalem,+Visakhapatnam,+Andhra+Pradesh+530016/@17.7365583,83.3028294,17z/data=!4m6!3m5!1s0x3a39432e474bdf79:0xf5484a99e9507fd4!8m2!3d17.7365065!4d83.3027272!16s%2Fg%2F11q2sdpfr3?hl=en&entry=ttu';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', email: '', phone: '', details: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Side */}
        <AnimatedSection direction="up">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#775a19]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
              {t.contact.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-6">
            {t.contact.heading}
          </h2>

          <p className="font-sans text-base text-[#43474e] mb-10 leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Mobile Phone Card */}
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              href="tel:+919010214100"
              className="p-5 bg-white border border-[#e5e2e1] rounded-xl hover:border-[#034F90] hover:shadow-lg transition-all group block"
            >
              <Smartphone className="w-6 h-6 text-[#034F90] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-[#775a19] mb-1">
                Mobile
              </h4>
              <p className="font-sans text-sm font-semibold text-[#034F90]">+91 90102 14100</p>
            </motion.a>

            {/* Landline Phone Card */}
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              href="tel:08912712345"
              className="p-5 bg-white border border-[#e5e2e1] rounded-xl hover:border-[#034F90] hover:shadow-lg transition-all group block"
            >
              <Phone className="w-6 h-6 text-[#034F90] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-[#775a19] mb-1">
                Landline Phone
              </h4>
              <p className="font-sans text-sm font-semibold text-[#034F90]">0891-2712345</p>
            </motion.a>

            {/* Emails Card */}
            <div className="p-5 bg-white border border-[#e5e2e1] rounded-xl sm:col-span-2 hover:border-[#034F90] hover:shadow-lg transition-all group">
              <Mail className="w-6 h-6 text-[#034F90] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-[#775a19] mb-2">
                Email Addresses
              </h4>
              <div className="flex flex-wrap gap-4 font-sans text-sm font-semibold text-[#034F90]">
                <a href="mailto:sales@landpower.in" className="hover:underline hover:text-[#023b6d]">
                  sales@landpower.in
                </a>
                <span className="text-gray-300">|</span>
                <a href="mailto:marketing@landpower.in" className="hover:underline hover:text-[#023b6d]">
                  marketing@landpower.in
                </a>
              </div>
            </div>

            {/* Official Office Address Card */}
            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-[#e5e2e1] rounded-xl sm:col-span-2 flex items-start gap-4 hover:border-[#034F90] hover:shadow-lg transition-all group block"
            >
              <MapPin className="w-7 h-7 text-[#034F90] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif text-base font-bold text-[#034F90]">
                    LAND POWER Head Office
                  </h4>
                  <span className="text-xs text-[#775a19] font-sans font-semibold flex items-center gap-1 group-hover:underline">
                    Get Directions <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#43474e] leading-relaxed">
                  No: 49-47-9, Flat No: 201 & 202, Prathapas Pride, Santhipuram, Akkayapalem, Visakhapatnam – 530016, Andhra Pradesh, India.
                </p>
              </div>
            </motion.a>
          </div>

          {/* Map Preview Locator Section */}
          <motion.a
            whileHover={{ scale: 1.01 }}
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-56 rounded-2xl overflow-hidden relative flex items-center justify-center border-2 border-[#034F90]/20 shadow-md group block cursor-pointer"
          >
            {/* Map Preview Image */}
            <Image
              src="/assets/contact/visakhapatnam-map.png"
              alt="LAND POWER Visakhapatnam Google Maps Preview"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Subtle Brand Overlay to keep map details readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/80 via-black/30 to-black/10 group-hover:from-[#034F90]/85 transition-all duration-300" />

            {/* Interactive Pin Badge & CTA */}
            <div className="relative z-10 text-center px-4 py-3 flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#ffdea5] shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-[#ffdea5] animate-bounce" />
              </div>
              <div>
                <h5 className="font-serif text-lg font-bold text-white tracking-wide">
                  Prathapas Pride, Akkayyapalem
                </h5>
                <p className="font-sans text-xs text-[#ffdea5]/90 font-medium">
                  Visakhapatnam, Andhra Pradesh – 530016
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-[#ffdea5] text-[#034F90] px-5 py-2 rounded-full font-sans text-xs font-bold shadow-lg group-hover:bg-white transition-colors mt-2">
                <span>VIEW LIVE LOCATION</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>
        </AnimatedSection>

        {/* Form Side */}
        <AnimatedSection delay={0.15} direction="up">
          <div className="bg-[#034F90] p-8 md:p-12 rounded-2xl shadow-2xl text-[#fcf9f8]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#ffdea5] font-bold mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#e5e2e1]/80 mb-8">
              {t.contact.formSubtitle}
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#ffdea5] mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl text-white font-bold">Thank You!</h4>
                <p className="font-sans text-sm text-[#e5e2e1]/90">
                  Your inquiry has been received. Our expert team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="first-name" className="block font-sans text-xs font-semibold text-[#fcf9f8] mb-2 uppercase tracking-wider">
                    {t.contact.firstName}
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#fcf9f8] text-[#034F90] rounded-lg border-none focus:ring-2 focus:ring-[#ffdea5] p-3.5 text-sm font-sans font-semibold"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-xs font-semibold text-[#fcf9f8] mb-2 uppercase tracking-wider">
                    {t.contact.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#fcf9f8] text-[#034F90] rounded-lg border-none focus:ring-2 focus:ring-[#ffdea5] p-3.5 text-sm font-sans font-semibold"
                    placeholder="yourname@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-sans text-xs font-semibold text-[#fcf9f8] mb-2 uppercase tracking-wider">
                    {t.contact.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#fcf9f8] text-[#034F90] rounded-lg border-none focus:ring-2 focus:ring-[#ffdea5] p-3.5 text-sm font-sans font-semibold"
                    placeholder="+91 90102 14100"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label htmlFor="details" className="block font-sans text-xs font-semibold text-[#fcf9f8] uppercase tracking-wider">
                      {t.contact.projectDetails}
                    </label>
                    <span className="font-sans text-[10px] text-[#e5e2e1]/50">
                      {formData.details.length}/500
                    </span>
                  </div>
                  <textarea
                    id="details"
                    rows={4}
                    maxLength={500}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#fcf9f8] text-[#034F90] rounded-lg border-none focus:ring-2 focus:ring-[#ffdea5] p-3.5 text-sm font-sans font-semibold"
                    placeholder="Tell us about your requirement (plot, villa, budget, location...)"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-3.5 bg-[#fed488] text-[#034F90] font-sans text-sm font-bold rounded-lg hover:bg-[#e9c176] transition-colors mt-4 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#034F90]" />
                  <span>{t.contact.submit}</span>
                </motion.button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
