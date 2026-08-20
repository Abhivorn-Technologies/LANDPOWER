'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CheckCircle2, Clock, Handshake, Headphones, ArrowRight } from 'lucide-react';

// Count-up animation component that resets to 0 when scrolled away and re-animates on return
const CountUpNumber: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    if (isInView) {
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
    } else {
      setCount(0); // Reset to 0 when scrolling away
    }
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      icon: CheckCircle2,
      title: t.about.qualityTitle,
      desc: t.about.qualityDesc,
    },
    {
      icon: Clock,
      title: t.about.deliveryTitle,
      desc: t.about.deliveryDesc,
    },
    {
      icon: Handshake,
      title: t.about.processTitle,
      desc: t.about.processDesc,
    },
    {
      icon: Headphones,
      title: t.about.satisfactionTitle,
      desc: t.about.satisfactionDesc,
    },
  ];

  // Heading split into two lines for line-by-line reveal
  const headingLines = (t.about.heading || 'Building Better\nLives, Every Day').split('\n');

  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8] overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Villa Image + 15+ Years Card */}
        <div className="relative">
          {/* Villa Image with Left Slide & Scale Reveal */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -40, scale: 0.96 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            <Image
              src="/assets/about/about.png"
              alt="LAND POWER Luxury Construction"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle Luxury Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#034F90]/15 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

          {/* 15+ Years of Excellence Card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl hidden md:block border-l-4 border-[#034F90] transition-shadow duration-300 hover:shadow-2xl"
          >
            <p className="font-serif text-4xl font-bold text-[#034F90] mb-1">
              <CountUpNumber target={15} suffix="+" />
            </p>
            <p className="font-sans text-xs uppercase tracking-wider text-[#43474e] font-semibold">
              {t.about.yearsExcellence}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Content Sequence */}
        <div>
          {/* Eyebrow Label */}
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

          {/* Line-by-Line Heading Reveal */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold mb-6 leading-tight">
            {headingLines.map((line, idx) => (
              <motion.span
                key={idx}
                className="block"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          {/* Paragraph 1 */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="font-sans text-base text-[#43474e] mb-6 leading-relaxed"
          >
            {t.about.para1}
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="font-sans text-base text-[#43474e] mb-8 leading-relaxed"
          >
            {t.about.para2}
          </motion.p>

          {/* Staggered Feature Items Grid */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#e5e2e1]"
          >
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3 }}
                  className="group flex items-start gap-3 cursor-pointer p-1 rounded-lg transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#775a19] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-sans text-sm font-bold text-[#034F90] mb-1 transition-colors duration-300 group-hover:text-[#775a19]">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-[#43474e]">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* MORE DETAILS CTA Button using Brand Blue #034F90 & #023b6d Hover */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#034F90] hover:bg-[#023b6d] text-[#fcf9f8] font-sans text-xs font-bold uppercase tracking-widest rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>MORE DETAILS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
