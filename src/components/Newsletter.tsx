import React, { useState } from 'react';
import { submitNewsletter } from '../services/api';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import './Newsletter.css';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    const res = await submitNewsletter({ email });
    if (res.success) {
      setStatus('success');
      setStatusMessage(res.message);
      setEmail('');
    } else {
      setStatus('error');
      setStatusMessage(res.message);
    }
  };

  return (
    <section className="newsletter-section" aria-label="Stay Informed Newsletter">
      {/* Background with overlay */}
      <div
        className="newsletter-backdrop"
        style={{
          backgroundImage: `url("/assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/Image-Gen-3.jpg")`,
        }}
      >
        <div className="newsletter-overlay" />

        {/* Watermark brand text */}
        <div className="newsletter-watermark" aria-hidden="true">
          ARVON
        </div>

        <div className="container newsletter-content-wrapper">
          <div className="newsletter-card">
            <span className="eyebrow eyebrow-dark">Stay Informed on Exclusive Properties</span>
            <h2 className="newsletter-title">
              Stay Informed on Exclusive Properties
            </h2>
            <p className="newsletter-desc">
              Receive curated updates on exclusive listings, market insights, and private opportunities.
              Delivered discreetly for clients who value informed decisions and refined living.
            </p>

            {/* Newsletter Subscription Form */}
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <div className="newsletter-input-group">
                <div className="input-with-icon">
                  <Mail size={16} className="newsletter-icon" />
                  <input
                    type="email"
                    name="email"
                    className="newsletter-input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for exclusive updates"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary newsletter-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="spinner" size={16} /> SUBSCRIBING...
                    </>
                  ) : (
                    'SUBSCRIBE NOW'
                  )}
                </button>
              </div>

              {/* Status messaging */}
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
