import React from 'react';
import { clientLogos } from '../data/clients';
import './ClientLogos.css';

export const ClientLogos: React.FC = () => {
  return (
    <section className="client-logos-section section-light" aria-label="Partner Brands">
      <div className="container">
        {/* Divider with text */}
        <div className="logos-divider-row">
          <div className="divider-line" />
          <span className="divider-text">
            Trusted by 900+ Premium Real Estate Clients
          </span>
          <div className="divider-line" />
        </div>

        {/* Ticker marquee of logos */}
        <div className="logos-marquee">
          <div className="logos-track">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
              <div key={`${c.id}-${i}`} className="logo-item">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="client-logo-img"
                  width={140}
                  height={50}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
