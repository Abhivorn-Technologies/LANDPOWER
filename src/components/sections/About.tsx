'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowRight } from 'lucide-react';

const CountUpNumber: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '+' }) => {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(() => (shouldReduceMotion ? target : 0));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    if (!isInView) {
      return;
    }

    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {shouldReduceMotion ? target : count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Split: Image + Brand Introduction Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image + 20+ Years Card */}
          <div className="relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -40, scale: 0.96 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer border border-[#e5e2e1]"
            >
              <Image
                src="/assets/about/about.png"
                alt="LAND POWER - A Real Estate Partner with a Human Soul"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#034F90]/25 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* 20+ Years Experience Floating Card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl hidden md:block border-l-4 border-[#034F90] border border-[#e5e2e1]"
            >
              <p className="font-serif text-4xl font-bold text-[#034F90] mb-1">
                <CountUpNumber target={20} suffix="+" />
              </p>
              <p className="font-sans text-xs uppercase tracking-wider text-[#43474e] font-semibold">
                {t.about.yearsExcellence}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Overview Preview */}
          <div>
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#775a19]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                {t.about.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-6 leading-tight"
            >
              {t.about.heading}
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="font-sans text-base sm:text-lg text-[#43474e] mb-6 leading-relaxed"
            >
              {t.about.previewPara1}
            </motion.p>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="font-sans text-base sm:text-lg text-[#43474e] mb-8 leading-relaxed"
            >
              {t.about.previewPara2}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#034F90] hover:bg-[#023b6d] text-[#fcf9f8] font-sans text-xs sm:text-sm font-bold uppercase tracking-widest rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>{t.about.moreAboutBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#fed488]" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
