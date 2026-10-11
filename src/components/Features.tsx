import React from 'react';
import { featuresData } from '../data/features';
import './Features.css';

export const Features: React.FC = () => {
  return (
    <section className="features-section section-light" id="values" aria-label="Our Values">
      <div className="container">
        {/* Section Header: Left Eyebrow & Title, Right Subtitle */}
        <div className="features-header">
          <div className="features-header-left">
            <span className="eyebrow eyebrow-light">What Drives Our Mission</span>
            <h2 className="features-title">Where Community Meets Meaningful Opportunity.</h2>
          </div>
          <div className="features-header-right">
            <p className="features-subtitle">
              Our approach is shaped by a commitment to dignity, meaningful relationships,
              purposeful resources, and lasting stability.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Left 01-04 list items with dividers, Right media card */}
        <div className="features-split-grid">
          {/* Left Column: Vertical stack of 4 numbered values */}
          <div className="features-list-col">
            {featuresData.map((item, index) => (
              <React.Fragment key={item.number}>
                <div className="feature-list-item">
                  <div className="feature-number-circle">{item.number}</div>
                  <div className="feature-item-content">
                    <h3 className="feature-item-title">{item.title}</h3>
                    <p className="feature-item-desc">{item.description}</p>
                  </div>
                </div>
                {index < featuresData.length - 1 && (
                  <div className="feature-item-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right Column: Architectural media banner */}
          <div className="features-media-col">
            <div
              className="features-media-card"
              style={{
                backgroundImage: `url("/assets/community/values-community-room.jpg")`,
              }}
            >
              <div className="media-overlay" />
              <div className="media-caption">
                <span className="media-caption-title">Building a Legacy of Stability</span>
                <span className="media-caption-sub">Heirloom Legacy, Inc.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
