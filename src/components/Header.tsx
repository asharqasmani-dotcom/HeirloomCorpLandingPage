import React, { useState, useEffect } from 'react';
import { navigationItems } from '../data/navigation';
import { siteConfig } from '../data/siteConfig';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a href="#top" className="header-logo-link" aria-label={`${siteConfig.organization} home`}>
          <img
            src={siteConfig.logos.light}
            alt={siteConfig.name}
            className="header-logo-img"
            width={160}
            height={45}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navigationItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              return (
                <li
                  key={item.label}
                  className={`nav-item ${hasDropdown ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="nav-link"
                    onClick={(e) => {
                      if (hasDropdown && item.href === '#') {
                        e.preventDefault();
                        toggleDropdown(item.label);
                      }
                    }}
                    aria-expanded={hasDropdown ? activeDropdown === item.label : undefined}
                    aria-haspopup={hasDropdown ? 'true' : undefined}
                  >
                    {item.label}
                    {hasDropdown && <ChevronDown className="dropdown-chevron" size={14} />}
                  </a>

                  {hasDropdown && (
                    <ul
                      className={`dropdown-menu ${activeDropdown === item.label ? 'dropdown-open' : ''}`}
                      role="menu"
                    >
                      {item.dropdown!.map((sub) => (
                        <li key={sub.label} role="none">
                          <a
                            href={sub.href}
                            className="dropdown-link"
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right: Phone CTA */}
        <div className="header-cta">
          <a
            href={`tel:${siteConfig.displayPhone.replace(/\s+/g, '')}`}
            className="header-phone-box"
            aria-label={`Call us at ${siteConfig.displayPhone}`}
          >
            <div className="phone-icon-circle">
              <Phone size={15} />
            </div>
            <div className="phone-text-group">
              <span className="phone-label">CALL US NOW</span>
              <span className="phone-number">{siteConfig.displayPhone}</span>
            </div>
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
                {item.dropdown && (
                  <ul className="mobile-sub-list">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="mobile-sub-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href={`tel:${siteConfig.displayPhone.replace(/\s+/g, '')}`}
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={16} /> Call {siteConfig.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
