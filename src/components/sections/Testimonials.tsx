'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { AnimatedSection } from '../common/AnimatedSection';
import { testimonialsData } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonialsData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Auto advance smoothly every 8 seconds if idle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <AnimatedSection direction="up">
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            heading={t.testimonials.heading}
            subtitle={t.testimonials.subtitle}
            lightTheme
          />
        </AnimatedSection>

        {/* Desktop Interactive Grid / Carousel Switcher */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center mb-12">
          {/* Main Featured Testimonial Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialsData[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="bg-white text-[#034F90] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col justify-between min-h-[380px] relative overflow-hidden"
              >
                {/* Background Watermark Quote */}
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-[#034F90]/5 pointer-events-none" />

                <div>
                  {/* Star Rating & Quote Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-[#d4af37] gap-1">
                      {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-[#d4af37]" />
                      ))}
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#775a19] bg-[#775a19]/10 px-3 py-1 rounded-full">
                      Verified Client
                    </span>
                  </div>

                  {/* Review Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#034F90] mb-4">
                    &ldquo;{testimonialsData[currentIndex].title}&rdquo;
                  </h3>

                  {/* Review Text */}
                  <p className="font-sans text-base sm:text-lg text-[#43474e] leading-relaxed italic mb-8">
                    &ldquo;{testimonialsData[currentIndex].review}&rdquo;
                  </p>
                </div>

                {/* Author Info with Circular Profile Photo */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#e5e2e1]">
                  <div
                    className="w-20 h-20 sm:w-22 sm:h-22 min-w-[80px] min-h-[80px] rounded-full overflow-hidden border-2 border-[#034F90] shrink-0 shadow-lg bg-[#f6f3f2] relative"
                    style={{ borderRadius: '50%', overflow: 'hidden', aspectRatio: '1 / 1' }}
                  >
                    <Image
                      src={testimonialsData[currentIndex].image}
                      alt={testimonialsData[currentIndex].name}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#034F90]">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#775a19] font-semibold mt-1">
                      {testimonialsData[currentIndex].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Select Sidebar List of All 6 Customers (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {testimonialsData.map((item, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center gap-4 border ${
                    isSelected
                      ? 'bg-white/15 border-[#ffdea5] shadow-lg scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                  }`}
                >
                  <div
                    className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full overflow-hidden border-2 border-[#ffdea5] shrink-0 shadow bg-[#023b6d] relative"
                    style={{ borderRadius: '50%', overflow: 'hidden', aspectRatio: '1 / 1' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-serif text-sm font-bold truncate ${isSelected ? 'text-[#ffdea5]' : 'text-white'}`}>
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-[#e5e2e1]/80 truncate mt-0.5">
                      {item.designation}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffdea5] shrink-0 animate-pulse shadow" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Carousel View (Single Card View) */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialsData[currentIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="bg-white text-[#034F90] p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col justify-between min-h-[360px]"
            >
              <div>
                {/* Rating */}
                <div className="flex text-[#d4af37] gap-1 mb-4">
                  {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#d4af37]" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#034F90] mb-3">
                  &ldquo;{testimonialsData[currentIndex].title}&rdquo;
                </h3>

                {/* Text */}
                <p className="font-sans text-sm sm:text-base text-[#43474e] leading-relaxed italic mb-6">
                  &ldquo;{testimonialsData[currentIndex].review}&rdquo;
                </p>
              </div>

              {/* Author with Circular Profile Photo */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#e5e2e1]">
                <div
                  className="w-18 h-18 min-w-[72px] min-h-[72px] rounded-full overflow-hidden border-2 border-[#034F90] shrink-0 shadow-md bg-[#f6f3f2] relative"
                  style={{ borderRadius: '50%', overflow: 'hidden', aspectRatio: '1 / 1' }}
                >
                  <Image
                    src={testimonialsData[currentIndex].image}
                    alt={testimonialsData[currentIndex].name}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#034F90]">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="font-sans text-xs text-[#775a19] font-semibold mt-0.5">
                    {testimonialsData[currentIndex].designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons & Indicators */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#ffdea5]' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full bg-[#fed488] text-[#034F90] flex items-center justify-center font-bold hover:bg-[#e9c176] transition-all shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
