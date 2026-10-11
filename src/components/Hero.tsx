import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { submitInquiry } from '../services/api';
import { ArrowUpRight, User, Mail, Phone as PhoneIcon, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');
    setFieldErrors({});

    const res = await submitInquiry(formData);
    if (res.success) {
      setStatus('success');
      setStatusMessage(res.message);
      setFormData({ fullName: '', email: '', phone: '' });
    } else {
      setStatus('error');
      setStatusMessage(res.message);
      if (res.fieldErrors) {
        setFieldErrors(res.fieldErrors);
      }
    }
  };

  return (
    <section className="hero-section" id="top" aria-label="Hero">
      {/* Background Hero Banner */}
      <div className="hero-backdrop" style={{ backgroundImage: `url(${siteConfig.hero.bgImage})` }}>
        {/* Subtle decorative watermark header */}
        <div className="hero-watermark" aria-hidden="true">
          {siteConfig.hero.watermark}
        </div>

        <div className="hero-content container">
          {/* Top text row: Social Proof & Subtitle */}
          <div className="hero-upper-row">
            <div className="hero-social-proof">
              <div className="hero-avatar-stack">
                {siteConfig.hero.avatars.map((av, idx) => (
                  <img
                    key={idx}
                    src={av}
                    alt=""
                    className="hero-avatar"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div className="hero-rating-box">
                <div className="hero-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <div className="hero-rating-label">
                  Trusted By {siteConfig.hero.trustedCount}
                </div>
              </div>
            </div>

            <h1 className="hero-title">
              {siteConfig.heroSubtitle}
            </h1>

            <div className="hero-cta-wrapper">
              <a href="#properties" className="btn-primary hero-btn">
                DISCOVER HOMES <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Floating Inquiry Card on Hero Bottom */}
          <div className="hero-inquiry-card" id="inquire">
            <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                {/* Full Name */}
                <div className="form-field">
                  <label htmlFor="hero-fullname" className="form-label">
                    <User size={15} className="label-icon" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="hero-fullname"
                    name="fullName"
                    className={`form-input ${fieldErrors.fullName ? 'input-error' : ''}`}
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {fieldErrors.fullName && (
                    <span className="field-error-text" role="alert">{fieldErrors.fullName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-field">
                  <label htmlFor="hero-email" className="form-label">
                    <Mail size={15} className="label-icon" /> Email Address
                  </label>
                  <input
                    type="email"
                    id="hero-email"
                    name="email"
                    className={`form-input ${fieldErrors.email ? 'input-error' : ''}`}
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {fieldErrors.email && (
                    <span className="field-error-text" role="alert">{fieldErrors.email}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="form-field">
                  <label htmlFor="hero-phone" className="form-label">
                    <PhoneIcon size={15} className="label-icon" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="hero-phone"
                    name="phone"
                    className={`form-input ${fieldErrors.phone ? 'input-error' : ''}`}
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {fieldErrors.phone && (
                    <span className="field-error-text" role="alert">{fieldErrors.phone}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="form-action">
                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="spinner" size={16} /> SUBMITTING...
                      </>
                    ) : (
                      'SUBMIT REQUEST'
                    )}
                  </button>
                </div>
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="form-alert success-alert" role="status">
                  <CheckCircle size={18} /> {statusMessage}
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert error-alert" role="alert">
                  <AlertCircle size={18} /> {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
