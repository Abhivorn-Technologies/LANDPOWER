'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';
import { galleryData } from '@/data/gallery';
import { ZoomIn, ArrowRight, X } from 'lucide-react';
import { GalleryItem } from '@/types';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 px-4 md:px-8 bg-[#f6f3f2] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <AnimatedSection direction="up" className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-[#775a19]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                {t.gallery.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
              {t.gallery.heading}
            </h2>
            <p className="font-sans text-base text-[#43474e] mt-4">
              {t.gallery.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="up" className="hidden md:block">
            <Link
              href="/gallery"
              className="inline-flex items-center text-xs font-bold text-[#775a19] hover:text-[#034F90] tracking-widest uppercase group transition-colors"
            >
              <span>{t.gallery.exploreFull}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Editorial Grid Preview */}
        <AnimatedSection direction="up" className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 min-h-[500px] h-[550px] md:h-[600px]">
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              data-cursor="view"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setActiveModalImage(item)}
              className={`${item.gridSpan} group-gallery rounded-xl overflow-hidden relative group cursor-pointer border border-[#e5e2e1] shadow-sm hover:shadow-2xl transition-all duration-300`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-[#034F90]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <ZoomIn className="w-10 h-10 mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300 text-[#ffdea5]" />
                <span className="font-serif text-base font-semibold text-center">{item.title}</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] mt-1">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Lightbox Modal for Homepage Preview */}
        {activeModalImage && (
          <div className="fixed inset-0 z-50 bg-[#023b6d]/95 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-6 right-6 text-white p-2 hover:text-[#ffdea5] focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-4xl w-full max-h-[85vh] h-[70vh] rounded-xl overflow-hidden">
              <Image
                src={activeModalImage.image}
                alt={activeModalImage.title}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#023b6d] to-transparent p-6 text-white text-center">
                <h4 className="font-serif text-xl font-bold">{activeModalImage.title}</h4>
                <p className="font-sans text-xs uppercase tracking-widest text-[#ffdea5] mt-1">{activeModalImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
