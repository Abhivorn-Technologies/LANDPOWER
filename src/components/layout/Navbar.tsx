'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSelector } from '../language/LanguageSelector';
import { Phone, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [clickedNavIndex, setClickedNavIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/about') {
        setActiveSection('about');
        return;
      }

      const sections = ['home', 'about', 'services', 'projects', 'why-us', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Exact 7 Navigation links pointing to main page sections
  const navLinks = [
    { href: '/', label: t.nav.home, id: 'home' },
    { href: '/#about', label: t.nav.about, id: 'about' },
    { href: '/#services', label: t.nav.services, id: 'services' },
    { href: '/#projects', label: t.nav.projects, id: 'projects' },
    { href: '/#why-us', label: t.nav.whyUs, id: 'why-us' },
    { href: '/#testimonials', label: t.nav.testimonials, id: 'testimonials' },
    { href: '/#contact', label: t.nav.contact, id: 'contact' },
  ];

  // Trigger smooth wave animation across all nav links when any link is clicked
  const handleNavClick = (index: number) => {
    setClickedNavIndex(index);
    setTimeout(() => {
      setClickedNavIndex(null);
    }, 650);
  };

  // Home link handler: if already on homepage, scroll to top smoothly instead of
  // relying on /#home hash which can fail before hydration completes
  const handleHomeClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // For other pages, let Next.js navigate to '/' normally
      handleNavClick(0);
      setMobileMenuOpen(false);
    },
    [pathname] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#e5e2e1] py-2'
          : 'bg-[#ffffff] border-b border-[#e5e2e1] py-3'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-20 sm:h-24">
        {/* =========================================================================
            LEFT: Larger Prominent Brand Logo
            ========================================================================= */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 py-1">
          <div className="relative h-14 sm:h-16 md:h-18 w-48 sm:w-56 md:w-64 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/assets/branding/logo.png"
              alt="LAND POWER Logo"
              fill
              unoptimized
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* =========================================================================
            CENTER: 7 Navigation Links with Interactive Wave Animation & Underline
            ========================================================================= */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link, index) => {
            const isActive =
              (pathname === '/about' && link.id === 'about') ||
              (pathname === '/' && activeSection === link.id);

            // Compute wave animation stagger delay based on distance from clicked link
            const waveDistance = clickedNavIndex !== null ? Math.abs(index - clickedNavIndex) : 0;
            const waveDelay = waveDistance * 0.045;

            return (
              <motion.div
                key={link.id}
                animate={
                  clickedNavIndex !== null
                    ? { y: [0, -5, 0] }
                    : { y: 0 }
                }
                transition={{
                  duration: 0.38,
                  delay: waveDelay,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={link.id === 'home' ? handleHomeClick : () => handleNavClick(index)}
                  className={`relative font-sans text-sm font-semibold tracking-wider transition-colors duration-200 py-2 inline-block ${
                    isActive ? 'text-[#034F90]' : 'text-[#034F90]/80 hover:text-[#034F90]'
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Active Animated Underline Indicator */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#034F90] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-[#034F90]/50 opacity-0 transition-all duration-300 pointer-events-none hover:left-0 hover:right-0 hover:opacity-100 rounded-full" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* =========================================================================
            RIGHT: Language Selector & Phone Number (WhatsApp Removed)
            ========================================================================= */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Language Selector (English ▼) */}
          <div className="transition-transform hover:scale-[1.02]">
            <LanguageSelector />
          </div>

          {/* Contact Phone Button */}
          <motion.a
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+919010214100"
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#034F90] border border-[#034F90]/30 px-4 py-2.5 rounded-full hover:bg-[#034F90] hover:text-white shadow-sm hover:shadow transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5 text-[#034F90] group-hover:text-white" />
            <span>+91 90102 14100</span>
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#034F90] p-1.5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          MOBILE DRAWER MENU
          ========================================================================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e5e2e1] px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={link.id === 'home' ? handleHomeClick : () => {
                  handleNavClick(index);
                  setMobileMenuOpen(false);
                }}
                className="font-sans text-base font-semibold text-[#034F90] hover:text-[#023b6d] py-1 border-b border-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="tel:+919010214100"
              className="flex items-center justify-center gap-2 w-full text-sm font-bold text-white bg-[#034F90] hover:bg-[#023b6d] px-4 py-3 rounded-full shadow transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>+91 90102 14100</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
