import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { History } from '@/components/sections/History';
import { Services } from '@/components/sections/Services';
import { ManagingDirector } from '@/components/sections/ManagingDirector';
import { BrandAmbassador } from '@/components/sections/BrandAmbassador';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { CSR } from '@/components/sections/CSR';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] relative">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Us */}
        <About />

        {/* 3. History */}
        <History />

        {/* 4. What We Offer */}
        <Services />

        {/* 5. Meet Our Manager */}
        <ManagingDirector />

        {/* 6. Meet Our Brand Ambassador */}
        <BrandAmbassador />

        {/* 7. Why Choose Us / What You Can Count On */}
        <WhyChooseUs />

        {/* 8. Projects — Ongoing / Upcoming / Completed */}
        <Projects />

        {/* 9. What Our Customers Say */}
        <Testimonials />

        {/* 10. Gallery */}
        <Gallery />

        {/* 11. CSR — Our Commitment to Society */}
        <CSR />

        {/* 12. Contact Us */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating Actions (WhatsApp & Scroll to Top) */}
      <FloatingActions />
    </div>
  );
}
