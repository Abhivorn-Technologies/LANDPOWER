'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '@/types';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, options } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = options.find((opt) => opt.code === language) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1c1b1b] hover:text-[#775a19] hover:bg-[#f0eded] transition-colors focus:outline-none"
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4 text-[#775a19]" />
        <span className="hidden sm:inline">{currentOption.name}</span>
        <span className="sm:hidden">{currentOption.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-xl border border-[#e5e2e1] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-[#74777f]">
            Select Language
          </div>
          {options.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLanguage(opt.code as Language);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left transition-colors hover:bg-[#f6f3f2] ${
                language === opt.code ? 'text-[#775a19] font-semibold bg-[#f0eded]/50' : 'text-[#1c1b1b]'
              }`}
            >
              <div className="flex flex-col">
                <span>{opt.name}</span>
                <span className="text-[10px] text-[#74777f]">{opt.nativeName}</span>
              </div>
              {language === opt.code && <Check className="w-3.5 h-3.5 text-[#775a19]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
