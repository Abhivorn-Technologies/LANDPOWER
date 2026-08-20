import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
  lightTheme?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  subtitle,
  centered = true,
  lightTheme = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className={`w-8 h-[1px] ${lightTheme ? 'bg-[#ffdea5]' : 'bg-[#775a19]'}`} />
        <span
          className={`font-sans text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold ${
            lightTheme ? 'text-[#ffdea5]' : 'text-[#775a19]'
          }`}
        >
          {eyebrow}
        </span>
        {centered && (
          <div className={`w-8 h-[1px] ${lightTheme ? 'bg-[#ffdea5]' : 'bg-[#775a19]'}`} />
        )}
      </div>

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight ${
          lightTheme ? 'text-[#fcf9f8]' : 'text-[#034F90]'
        }`}
      >
        {heading}
      </h2>

      {subtitle && (
        <p
          className={`font-sans text-base sm:text-lg leading-relaxed ${
            lightTheme ? 'text-[#e5e2e1]/80' : 'text-[#43474e]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
