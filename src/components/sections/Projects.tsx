'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { AnimatedSection } from '../common/AnimatedSection';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { MapPin, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects =
    activeCategory === 'ALL'
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeCategory);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'ALL', label: t.projects.all },
    { id: 'ONGOING', label: t.projects.ongoing },
    { id: 'UPCOMING', label: t.projects.upcoming },
    { id: 'COMPLETED', label: t.projects.completed },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-8 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <AnimatedSection direction="up" className="max-w-2xl mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-[#775a19]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#775a19] font-semibold">
                {t.projects.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#034F90] font-bold">
              {t.projects.heading}
            </h2>
            <p className="font-sans text-base text-[#43474e] mt-4">
              {t.projects.subtitle}
            </p>
          </AnimatedSection>

          {/* Category Filter Tabs */}
          <AnimatedSection delay={0.1} direction="up" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wider transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#034F90] text-[#fcf9f8] border-[#034F90] hover:bg-[#023b6d] shadow-md'
                    : 'bg-transparent text-[#43474e] hover:text-[#034F90] border-[#e5e2e1] hover:border-[#034F90]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </AnimatedSection>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1} direction="up">
              <motion.div
                data-cursor="view"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group group-project bg-white rounded-xl overflow-hidden border border-[#e5e2e1] hover:border-[#034F90]/40 hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image Container with Status Badge */}
                <div className="relative h-60 overflow-hidden w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow-md ${project.statusBadgeColor}`}
                  >
                    {project.category === 'ONGOING'
                      ? t.projects.ongoing
                      : project.category === 'UPCOMING'
                      ? t.projects.upcoming
                      : t.projects.completed}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#034F90] mb-1 group-hover:text-[#023b6d] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#43474e] mb-4 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#775a19]" />
                      <span>{t.projects.location}</span>
                    </p>
                  </div>

                  <div>
                    <hr className="border-[#e5e2e1] mb-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-[#775a19]">
                        {project.categoryLabel}
                      </span>
                      <a
                        href="#contact"
                        className="text-xs font-bold text-[#034F90] group-hover:text-[#023b6d] flex items-center gap-1 transition-colors group/link"
                      >
                        {t.projects.viewProject}{' '}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
