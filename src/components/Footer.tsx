import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { footerPages, footerServices, footerLegal } from '../data/navigation';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" id="contact" aria-label="Site Footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Description & Contact Info */}
          <div className="footer-col-brand">
            <a href="#top" className="footer-logo-link" aria-label={`${siteConfig.organization} home`}>
              <img
                src={siteConfig.logos.light}
                alt={siteConfig.name}
                className="footer-logo-img"
                width={170}
                height={48}
                loading="lazy"
              />
            </a>

            <h3 className="footer-tagline">
              {siteConfig.tagline}
            </h3>

            <div className="footer-contact-block">
              <div className="contact-item">
                <span className="contact-label">EMAIL ADDRESS</span>
                <a href={`mailto:${siteConfig.email}`} className="contact-value">
                  {siteConfig.email}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">OUR OFFICES</span>
                <span className="contact-value">
                  {siteConfig.address}
                </span>
              </div>

              <div className="contact-item">
                <span className="contact-label">PHONE NUMBER</span>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="contact-value">
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social-row" aria-label="Social media channels">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-badge"
                  aria-label={s.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Pages */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links-list">
              {footerPages.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="footer-link">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              {footerServices.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="footer-link">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Large Decorative Watermark in Footer */}
        <div className="footer-watermark-row" aria-hidden="true">
          <div className="footer-giant-title">EXCLUSIVE LIVING</div>
        </div>

        {/* Bottom Copyright & Legal bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            {siteConfig.copyright}
          </div>

          <ul className="legal-links-list">
            {footerLegal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="legal-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
