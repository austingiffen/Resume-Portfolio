import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="meta-subtitle">Background</div>
      <h1 className="page-title">Experience, Skills & Honors</h1>
      
      <p className="lead-text">
        B.S. Electrical Engineering, Yale University — Class of 2027 (GPA: 3.91).
      </p>

      {/* Profile Photo Card */}
      <div className="profile-section" style={{ padding: '1.25rem', border: '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: 'rgba(26,26,26,0.015)' }}>
        <img 
          src="/images/profile.png" 
          alt="Austin Giffen" 
          className="profile-avatar"
          style={{ width: '90px', height: '90px' }}
        />
        <div className="profile-bio">
          <h3 className="sub-heading" style={{ marginTop: 0 }}>Austin Giffen</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Electrical engineering student focused on analog hardware, space instrumentation, semiconductor physics, and intelligent software platforms.
          </p>
        </div>
      </div>

      {/* Honors & Awards */}
      <section className="about-section">
        <h2 className="section-heading">Honors & Awards</h2>
        <ul className="about-list">
          <li><strong>2024 U.S. Presidential Scholar</strong> — Awarded to top graduating high school seniors across the nation.</li>
          <li><strong>National Merit Scholar</strong> — Recognized for academic excellence and test achievement.</li>
          <li><strong>Yale College First-Year Summer Research Fellowship Recipient</strong> — $5,000 research grant awarded for solar semiconductor research.</li>
        </ul>
      </section>

      {/* Relevant Coursework */}
      <section className="about-section">
        <h2 className="section-heading">Relevant Coursework</h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
          Key courses completed and in progress at Yale:
        </p>
        <ul className="about-list">
          <li><strong>Electrical & Computer Engineering:</strong> Circuits and Systems Design, Digital Systems, Information Systems, Computer Engineering, Electronics, Communications and Control.</li>
          <li><strong>Applied Physics & Quantum:</strong> Electromagnetic Waves and Devices, Quantum Information Processing and Communication, Modern Physical Measurement, Intensive Physics (Classical Mechanics & Special Relativity), Intensive Physics (E&M & Quantum Mechanics).</li>
          <li><strong>Machine Learning & Mathematics:</strong> Probabilistic Machine Learning, Linear Algebra.</li>
          <li><strong>Hands-On Laboratory:</strong> Mechatronics Laboratory, Electronic Instrumentation.</li>
        </ul>
      </section>

      {/* Technical Skill Matrix */}
      <section className="about-section">
        <h2 className="section-heading">Technical Skills</h2>
        
        <h3 className="sub-heading">Design & Analysis</h3>
        <p style={{ fontSize: '0.935rem', color: 'var(--text-secondary)' }}>
          KiCad Schematic & PCB Layout, SPICE Circuit Simulation, High-Speed Via Modeling, Signal Integrity Analysis, Finite Element Analysis (FEA).
        </p>

        <h3 className="sub-heading">Manufacturing & Laboratory Testing</h3>
        <p style={{ fontSize: '0.935rem', color: 'var(--text-secondary)' }}>
          Soldering & Circuit Debugging, Agilent Source-Measure Units (SMUs), Triaxial Shielded Cabling, Mass Flow Controllers (MFCs), Oscilloscopes, Function Generators, Vacuum Systems.
        </p>

        <h3 className="sub-heading">Programming & Software</h3>
        <p style={{ fontSize: '0.935rem', color: 'var(--text-secondary)' }}>
          Python (Data Processing, PyTorch, scikit-learn), TypeScript / JavaScript, React, Node.js / Express, C / C++, Arduino Microcontrollers, LabVIEW Automation, Docker, Git.
        </p>
      </section>

      {/* Leadership & Additional Experience */}
      <section className="about-section">
        <h2 className="section-heading">Leadership & Teaching Experience</h2>
        
        <div style={{ marginBottom: '1.25rem' }}>
          <h3 className="sub-heading">Lead Sailing Instructor — Southern Idaho Sailing Association</h3>
          <div className="meta-subtitle" style={{ textTransform: 'none', marginBottom: '0.25rem' }}>May 2022 – August 2024</div>
          <p style={{ fontSize: '0.935rem', color: 'var(--text-secondary)' }}>
            Co-led summer sailing camps for youth and adult sailors ranging from beginners to advanced racers, managing boat maintenance, water safety, and group instruction.
          </p>
        </div>

        <div>
          <h3 className="sub-heading">Certified Soccer Referee</h3>
          <div className="meta-subtitle" style={{ textTransform: 'none', marginBottom: '0.25rem' }}>January 2022 – June 2024</div>
          <p style={{ fontSize: '0.935rem', color: 'var(--text-secondary)' }}>
            NFHS, SWISRA, and SISL certified referee. Officiated competitive DPL League, ECNL League matches, and state tournament games.
          </p>
        </div>
      </section>

      {/* Résumé Link */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <a 
          href="/Full Resume_Portfolio for Personal Website.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button"
        >
          Download Full One-Page Résumé (PDF) ↗
        </a>
      </div>
    </div>
  );
};
