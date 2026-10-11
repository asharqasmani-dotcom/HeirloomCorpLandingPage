import React, { useState, useEffect } from 'react';
import { navigationItems, headerCta } from '../data/navigation';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav item whose section is currently in view
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a href="#top" className="header-logo-link" aria-label={`${siteConfig.organization} home`}>
          <img
            src={siteConfig.logos.primary}
            alt={siteConfig.name}
            className="header-logo-img"
            width={237}
            height={50}
          />
        </a>

        {/* Desktop Navigation — direct section anchors, no dropdowns */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navigationItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeHref === item.href ? 'nav-link-active' : ''}`}
                  aria-current={activeHref === item.href ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Right: Partner CTA */}
        <div className="header-cta">
          <a href={headerCta.href} className="btn-primary header-cta-btn">
            {headerCta.label} <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => (
              <li key={item.label} className="mobile-nav-item">
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href={headerCta.href}
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {headerCta.label} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
