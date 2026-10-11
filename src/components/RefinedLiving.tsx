import React from 'react';
import { BrandValue } from '../types';
import './RefinedLiving.css';

// Brand values — NOT numerical performance claims. The former real-estate counters
// had no verified nonprofit basis and were removed.
const brandValues: BrandValue[] = [
  { number: '01', label: 'Community', caption: 'Matters' },
  { number: '02', label: 'Partnership', caption: 'Matters' },
  { number: '03', label: 'Resources', caption: 'Matter' },
];

const marqueeKeywords = [
  'Community',
  'Stability',
  'Dignity',
  'Partnership',
  'Resources',
  'Opportunity',
  'Independence',
  'Legacy',
];

const ValueHighlight: React.FC<BrandValue> = ({ number, label, caption }) => (
  <div className="stat-card">
    <div className="stat-number-row">
      <span className="stat-number">{number}</span>
    </div>
    <div className="stat-label">
      <span className="stat-label-strong">{label}</span> {caption}
    </div>
  </div>
);

export const RefinedLiving: React.FC = () => {
  return (
    <section className="refined-section section-light" id="about" aria-label="About Heirloom Legacy">
      <div className="container">
        {/* Section Header: Left Eyebrow, Right Heading */}
        <div className="refined-header">
          <div className="refined-header-eyebrow-col">
            <span className="eyebrow eyebrow-light">About Heirloom Legacy</span>
          </div>
          <div className="refined-header-title-col">
            <h2 className="refined-title">Building Stronger Communities with Purpose.</h2>
          </div>
        </div>

        {/* 3-Column Content Layout */}
        <div className="refined-grid">
          {/* Column 1 (Left): Tall Architectural Image */}
          <div className="refined-col-tall-image">
            <div className="image-frame-tall">
              <img
                src="/assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/Image-Gen-6-683x1024.jpg"
                alt="Modern residential architecture"
                className="refined-tall-photo"
                loading="lazy"
                width={683}
                height={1024}
              />
            </div>
          </div>

          {/* Column 2 (Center): Vertical Brand-Value Stack with Dividers */}
          <div className="refined-col-counters">
            {brandValues.map((value, idx) => (
              <React.Fragment key={value.number}>
                <div className="counter-item">
                  <ValueHighlight {...value} />
                </div>
                {idx < brandValues.length - 1 && <div className="counter-divider" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>

          {/* Column 3 (Right): Description + Button + Secondary Image Card */}
          <div className="refined-col-narrative">
            <div className="refined-narrative-top">
              <div className="refined-description">
                <p>
                  Heirloom Legacy, Inc. is dedicated to building a foundation for community
                  stability through meaningful partnerships and purposeful resources.
                </p>
                <p>
                  Our vision centers on creating environments that encourage dignity,
                  independence, and a stronger sense of belonging.
                </p>
              </div>

              <div className="refined-cta">
                <a href="#mission" className="btn-outline-on-light">
                  LEARN MORE
                </a>
              </div>
            </div>

            {/* Secondary Image Card — eyebrow + overlay caption */}
            <div
              className="refined-feature-card"
              style={{
                backgroundImage: `url("/assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/Image-Gen-1-1.jpg")`,
              }}
            >
              <div className="feature-card-overlay" />
              <div className="feature-card-caption">
                <span className="feature-card-eyebrow">Our Community Vision</span>
                <span className="feature-card-text">Creating Places of Stability and Belonging</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker strip */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <span key={i} className="marquee-item">
              {word.toUpperCase()} <span className="marquee-bullet">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
