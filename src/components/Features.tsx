import React from 'react';
import { featuresData } from '../data/features';
import './Features.css';

export const Features: React.FC = () => {
  return (
    <section className="features-section section-light" id="services" aria-label="Why Choose Us">
      <div className="container">
        {/* Section Header */}
        <div className="features-header">
          <span className="eyebrow eyebrow-light">Why Choose Arvon</span>
          <h2 className="features-title">
            Where Expertise Meets Exceptional Properties
          </h2>
          <p className="features-subtitle">
            We deliver more than properties — we offer strategic guidance, market expertise,
            and a refined approach to luxury real estate.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="features-grid">
          {featuresData.map((item) => (
            <div key={item.number} className="feature-card">
              <div className="feature-number-badge">
                {item.number}
              </div>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
