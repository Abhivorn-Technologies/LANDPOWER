'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { MapPin, ArrowRight, FileText, CheckCircle2, PhoneCall } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects =
    activeCategory === 'ALL'
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeCategory);

  const categories: { id: ProjectCategory; label: string; desc: string }[] = [
    { id: 'ALL', label: t.projects.all, desc: t.projects.subtitle },
    { id: 'ONGOING', label: t.projects.ongoing, desc: t.projects.ongoingDesc },
    { id: 'UPCOMING', label: t.projects.upcoming, desc: t.projects.upcomingDesc },
    { id: 'COMPLETED', label: t.projects.completed, desc: t.projects.completedDesc },
  ];

  const currentCategoryObj = categories.find((c) => c.id === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <AnimatedSection direction="up" className="max-w-2xl mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-[#775a19]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-bold">
                {t.projects.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
              {t.projects.heading}
            </h2>
            <p className="font-sans text-base text-[#43474e] mt-3">
              {t.projects.subtitle}
            </p>
          </AnimatedSection>

          {/* Category Filter Tabs */}
          <AnimatedSection delay={0.1} direction="up" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#034F90] text-[#fcf9f8] border-[#034F90] shadow-md'
                    : 'bg-white text-[#43474e] hover:text-[#034F90] border-[#e5e2e1] hover:border-[#034F90]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </AnimatedSection>
        </div>

        {/* Active Category Contextual Description Banner */}
        {activeCategory !== 'ALL' && (
          <AnimatedSection direction="up" className="mb-8">
            <div className="bg-[#034F90]/5 border border-[#034F90]/15 rounded-xl p-4 sm:p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#034F90] shrink-0 mt-0.5" />
              <p className="font-sans text-xs sm:text-sm text-[#034F90] font-medium leading-relaxed">
                {currentCategoryObj?.desc}
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* 3 Projects Cards Grid (Equal height & alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="h-full"
              >
                <div className="group group-project bg-white rounded-2xl overflow-hidden border border-[#e5e2e1] hover:border-[#034F90]/40 hover:shadow-2xl transition-all duration-300 flex flex-col h-full justify-between shadow-sm">
                  <div>
                    {/* Image Container with Status Badge */}
                    <div className="relative h-64 overflow-hidden w-full bg-[#023b6d]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute top-4 right-4 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md ${project.statusBadgeColor}`}
                      >
                        {project.category === 'ONGOING'
                          ? t.projects.ongoing
                          : project.category === 'UPCOMING'
                          ? t.projects.upcoming
                          : t.projects.completed}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-7">
                      <p className="text-xs text-[#775a19] font-sans font-bold uppercase tracking-wider mb-2">
                        {project.categoryLabel}
                      </p>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#034F90] mb-3 group-hover:text-[#023b6d] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#775a19] mb-4 flex items-center gap-1.5 font-medium">
                        <MapPin className="w-4 h-4 text-[#775a19] shrink-0" />
                        <span>{project.location}</span>
                      </p>

                      <p className="font-sans text-sm text-[#43474e] leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-7 pb-7 pt-2 border-t border-[#e5e2e1]/70">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#034F90] group-hover:text-[#023b6d] uppercase tracking-wider pt-2 group/link"
                    >
                      <span>{t.projects.viewProject}</span>
                      <div className="w-8 h-8 rounded-full bg-[#034F90]/10 flex items-center justify-center group-hover/link:bg-[#034F90] group-hover/link:text-white transition-colors">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Brochure, Drawing & Government Approvals Information Box */}
        <AnimatedSection direction="up">
          <div className="bg-white border border-[#e5e2e1] rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#034F90]/10 flex items-center justify-center text-[#034F90] shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#034F90] mb-1">
                  Project Drawings, Approvals & Brochures
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#43474e] leading-relaxed max-w-2xl">
                  {t.projects.brochureNote}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#034F90] hover:bg-[#023b6d] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-all duration-200 shrink-0 group"
            >
              <PhoneCall className="w-4 h-4 text-[#ffdea5]" />
              <span>REQUEST PROJECT DETAILS</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
