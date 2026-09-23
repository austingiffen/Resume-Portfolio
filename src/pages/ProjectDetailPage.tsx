import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { getAssetUrl } from '../utils/assetUrl';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1 className="page-title">Project Not Found</h1>
        <p className="lead-text">The requested project could not be found.</p>
        <Link to="/projects" className="back-link">
          ← Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Top Back Link */}
      <Link to="/projects" className="back-link">
        ← All projects
      </Link>

      {/* Header Meta */}
      <div className="detail-header">
        <div className="detail-tags-meta">
          <span>{project.category}</span>
        </div>
        <h1 className="page-title">{project.title}</h1>
      </div>

      {/* Overview Paragraph */}
      <p className="lead-text" style={{ fontSize: '1.05rem', color: '#2b2b2b' }}>
        {project.overview}
      </p>

      {/* Key Highlights Bullet List */}
      <h2 className="section-heading">Key Highlights & Accomplishments</h2>
      <ul className="detail-bullet-list">
        {project.keyHighlights.map((highlight, index) => (
          <li key={index} className="detail-bullet-item">
            {highlight}
          </li>
        ))}
      </ul>

      {/* Custom CuSCN Research Layout */}
      {project.id === 'cuscn-research' ? (
        <>
          {/* Section 1: Hardware & Control Setup */}
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-heading">Hardware & Control Setup</h2>
            <p className="lead-text" style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Custom gas-flow test architecture and precision measurement system designed and assembled for Konezny Lab experiments:
            </p>

            {/* 3 Images Side by Side: img6, img7, img8 */}
            <div className="hardware-grid">
              <div className="hardware-card">
                <div className="hardware-img-wrapper">
                  <img src={getAssetUrl('/images/cuscn/poster_img_6_21.jpeg')} alt="3 Mass Flow Controllers (MFCs)" />
                </div>
                <div className="hardware-caption">
                  <strong>3 Mass Flow Controllers (MFCs)</strong>
                  Regulates precise volumetric flow rates of Air, Nitrogen (N₂), and H₂/N₂ mixture gases. Gas lines are routed through an air-actuated valve manifold controlled by a pneumatic Nitrogen pressure actuator.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper">
                  <img src={getAssetUrl('/images/cuscn/poster_img_7_22.jpeg')} alt="Arduino + DAC Control Circuitry" />
                </div>
                <div className="hardware-caption">
                  <strong>Arduino & DAC/ADC Circuitry</strong>
                  Embedded control loop where the Arduino commands MFC target flow rates and reads feedback. High-precision DACs convert digital outputs to analog control signals, while ADCs convert feedback signals with chip-select lines toggling on a shared data bus to avoid bus contention with linear offset calibration.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper">
                  <img src={getAssetUrl('/images/cuscn/poster_img_8_23.jpeg')} alt="SMUs & Gas Chamber Test Setup" />
                </div>
                <div className="hardware-caption">
                  <strong>SMUs & Gas Test Chamber</strong>
                  Agilent source-measure instrumentation with 4 SMU channels connected to the sealed gas chamber via shielded triaxial (triax) guarded cables to suppress current leakage and noise during sub-picoamp conductivity tests, integrated with light, temperature, and humidity sensors.
                </div>
              </div>
            </div>

            {/* Small LabVIEW Setup Card: img10 */}
            <div className="labview-card-wrapper">
              <div className="labview-card">
                <div className="labview-img-wrapper">
                  <img src={getAssetUrl('/images/cuscn/poster_img_10_25.jpeg')} alt="LabVIEW Control Suite & Data Analysis" />
                </div>
                <div className="figure-caption">
                  <strong>LabVIEW Setup & Python Data Analysis Pipeline: </strong>
                  Automated LabVIEW control panel operating a continuous VISA serial loop to issue write commands to DACs/valves while simultaneously logging ADC and Agilent current values. Paired with a vectorized Python pipeline that parses time-series logs into Pandas DataFrames, applies automated gas exposure interval shading, and plots conductivity against gas PPM, flow rate, LED illumination, and humidity.
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Experimental Results & Key Discoveries */}
          <div className="results-section">
            <span className="results-badge">Scientific Breakthroughs</span>
            <h2 className="section-heading" style={{ marginTop: '0.25rem' }}>Experimental Results</h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Longitudinal atmospheric exposure trends and real-time semiconductor conduction dynamics:
            </p>

            {/* Featured Breakthrough: img11 */}
            <div className="results-card-large">
              <div className="results-img-large">
                <img src={getAssetUrl('/images/cuscn/poster_img_11_26.jpeg')} alt="Ambient Aging Conductivity Trends" />
              </div>
              <div className="results-content">
                <h3>Multi-Order-of-Magnitude Conductivity Surge via Ambient Aging</h3>
                <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Experimental evaluation comparing fresh CuSCN samples (stored in vacuum/glove box) against aged samples left in ambient atmospheric conditions over 175+ days (up to 643 days) demonstrated a <strong>dramatic multi-order-of-magnitude increase in electrical conductivity</strong>.
                </p>
                <ul className="results-highlights-list">
                  <li>
                    <strong>Preserved Crystal Lattice (GIXRD)</strong>: Grazing Incidence X-ray Diffraction analysis confirmed zero structural phase changes or lattice degradation in aged CuSCN thin films.
                  </li>
                  <li>
                    <strong>Evaporation Hypothesis Disproved</strong>: Re-exposing aged samples to high vacuum yielded lower conductivity, proving that solvent evaporation was not responsible for the conductivity surge.
                  </li>
                  <li>
                    <strong>Molecular Mechanism Uncovered (XPS)</strong>: X-ray Photoelectron Spectroscopy identified a distinct chemical signature—an increase in C=N double bonds coupled with a decrease in C≡N triple bonds—proving that ambient chemical surface interactions activate intrinsic hole transport for high-efficiency solar cells.
                  </li>
                </ul>
              </div>
            </div>

            {/* Real-time Dynamic Response Grid: img12 & img13 */}
            <div className="results-grid-2col">
              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '240px' }}>
                  <img src={getAssetUrl('/images/cuscn/poster_img_12_28.jpeg')} alt="Real-Time Current Response (Trial 1)" />
                </div>
                <div className="hardware-caption">
                  <strong>Real-Time Gas & Photovoltaic Dynamics (Trial 1)</strong>
                  <p style={{ marginTop: '0.35rem' }}>
                    • <strong>Instant Photovoltaic Spike</strong>: Turning on LED lighting triggers an immediate photovoltaic jump in output current. Over 16-hour periods, higher LED light intensity directly scales with elevated hole conduction.
                  </p>
                  <p style={{ marginTop: '0.35rem' }}>
                    • <strong>Relative Humidity Sensitivity</strong>: Short-term exposure trials revealed that high Relative Humidity (Air ~12% RH vs. N₂ ~0% RH) causes an immediate drop in measured current, isolating humidity as a primary governing environmental factor.
                  </p>
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '240px' }}>
                  <img src={getAssetUrl('/images/cuscn/poster_img_13_31.jpeg')} alt="Fresh vs Aged Conduction Dynamics (Trial 2)" />
                </div>
                <div className="hardware-caption">
                  <strong>Fresh vs. Aged Conduction Kinetics (Trial 2)</strong>
                  <p style={{ marginTop: '0.35rem' }}>
                    • <strong>Quantified Conduction Profiles</strong>: Isolated distinct quantitative differences in startup currents, peak heights, and baseline recovery between fresh and long-term aged CuSCN samples under controlled H₂/N₂ gas flow cycles.
                  </p>
                  <p style={{ marginTop: '0.35rem' }}>
                    • <strong>Semiconductor Optimization</strong>: Real-time time-series plots established the quantitative parameters needed to optimize and stabilize CuSCN as a high-efficiency hole transport layer in commercial solar cells.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : project.id === 'mind-vault' ? (
        <>
          {/* Section 1: Screen Recording Video Demo */}
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-heading">Platform Demonstration & Video Overview</h2>
            <p className="lead-text" style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Screen recording demonstrating MindVault's Manifest V3 Chrome Extension and active-recall web application:
            </p>

            <div className="mindvault-video-section">
              <div className="iphone-mockup-frame">
                <div className="iphone-notch"></div>
                <video 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="mindvault-video-player"
                >
                  <source src={getAssetUrl('/images/MindVault/MindVault-ScreenRecording-h264.mp4')} type="video/mp4" />
                  <source src={getAssetUrl('/images/MindVault/MindVault-ScreenRecording.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mindvault-video-caption">
                <strong>MindVault Live iPhone Demo: </strong>
                Demonstrating context-aware capture triggers on ChatGPT and YouTube, seamless flashcard creation, and the interactive active-recall study engine.
              </div>
            </div>
          </div>

          {/* Section 2: Ebbinghaus Forgetting Curve vs. MindVault */}
          <div className="results-section" style={{ marginTop: '3.5rem' }}>
            <span className="results-badge">Cognitive Science & Memory Science</span>
            <h2 className="section-heading" style={{ marginTop: '0.25rem' }}>Overcoming the Ebbinghaus Forgetting Curve</h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              How MindVault transforms passive reading into exponential long-term retention:
            </p>

            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>Passive Reading & Ebbinghaus Decay</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Hermann Ebbinghaus's memory research demonstrates that human retention follows an exponential decay curve. Without structured active recall, learners lose <strong>50% of new information within 1 hour</strong> and up to <strong>70% within 24 to 48 hours</strong>.
                </p>
                <ul className="results-highlights-list" style={{ marginTop: '0.75rem' }}>
                  <li>Passive reading creates a false sense of mastery ("Illusion of Competence").</li>
                  <li>Knowledge remains trapped in short-term working memory without retrieval practice.</li>
                </ul>
              </div>

              <div className="comparison-card highlight-card">
                <h3>Learning with MindVault (Flat Retention Curve)</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  MindVault intercepts forgetting by automatically converting captured AI chats (ChatGPT, Claude, Gemini) and educational YouTube moments into active-recall flashcard quizzes.
                </p>
                <ul className="results-highlights-list" style={{ marginTop: '0.75rem' }}>
                  <li><strong>Spaced Repetition Reset</strong>: Prompts quizzes right before memory decay occurs, resetting retention to 100%.</li>
                  <li><strong>Durable Knowledge</strong>: Converts volatile facts into a flat, permanent long-term memory plateau.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Whole Memory Tracking Philosophy */}
          <div className="philosophy-card">
            <span className="results-badge">Core Platform Philosophy</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: '0.5rem 0 0.75rem 0' }}>
              Whole Memory Tracking Philosophy
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Standard study tools create hidden <em>"memory holes"</em>—blind spots in a student's knowledge base caused by uneven review habits and unmeasured recall strength.
            </p>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                How MindVault Tracks the Whole Memory Surface:
              </h4>
              <ul className="results-highlights-list">
                <li>
                  <strong>Comprehensive Memory Mapping</strong>: MindVault treats a student's entire course or topic surface as a unified graph of active-recall nodes rather than isolated cards.
                </li>
                <li>
                  <strong>Precision Hole Detection</strong>: By tracking response speed, recall accuracy, and streak counts across both web and browser extension touchpoints, MindVault pinpoints specific "memory holes" (weak recall nodes) before exams.
                </li>
                <li>
                  <strong>Targeted Quiz Queueing</strong>: Automatically prioritizes identified memory gaps until 100% complete memory coverage is achieved across all subject topics.
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : project.id === 'yale-cubesat' ? (
        <>
          {/* Section 1: Electrical Architecture Overview */}
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-heading">Electrical Architecture & Signal Chain</h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Step-by-step walkthrough of the detector hardware—tracing how a fast optical pulse from a particle collision is converted, amplified, discriminated, and packaged into energy spectrum graphs:
            </p>

            {/* Signal Flow Step 1 & 2 */}
            <div className="results-grid-2col">
              <div className="hardware-card">
                <div className="hardware-caption" style={{ padding: '1.25rem' }}>
                  <span className="results-badge" style={{ marginBottom: '0.5rem' }}>Stage 1 · Optical Sensing</span>
                  <strong>Particle Scintillation & SiPM Light Transduction</strong>
                  <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>Scintillation Burst</strong>: High-energy cosmic ray particles impact the plastic scintillator crystal, producing a rapid flash of optical scintillation photons.
                  </p>
                  <p style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>Photodiode Conversion</strong>: A Silicon Photomultiplier (SiPM) absorbs light photons and converts them into a microsecond-scale analog current/voltage pulse proportional to particle energy deposit.
                  </p>
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-caption" style={{ padding: '1.25rem' }}>
                  <span className="results-badge" style={{ marginBottom: '0.5rem' }}>Stage 2 · Power Supply Rails</span>
                  <strong>30V SiPM Boost & 555 Negative Voltage Rail</strong>
                  <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>30V Step-Up Boost</strong>: High-voltage boost converter provides precise reverse bias for SiPM Geiger-mode avalanche breakdown operation.
                  </p>
                </div>
              </div>
            </div>

            {/* Schematic Figure 1: 555 Negative Rail */}
            <div className="labview-card-wrapper" style={{ maxWidth: '600px', margin: '2rem auto' }}>
              <div className="labview-card">
                <div className="labview-img-wrapper" style={{ maxHeight: '320px' }}>
                  <img src={getAssetUrl('/images/cubesat/schematic_555_negative_rail.png')} alt="555 Timer Negative Voltage Rail Schematic" />
                </div>
                <div className="figure-caption">
                  <strong>Schematic 1: 555-Timer Negative Rail Charge-Pump Circuit — </strong>
                  Custom inverting power circuit engineered to generate a stable -5V rail from +5V supply using an NE555 timer chip and charge-pump diodes.
                </div>
              </div>
            </div>

            {/* Signal Flow Step 3 & 4 */}
            <div className="results-grid-2col" style={{ marginTop: '2.5rem' }}>
              <div className="hardware-card">
                <div className="hardware-caption" style={{ padding: '1.25rem' }}>
                  <span className="results-badge" style={{ marginBottom: '0.5rem' }}>Stage 3 · Analog Amplification</span>
                  <strong>Dual LT1818 Ultra-High Speed Preamplifier</strong>
                  <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>Sub-Nanosecond Fidelity</strong>: Dual LT1818 op-amps (400 MHz bandwidth, 2500 V/μs slew rate) amplify sub-millivolt SiPM output into clean, measurable voltage signals.
                  </p>
                  <p style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>Dual Rail Operation</strong>: Powered by the -5V rail to prevent pulse distortion and ground saturation during fast high-frequency transients.
                  </p>
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-caption" style={{ padding: '1.25rem' }}>
                  <span className="results-badge" style={{ marginBottom: '0.5rem' }}>Stage 4 · Energy Binned Discrimination</span>
                  <strong>DAC Reference Thresholds & MAX9108 Comparators</strong>
                  <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>Precision DAC References</strong>: Microcontroller DACs set dynamic reference voltages defining threshold boundaries for multi-channel pulse height analysis.
                  </p>
                  <p style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    • <strong>Quad Comparators</strong>: 4 MAX9108 high-speed comparators compare analog pulses against thresholds, firing digital logic pulses to sort incoming particles by energy level.
                  </p>
                </div>
              </div>
            </div>

            {/* Schematic Figure 2 & 3 */}
            <div className="results-grid-2col" style={{ marginTop: '2rem' }}>
              <div className="labview-card">
                <div className="labview-img-wrapper" style={{ maxHeight: '280px' }}>
                  <img src={getAssetUrl('/images/cubesat/schematic_lt1818_amplifier.png')} alt="LT1818 High-Speed Op-Amp Amplifier Circuit" />
                </div>
                <div className="figure-caption">
                  <strong>Schematic 2: LT1818 Dual Op-Amp Amplifier — </strong>
                  High-bandwidth preamplifier stage providing low-noise pulse amplification before threshold discrimination.
                </div>
              </div>

              <div className="labview-card">
                <div className="labview-img-wrapper" style={{ maxHeight: '280px' }}>
                  <img src={getAssetUrl('/images/cubesat/schematic_max9108_comparator.png')} alt="MAX9108 Comparator Stage Schematic" />
                </div>
                <div className="figure-caption">
                  <strong>Schematic 3: MAX9108 High-Speed Comparator Stage — </strong>
                  Pulse-height discriminator stage comparing analog signal peaks against DAC reference voltages to output digital pulses.
                </div>
              </div>
            </div>

            {/* Signal Flow Step 5 & 6 */}
            <div className="results-section" style={{ marginTop: '3.5rem' }}>
              <span className="results-badge">Stage 5 & 6 · Digital Latching & Telemetry</span>
              <h2 className="section-heading" style={{ marginTop: '0.25rem' }}>Digital Processing & Energy Spectrum Histograms</h2>
              
              <div className="results-grid-2col" style={{ marginTop: '1.5rem' }}>
                <div className="hardware-card">
                  <div className="hardware-caption" style={{ padding: '1.25rem' }}>
                    <strong>Hardware Counter ICs & MUX Routing</strong>
                    <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      • Hardware pulse counters latch digital comparator triggers in real-time, eliminating CPU polling bottlenecks. High-speed multiplexers route count data across shared microcontroller SPI/I2C buses.
                    </p>
                  </div>
                </div>

                <div className="hardware-card">
                  <div className="hardware-caption" style={{ padding: '1.25rem' }}>
                    <strong>RTD Thermal Bias Compensation</strong>
                    <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      • RTD temperature sensors track SiPM thermal variations, allowing the microcontroller to dynamically adjust 30V boost bias voltage and maintain constant SiPM gain across orbit temperature swings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="philosophy-card" style={{ marginTop: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Final Output: Real-Time Particle Count & Energy Spectrum Histograms
                </h3>
                <p style={{ fontSize: '0.935rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  By combining SiPM light sensing, low-noise -5V rail amplification, multi-stage DAC/comparator energy binning, and hardware pulse counting, the detector packages raw particle collisions into real-time telemetry streams—generating accurate graphs of cosmic ray particle flux versus deposited energy.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : project.id === 'avishtech-internship' ? (
        <>
          {/* Section 1: Model Accuracy Envelope & Key Takeaways */}
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-heading">Physics-Based Via Modeling & Accuracy Envelopes</h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Benchmarking physics-based analytical cavity models against 3D OpenEMS full-wave simulations across 11 canonical geometries (G1–G6) up to 40+ GHz:
            </p>

            <div className="results-card-large">
              <div className="results-content">
                <span className="results-badge">Core Modeling Takeaway · 20 Gb/s Validation</span>
                <h3 style={{ marginTop: '0.4rem' }}>G1–G4 Validated Success vs. G5/G6 40-mil Pitch Envelope Boundary</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  By pairing Leone & Vecherya (LV) via-domain parameters (C_b', Z', L_v) with Duan circular-port parallel-plate formulations, our physics-based model calculates multi-layer via S-parameters in milliseconds. However, benchmarking against full-wave simulations identified an exact physical boundary at 20 Gb/s+:
                </p>

                <ul className="results-highlights-list" style={{ marginTop: '1rem' }}>
                  <li>
                    <strong>G1–G4 Envelope (Validated Accuracy to 40+ GHz)</strong>: Single through vias, stubbed vias, and wide-pitch differential pairs match 3D OpenEMS full-wave results within fraction-of-a-dB margins up to 40 GHz.
                  </li>
                  <li>
                    <strong>G5 & G6 40-mil Pitch Boundary (Degradation at 20 Gb/s+)</strong>: At 40-mil pitch, standard isotropic models fall outside the validated envelope. As pitch approaches half a wavelength (λ/2 ≈ 0.39λ at 60 GHz in ε_r = 3.6), adjacent via fields induce lopsided, non-uniform currents (m = ±1, ±2 multipole modes) around the barrel circumference. Isotropic models discard these modes, introducing crosstalk errors.
                  </li>
                  <li>
                    <strong>The Anisotropic Solution (Zhang & Fan, 2012)</strong>: Implementing cylindrical harmonic field expansions (E_z = Σ [a_m H_m + b_m J_m] e^(jmφ)) with Schur-complement matrix elimination accounts for non-uniform barrel currents, restoring model accuracy for ultra-dense 40-mil via arrays.
                  </li>
                  <li>
                    <strong>Duan Circular Ports</strong>: Replaced legacy square-port approximations with circular ports (matching physical barrel radius r_0), eliminating logarithmic inductance shifts (~16 pH offset) and removing ±1.5 dB port shape uncertainties.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Validation Graphs Gallery */}
          <div className="results-section" style={{ marginTop: '3.5rem' }}>
            <span className="results-badge">Empirical Validation Suite</span>
            <h2 className="section-heading" style={{ marginTop: '0.25rem' }}>Full-Wave Solver Validation Graphs (G1 – G6)</h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Comparison plots of physics-based analytical calculations against 3D OpenEMS full-wave solver baselines:
            </p>

            {/* Group 1: Single & Stubbed Vias (G1 - G3) */}
            <h3 className="sub-heading" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Group 1: Single Vias & Stub Resonances (G1, G2, G3)</h3>
            <div className="hardware-grid">
              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '220px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G1.png')} alt="G1 Single Via Response" />
                </div>
                <div className="hardware-caption">
                  <strong>G1: Single Through Via</strong>
                  S21 insertion loss and S11 return loss matching 3D OpenEMS full-wave curves up to 40 GHz.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '220px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G2.png')} alt="G2 Short Stub Response" />
                </div>
                <div className="hardware-caption">
                  <strong>G2: Short-Stubbed Via</strong>
                  Captures capacitive stub loading without deep high-frequency resonant nulls.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '220px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G3.png')} alt="G3 Long Stub Resonance" />
                </div>
                <div className="hardware-caption">
                  <strong>G3: Long-Stubbed Via</strong>
                  Accurately predicts quarter-wave anti-resonant nulls and high-frequency phase shifts.
                </div>
              </div>
            </div>

            {/* Group 2: Differential Pair & 40-mil Pitch Crosstalk (G4 & G5) */}
            <h3 className="sub-heading" style={{ marginTop: '2.5rem', marginBottom: '0.75rem' }}>Group 2: Differential Pairs & 40-mil Pitch (G4 & G5)</h3>
            <div className="results-grid-2col">
              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G4.png')} alt="G4 Differential Via Pair" />
                </div>
                <div className="hardware-caption">
                  <strong>G4: Differential Via Pair Transmission</strong>
                  Differential-mode insertion loss (SDD21) and intra-pair coupling validated against full-wave simulations.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G5.png')} alt="G5 40-mil Pitch Pair Layout" />
                </div>
                <div className="hardware-caption">
                  <strong>G5: 40-mil Pitch Pair Geometry</strong>
                  Test configuration marking the 40-mil pitch transition where isotropic coupling models begin to degrade.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G5 differential.png')} alt="G5 Differential Mode S-Parameters" />
                </div>
                <div className="hardware-caption">
                  <strong>G5: Differential Mode Signal Integrity</strong>
                  Differential S-parameter response for 40-mil pitch pair, benchmarking analytical vs full-wave solver.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G5 cross talk.png')} alt="G5 Far-End Differential Crosstalk" />
                </div>
                <div className="hardware-caption">
                  <strong>G5: Far-End Differential Crosstalk (FEXT)</strong>
                  Far-End Crosstalk (FEXT) magnitude curves up to 40 GHz across 40-mil pitch differential vias.
                </div>
              </div>
            </div>

            {/* Group 3: 3x3 Dense Constellation Array (G6) */}
            <h3 className="sub-heading" style={{ marginTop: '2.5rem', marginBottom: '0.75rem' }}>Group 3: 3x3 Dense Constellation Array at 40-mil Pitch (G6)</h3>
            <div className="results-grid-2col">
              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G6.png')} alt="G6 3x3 Array Geometry" />
                </div>
                <div className="hardware-caption">
                  <strong>G6: 3x3 Array Constellation Layout</strong>
                  9-via constellation at 40-mil pitch used to evaluate multi-aggressor crosstalk and central via shielding.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G6 through.png')} alt="G6 Outer Via Through Transmission" />
                </div>
                <div className="hardware-caption">
                  <strong>G6: Outer Via Through Transmission</strong>
                  Through-channel transmission for outer vias surrounded by adjacent passive and active scatterers.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G6 center through.png')} alt="G6 Center Via Through Transmission" />
                </div>
                <div className="hardware-caption">
                  <strong>G6: Center Via Through Transmission</strong>
                  Center via through-conduction curve demonstrating maximum surrounding via cage coupling effects.
                </div>
              </div>

              <div className="hardware-card">
                <div className="hardware-img-wrapper" style={{ height: '230px' }}>
                  <img src={getAssetUrl('/images/Avishtech/G6 cross talk to corner.png')} alt="G6 Aggressor-to-Corner Crosstalk" />
                </div>
                <div className="hardware-caption">
                  <strong>G6: Aggressor-to-Corner Crosstalk</strong>
                  Crosstalk transmission from central aggressor via to corner victim via, highlighting isotropic model limits at 20 Gb/s+.
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Fallback Generic Figures Display for Other Projects */
        project.figures && project.figures.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <h2 className="section-heading">Research Figures & Lab Setup</h2>
            <p className="lead-text" style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Data plots, hardware control diagrams, and experimental figures extracted from project documentation:
            </p>
            <div className="figures-grid">
              {project.figures.map((fig) => (
                <figure key={fig.id} className="figure-card">
                  <div className="figure-img-wrapper">
                    <img 
                      src={getAssetUrl(fig.imagePath)} 
                      alt={fig.title} 
                      className="figure-img"
                    />
                  </div>
                  <figcaption className="figure-caption">
                    <strong>{fig.title}: </strong>
                    {fig.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )
      )}

      {/* External Links / Documents */}
      {project.links && project.links.length > 0 && (
        <div style={{ marginTop: '2.5rem' }}>
          <h2 className="section-heading">Documentation & Presentation</h2>
          <div className="link-list">
            {project.links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target={link.isExternal ? "_blank" : "_self"} 
                rel="noopener noreferrer" 
                className="cta-button"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Technology Chips */}
      <div style={{ marginTop: '2.5rem' }}>
        <h3 className="sub-heading">Tools & Technologies</h3>
        <div className="project-tags" style={{ marginTop: '0.5rem' }}>
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tag-badge" style={{ fontSize: '0.85rem', padding: '0.25rem 0.65rem' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Back Link */}
      <div style={{ marginTop: '4rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <Link to="/projects" className="back-link">
          ← All projects
        </Link>
      </div>
    </div>
  );
};

