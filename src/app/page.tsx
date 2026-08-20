import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { ManagingDirector } from '@/components/sections/ManagingDirector';
import { BrandAmbassador } from '@/components/sections/BrandAmbassador';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us */}
        <About />

        {/* 3. What We Offer */}
        <Services />

        {/* 4. Meet Our Managing Director */}
        <ManagingDirector />

        {/* 5. Meet Our Brand Ambassador */}
        <BrandAmbassador />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Projects */}
        <Projects />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  );
}
