'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export interface FullGalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interiors' | 'Architecture' | 'Construction';
  image: string;
}

export const fullGalleryItems: FullGalleryItem[] = [
  {
    id: 'g1',
    title: 'Contemporary Architectural Villa',
    category: 'Architecture',
    image: '/assets/gallery/g1.png',
  },
  {
    id: 'g2',
    title: 'Luxury Waterfront Estate',
    category: 'Residential',
    image: '/assets/gallery/g2.png',
  },
  {
    id: 'g3',
    title: 'Executive Living Room Suite',
    category: 'Interiors',
    image: '/assets/gallery/g3.png',
  },
  {
    id: 'g4',
    title: 'Master Modular Kitchen',
    category: 'Interiors',
    image: '/assets/gallery/g4.png',
  },
  {
    id: 'g5',
    title: 'Corporate Commercial Center',
    category: 'Commercial',
    image: '/assets/gallery/g5.png',
  },
  {
    id: 'g6',
    title: 'Civil Engineering & Construction',
    category: 'Construction',
    image: '/assets/gallery/g6.png',
  },
  {
    id: 'g7',
    title: 'Rooftop Terrace & Lounge Deck',
    category: 'Architecture',
    image: '/assets/gallery/g7.png',
  },
  {
    id: 'g8',
    title: 'Premium Villa & Infinity Pool',
    category: 'Residential',
    image: '/assets/gallery/g8.png',
  },
  {
    id: 'gallery-1',
    title: 'Sunset Oceanfront Luxury Villa',
    category: 'Architecture',
    image: '/assets/gallery/gallery-1.png',
  },
  {
    id: 'gallery-2',
    title: 'Modern Interior Living Room',
    category: 'Interiors',
    image: '/assets/gallery/gallery-2.png',
  },
  {
    id: 'gallery-3',
    title: 'Designer Kitchen & Marble Island',
    category: 'Interiors',
    image: '/assets/gallery/gallery-3.png',
  },
  {
    id: 'gallery-4',
    title: 'High-Rise Glass Residential Facade',
    category: 'Residential',
    image: '/assets/gallery/gallery-4.png',
  },
  {
    id: 'gallery-5',
    title: 'The Aura Residences Complex',
    category: 'Residential',
    image: '/assets/gallery/gallery-5.png',
  },
  {
    id: 'gallery-6',
    title: 'Modern Luxury Villa Exterior',
    category: 'Architecture',
    image: '/assets/gallery/gallery-6.jpg',
  },
  {
    id: 'gallery-7',
    title: 'The Apex Atrium Offices',
    category: 'Commercial',
    image: '/assets/gallery/gallery-7.png',
  },
];

export default function GalleryPage() {
  const shouldReduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : fullGalleryItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < fullGalleryItems.length - 1 ? prev + 1 : 0));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const activeItem = lightboxIndex !== null ? fullGalleryItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: Gallery Hero Header with g2.png Background & Semi-Transparent Overlay
            ========================================================================= */}
        <section className="relative py-24 md:py-32 px-4 md:px-8 bg-[#034F90] text-[#fcf9f8] overflow-hidden text-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/assets/gallery/g2.png"
              alt="LAND POWER Project Gallery Portfolio"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Semi-Transparent Luxury Gradient Overlay for Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#034F90] via-[#034F90]/80 to-[#034F90]/65 z-0" />

          {/* Subtle Architectural Line Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

          <div className="max-w-[1280px] mx-auto relative z-10">
            <AnimatedSection direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdea5]/20 border border-[#ffdea5]/40 mb-6">
                <Sparkles className="w-4 h-4 text-[#ffdea5]" />
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-semibold">
                  OUR PORTFOLIO
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                Explore Our Project Gallery
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-[#e5e2e1]/90 max-w-3xl mx-auto leading-relaxed">
                A closer look at the spaces, architecture, interiors, construction quality, and developments that reflect the Land Power vision.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Clean Uniform 3-Column Portfolio Grid (15 Images)
            ========================================================================= */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1280px] mx-auto">
            {/* 3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fullGalleryItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: (idx % 3) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-[#e5e2e1] transition-all duration-500 aspect-[4/3] w-full"
                >
                  {/* Gallery Image with Object-Fit Cover */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle Dark/Blue Hover Gradient Overlay & VIEW Indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#034F90]/70 via-[#034F90]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6 text-white pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffdea5] uppercase tracking-wider bg-[#034F90]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow">
                      <span>VIEW</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ffdea5] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Fullscreen Interactive Lightbox Modal
            ========================================================================= */}
        <AnimatePresence>
          {activeItem !== null && lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#023b6d]/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8"
            >
              {/* Top Controls Bar */}
              <div className="w-full max-w-6xl flex items-center justify-between z-10 pt-2">
                <div className="text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full">
                  Image {lightboxIndex + 1} of {fullGalleryItems.length}
                </div>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image Container with Prev/Next Controls */}
              <div className="relative w-full max-w-6xl flex-grow flex items-center justify-center my-4">
                {/* Prev Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : fullGalleryItems.length - 1));
                  }}
                  className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none shadow-lg"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Lightbox Image */}
                <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev !== null && prev < fullGalleryItems.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none shadow-lg"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Details Footer */}
              <div className="w-full max-w-6xl text-center z-10 pb-2">
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] font-bold block mb-1">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  );
}
