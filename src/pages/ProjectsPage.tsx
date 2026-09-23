import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <div className="meta-subtitle">Portfolio Index</div>
      <h1 className="page-title">Selected Work</h1>
      <p className="lead-text">
        Hardware I've designed, built, and tested — plus semiconductor research and AI software systems. One project per page.
      </p>

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
