import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Profile Avatar & Intro Section */}
      <section className="profile-section">
        <img 
          src="/images/profile.png" 
          alt="Austin Giffen" 
          className="profile-avatar"
          onError={(e) => {
            // Fallback if avatar fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="profile-bio">
          <div className="meta-subtitle">Electrical Engineering · Yale '27</div>
          <h1 className="hero-title">
            I design high speed analytical PCB models, space systems, and semiconductor research hardware.
          </h1>
        </div>
      </section>

      <p className="lead-text">
        Electrical Engineering student at Yale University (GPA: 3.91), 2024 U.S. Presidential Scholar, and National Merit Scholar. 
        I built hardware and software systems from concept to physical testing.
      </p>

      {/* Main Index Cards (cameron-dunn.com format) */}
      <div className="project-list" style={{ marginBottom: '3.5rem' }}>
        <Link to="/projects" className="project-card">
          <div className="project-card-header">
            <div className="project-title">Projects</div>
            <span className="project-arrow">→</span>
          </div>
          <p className="project-one-sentence">
            Selected engineering work and scientific research — one project per page.
          </p>
        </Link>

        <a 
          href="/Full Resume_Portfolio for Personal Website.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card"
        >
          <div className="project-card-header">
            <div className="project-title">Résumé</div>
            <span className="project-arrow">→</span>
          </div>
          <p className="project-one-sentence">
            Full one-page engineering résumé in PDF format.
          </p>
        </a>

        <Link to="/about" className="project-card">
          <div className="project-card-header">
            <div className="project-title">Background</div>
            <span className="project-arrow">→</span>
          </div>
          <p className="project-one-sentence">
            Education at Yale, technical course list, skill matrix, and leadership experience.
          </p>
        </Link>

        <Link to="/contact" className="project-card">
          <div className="project-card-header">
            <div className="project-title">Contact</div>
            <span className="project-arrow">→</span>
          </div>
          <p className="project-one-sentence">
            Email address, LinkedIn profile, and location details.
          </p>
        </Link>
      </div>

      {/* Featured Projects with 1-Sentence Overview */}
      <h2 className="section-heading">Featured Work</h2>
      <div className="project-list">
        {PROJECTS_DATA.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
            <div className="project-card-header">
              <div className="project-number-title">
                <span className="project-num">{project.number}</span>
                <span className="project-title">{project.title}</span>
              </div>
              <span className="project-arrow">→</span>
            </div>
            <p className="project-one-sentence">{project.oneSentence}</p>
            <div className="project-tags">
              <span className="tag-badge">{project.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
