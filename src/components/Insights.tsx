import React from 'react';
import { insightsArticles } from '../data/insights';
import { ArrowUpRight, User, Folder } from 'lucide-react';
import './Insights.css';

export const Insights: React.FC = () => {
  return (
    <section className="insights-section section-light" id="insights" aria-label="Market Insights">
      <div className="container">
        {/* Section Header */}
        <div className="insights-header">
          <div className="header-left">
            <span className="eyebrow eyebrow-light">Luxury Market Insight</span>
            <h2 className="insights-title">
              Insights Shaping Luxury Real Estate
            </h2>
          </div>
          <div className="header-right">
            <p className="insights-header-desc">
              Explore curated insights, market trends, and expert perspectives shaping the luxury real estate landscape.
            </p>
            <a href="#inquire" className="btn-outline-on-light">
              EXPLORE ARTICLES
            </a>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="articles-grid">
          {insightsArticles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image-box">
                <a href={article.href} className="article-image-link" tabIndex={-1}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-img"
                    width={400}
                    height={260}
                    loading="lazy"
                  />
                </a>
                <div className="article-date-badge">
                  <span className="badge-day">{article.date.day}</span>
                  <span className="badge-month">{article.date.month}</span>
                </div>
              </div>

              <div className="article-body">
                <div className="article-meta">
                  <span className="meta-item">
                    <User size={13} className="meta-icon" /> {article.author}
                  </span>
                  <span className="meta-item">
                    <Folder size={13} className="meta-icon" /> {article.category}
                  </span>
                </div>

                <h3 className="article-title">
                  <a href={article.href} className="article-title-link">
                    {article.title}
                  </a>
                </h3>

                <div className="article-footer">
                  <a href={article.href} className="read-more-link">
                    READ ARTICLE <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
