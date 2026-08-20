'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';
import { Phone, MessageSquare, MapPin, Map, Send, CheckCircle } from 'lucide-react';

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {/* Call */}
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              href="tel:+916360644099"
              className="p-6 bg-white border border-[#e5e2e1] rounded-xl hover:border-[#034F90] hover:shadow-lg transition-all group block"
            >
              <Phone className="w-7 h-7 text-[#034F90] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans text-sm font-bold text-[#034F90] mb-1">
                {t.contact.callTitle}
              </h4>
              <p className="font-sans text-sm text-[#43474e]">+91 6360644099</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              href="https://wa.me/916360644099"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-[#e5e2e1] rounded-xl hover:border-[#25D366] hover:shadow-lg transition-all group block"
            >
              <MessageSquare className="w-7 h-7 text-[#25D366] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-sans text-sm font-bold text-[#034F90] mb-1">
                {t.contact.whatsappTitle}
              </h4>
              <p className="font-sans text-sm text-[#43474e]">+91 6360644099</p>
            </motion.a>

            {/* Office Address */}
            <div className="p-6 bg-white border border-[#e5e2e1] rounded-xl sm:col-span-2 flex items-start gap-4">
              <MapPin className="w-7 h-7 text-[#034F90] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans text-sm font-bold text-[#034F90] mb-1">
                  {t.contact.officeTitle}
                </h4>
                <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                  {t.contact.officeAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map View Card */}
          <div className="w-full h-48 bg-[#e5e2e1] rounded-xl overflow-hidden relative flex items-center justify-center flex-col text-[#43474e] border border-[#c4c6cf]">
            <Map className="w-10 h-10 mb-2 text-[#034F90]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#034F90]">
              {t.contact.mapView} - Koramangala, Bangalore
            </span>
          </div>
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
                    placeholder="+91 98765 43210"
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
