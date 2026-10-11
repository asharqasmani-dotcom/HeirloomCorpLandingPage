import React from 'react';
import { processSteps } from '../data/process';
import { siteConfig } from '../data/siteConfig';
import './Process.css';

export const Process: React.FC = () => {
  return (
    <section className="process-section section-dark" id="process" aria-label="Our Process">
      <div className="container">
        {/* Section Header */}
        <div className="process-header">
          <div className="header-text-block">
            <span className="eyebrow eyebrow-dark">How We Work</span>
            <h2 className="process-title">
              From Vision to Exceptional Ownership
            </h2>
            <p className="process-subtitle">
              Our process is designed to provide clarity, confidence, and discretion at every stage.
              We ensure a seamless experience from the first consultation to final acquisition.
            </p>
          </div>

          <div className="process-trust-badge">
            <div className="trust-avatars">
              {siteConfig.hero.avatars.map((av, idx) => (
                <img key={idx} src={av} alt="" className="trust-avatar" width={36} height={36} />
              ))}
            </div>
            <div className="trust-label">
              Trusted By {siteConfig.hero.trustedCount}
            </div>
          </div>
        </div>

        {/* 4 Process Step Cards */}
        <div className="process-steps-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="step-header">
                <span className="step-number">{step.number}</span>
                {step.icon && (
                  <div className="step-icon-wrapper">
                    <img src={step.icon} alt="" className="step-icon-img" width={32} height={32} />
                  </div>
                )}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
