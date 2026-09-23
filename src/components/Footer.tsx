import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div>
        <span>Austin Giffen — New Haven, CT</span>
      </div>
      <div className="footer-links">
        <a href="mailto:austin.giffen@yale.edu" className="footer-link">
          austin.giffen@yale.edu
        </a>
        <a 
          href="https://www.linkedin.com/in/austin-giffen-56a09431a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-link"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
