import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-title">
        Austin Giffen · Electrical Engineering, Yale
      </NavLink>
      <nav className="site-nav">
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Background
        </NavLink>
        <a 
          href="/Full Resume_Portfolio for Personal Website.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link"
        >
          Résumé
        </a>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
