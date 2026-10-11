import React, { useRef } from 'react';
import { useReferenceMotion } from './hooks/useReferenceMotion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RefinedLiving } from './components/RefinedLiving';
import { PropertySlider } from './components/PropertySlider';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const motionRoot = useRef<HTMLDivElement>(null);
  useReferenceMotion(motionRoot);
  return (
    <div className="app-root" ref={motionRoot}>
      {/* Header Navigation */}
      <Header />

      <main id="main-content">
        {/* 01. Hero — #top */}
        <Hero />

        {/* 02 + 03. Nonprofit Introduction + Marquee — #about */}
        <RefinedLiving />

        {/* 04. Community Initiatives — #initiatives */}
        <PropertySlider />

        {/* 05. Our Values — #values */}
        <Features />

        {/* 06. Our Mission Framework — #mission */}
        <Process />

        {/* 07. Community Partnerships statement — #partnerships */}
        <Testimonials />

        {/* 08. Contact Us inquiry form — #contact */}
        <ContactForm />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default App;
