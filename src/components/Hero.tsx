import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, Landmark, Handshake, Sprout } from 'lucide-react';
import './Hero.css';

const highlightIcons = [Landmark, Handshake, Sprout];

export const Hero: React.FC = () => {
  const { hero } = siteConfig;

  return (
    <section className="hero-section" id="top" aria-label="Hero">
      {/* Background Hero Banner */}
      <div className="hero-backdrop" style={{ backgroundImage: `url(${hero.bgImage})` }}>
        {/* Subtle decorative watermark header */}
        <div className="hero-watermark" aria-hidden="true">
          {hero.watermark}
        </div>

        <div className="hero-content container">
          {/* Upper row: Left eyebrow + headline + description | Right CTA */}
          <div className="hero-upper-row">
            <div className="hero-upper-left">
              <span className="eyebrow eyebrow-dark hero-eyebrow">{hero.eyebrow}</span>

              <h1 className="hero-title">{hero.heading}</h1>

              <p className="hero-description">{hero.description}</p>
            </div>

            <div className="hero-cta-wrapper">
              <a href={hero.cta.href} className="btn-primary hero-btn">
                {hero.cta.label.toUpperCase()} <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Highlight bar — same white pill design as before, text only */}
          <div className="hero-inquiry-card" id="highlights">
            <div className="inquiry-form" role="list" aria-label="Heirloom Legacy at a glance">
              <div className="form-grid">
                {hero.highlights.map((item, idx) => {
                  const Icon = highlightIcons[idx] ?? Landmark;
                  return (
                    <div className="form-field" role="listitem" key={item.label}>
                      <span className="form-label">
                        <Icon size={15} className="label-icon" aria-hidden="true" /> {item.label.toUpperCase()}
                      </span>
                      <span className="form-input hero-highlight-value">{item.value}</span>
                    </div>
                  );
                })}

                <div className="form-action">
                  <a href={hero.highlightCta.href} className="btn-primary form-submit-btn">
                    {hero.highlightCta.label.toUpperCase()}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
