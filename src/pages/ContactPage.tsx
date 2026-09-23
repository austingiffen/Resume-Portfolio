import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="meta-subtitle">Get in Touch</div>
      <h1 className="page-title">Contact Information</h1>
      <p className="lead-text">
        Feel free to reach out via email or LinkedIn for engineering inquiries, research collaborations, or software projects.
      </p>

      <div className="project-list" style={{ marginTop: '2rem' }}>
        <a href="mailto:austin.giffen@yale.edu" className="project-card">
          <div className="project-card-header">
            <div className="project-title">Email</div>
            <span className="project-arrow">→</span>
          </div>
          <p className="project-one-sentence" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
            austin.giffen@yale.edu
          </p>
          <div className="project-tags">
            <span className="tag-badge">Primary Contact</span>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/austin-giffen-56a09431a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card"
        >
          <div className="project-card-header">
            <div className="project-title">LinkedIn</div>
            <span className="project-arrow">→</span>
          </div>
          <p className="project-one-sentence">
            linkedin.com/in/austin-giffen-56a09431a
          </p>
          <div className="project-tags">
            <span className="tag-badge">Professional Profile</span>
          </div>
        </a>

        <div className="project-card" style={{ cursor: 'default' }}>
          <div className="project-card-header">
            <div className="project-title">Locations</div>
          </div>
          <p className="project-one-sentence">
            New Haven, CT (Yale University) · Boise, ID
          </p>
        </div>
      </div>
    </div>
  );
};
