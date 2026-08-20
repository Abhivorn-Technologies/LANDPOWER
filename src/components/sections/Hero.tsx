'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll linked effect for background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[88vh] min-h-[650px] flex items-center justify-center overflow-hidden"
    >
      {/* =========================================================================
          LAYER 1: Background Image Container with Parallax & Slow Zoom-In Animation
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: shouldReduceMotion ? 0 : parallaxY }}
          initial={shouldReduceMotion ? { scale: 1.0 } : { scale: 1.0 }}
          animate={
            shouldReduceMotion
              ? { scale: 1.0 }
              : { scale: [1.0, 1.08, 1.0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 16,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }
          }
        >
          <Image
            src="/assets/hero/hero.png"
            alt="LAND POWER Luxury Estate"
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>

      {/* =========================================================================
          LAYER 2: Base Dark Navy Overlay for Text Readability
          ========================================================================= */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(3, 79, 144, 0.32) 0%, rgba(0, 6, 19, 0.18) 50%, rgba(2, 59, 109, 0.48) 100%)',
        }}
      />

      {/* =========================================================================
          LAYER 3: Warm Sunset Orange/Golden Gradient Mask Overlay (Top & Left focus)
          Fades out into transparent towards center and right to preserve villa view
          ========================================================================= */}
      <div
        className="absolute inset-0 z-20 pointer-events-none mix-blend-normal"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(254, 212, 136, 0.35) 0%, rgba(180, 110, 20, 0.22) 42%, transparent 75%),
            linear-gradient(90deg, rgba(180, 110, 20, 0.36) 0%, rgba(150, 90, 15, 0.20) 32%, rgba(0, 0, 0, 0.04) 62%, rgba(0, 0, 0, 0.22) 100%)
          `,
        }}
      />

      {/* =========================================================================
          LAYER 4: Hero Foreground Content with Larger Typography
          ========================================================================= */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center -mt-8 md:-mt-10">
        {/* 1. Top Badge */}
        <motion.span
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          className="inline-block px-5 py-2 mb-6 border border-[#ffdea5]/60 rounded-full font-sans text-sm sm:text-base text-[#ffdea5] uppercase tracking-widest bg-[#034F90]/50 backdrop-blur-md shadow-md transition-all duration-300 cursor-default font-semibold"
        >
          {t.hero.badge}
        </motion.span>

        {/* 2. Main Heading with Larger Prominent Font Sizes */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] text-[#fcf9f8] mb-6 leading-[1.1] font-bold">
          {/* Line 1: BUILDING YOUR */}
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[#fcf9f8] drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]"
          >
            {t.hero.titleLine1}
          </motion.span>

          {/* Line 2: DREAMS INTO REALITY */}
          <motion.span
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[#ffdea5] drop-shadow-[0_3px_12px_rgba(255,222,165,0.35)] mt-1"
          >
            {t.hero.titleLine2}
          </motion.span>
        </h1>

        {/* 3. Description Text */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
          className="font-sans text-lg sm:text-xl md:text-2xl text-[#fcf9f8]/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] font-medium"
        >
          {t.hero.description}
        </motion.p>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: 'easeOut' }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-9 py-4 bg-[#fed488] text-[#785a1a] font-sans text-base font-bold rounded-lg hover:bg-[#e9c176] transition-all shadow-lg hover:shadow-xl duration-200 text-center"
          >
            {t.hero.exploreBtn}
          </motion.a>

          <motion.a
            href="#contact"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-9 py-4 bg-transparent border-2 border-[#fcf9f8] text-[#fcf9f8] font-sans text-base font-bold rounded-lg hover:bg-[#034F90] hover:border-[#034F90] hover:text-white transition-all duration-300 text-center"
          >
            {t.hero.contactBtn}
          </motion.a>
        </div>
      </div>
    </section>
  );
};
