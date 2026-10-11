import React, { useEffect, useState, useRef } from 'react';
import './RefinedLiving.css';

interface StatProps {
  endValue: number;
  suffix: string;
  label: string;
}

const AnimatedStat: React.FC<StatProps> = ({ endValue, suffix, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * endValue));

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div className="stat-card" ref={elementRef}>
      <div className="stat-number-row">
        <span className="stat-number">{count}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export const RefinedLiving: React.FC = () => {
  const marqueeKeywords = ['Luxury', 'Curated', 'Refined', 'Premium', 'Exclusive'];

  return (
    <section className="refined-section section-light" id="about" aria-label="About Us">
      <div className="container">
        {/* Section Header */}
        <div className="refined-header">
          <span className="eyebrow eyebrow-light">Designed for Refined Living Standards</span>
          <h2 className="refined-title">
            Curating Exceptional Homes with Purpose
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="refined-grid">
          {/* Left Column: Architectural Imagery */}
          <div className="refined-image-col">
            <div className="image-frame">
              <img
                src="/assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/Image-Gen-6-683x1024.jpg"
                alt="Architectural modern residence"
                className="refined-photo"
                loading="lazy"
                width={500}
                height={750}
              />
            </div>
          </div>

          {/* Right Column: Key Stats & Narrative */}
          <div className="refined-info-col">
            {/* Animated Counters */}
            <div className="stats-row">
              <AnimatedStat endValue={18} suffix="+" label="Prime Locations" />
              <div className="stat-divider" aria-hidden="true" />
              <AnimatedStat endValue={95} suffix="+" label="Client Trust" />
              <div className="stat-divider" aria-hidden="true" />
              <AnimatedStat endValue={120} suffix="+" label="Luxury Homes" />
            </div>

            {/* Description Text */}
            <div className="refined-description">
              <p>
                We curate premium residences and high value properties for discerning clients
                who value quality, privacy, and long term investment.
              </p>
              <p>
                Every listing is carefully selected to reflect architectural excellence,
                prime locations, and lasting value.
              </p>
            </div>

            {/* CTA button */}
            <div className="refined-cta">
              <a href="#properties" className="btn-outline-on-light">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker strip */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <span key={i} className="marquee-item">
              {word} <span className="marquee-bullet">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
