import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RefinedLiving } from './components/RefinedLiving';
import { PropertySlider } from './components/PropertySlider';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ClientLogos } from './components/ClientLogos';
import { Newsletter } from './components/Newsletter';
import { Insights } from './components/Insights';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      {/* 1. Header Navigation */}
      <Header />

      <main id="main-content">
        {/* 2. Hero Section with Inquiry Widget */}
        <Hero />

        {/* 3. Refined Living Standards with Animated Counters and Marquee */}
        <RefinedLiving />

        {/* 4. Curated Luxury Properties Slider */}
        <PropertySlider />

        {/* 5. Why Choose Us / Features Grid */}
        <Features />

        {/* 6. How We Work / Process Steps */}
        <Process />

        {/* 7. Client Trust Stories / Testimonials */}
        <Testimonials />

        {/* 8. Partner / Client Logos */}
        <ClientLogos />

        {/* 9. Exclusive Properties Newsletter Subscription */}
        <Newsletter />

        {/* 10. Luxury Real Estate Market Insights Articles */}
        <Insights />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default App;
