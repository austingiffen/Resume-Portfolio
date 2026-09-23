export interface ProjectFigure {
  id: string;
  title: string;
  imagePath: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  oneSentence: string;
  category: string;
  year: string;
  overview: string;
  keyHighlights: string[];
  technologies: string[];
  figures?: ProjectFigure[];
  links?: ProjectLink[];
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "avishtech-internship",
    number: "01",
    title: "High-Frequency Circuit Board Via Modeling at Avishtech",
    oneSentence: "Engineered physics-based via-in-cavity models validated against full-wave OpenEMS solvers up to 40+ GHz, benchmarking single vias, differential pairs, and dense 40-mil via arrays.",
    category: "High-Speed Electronics · Electromagnetic Modeling · Signal Integrity · 2024",
    year: "2024",
    featured: true,
    overview: "During my electrical engineering internship at Avishtech, I developed high-frequency physics-based via models that run thousands of times faster than 3D full-wave solvers. By combining Leone & Vecherya (LV) via-domain capacitance and inductance with circular-port parallel-plate formulations, I evaluated model accuracy across 11 canonical geometries (G1–G6), identifying exact validity envelopes for single vias, stubbed vias, differential pairs, and dense 40-mil pitch via arrays at 20 Gb/s+ data rates.",
    keyHighlights: [
      "Engineered analytical via-in-cavity models that calculate multi-layer S-parameters up to 40+ GHz in milliseconds.",
      "Validated G1–G4 single and stubbed via models against 3D OpenEMS full-wave simulations with high agreement.",
      "Identified the 40-mil pitch validation boundary (G5/G6), demonstrating where isotropic models break due to non-uniform multipole scattering.",
      "Incorporated Duan circular ports to eliminate legacy square-port inductance errors and 1.5 dB shape uncertainties.",
      "Formulated the anisotropic multiple-scattering solution (Zhang & Fan) to resolve dense array coupling at 20 Gb/s+ high frequencies."
    ],
    technologies: [
      "Physics-Based Via Modeling",
      "OpenEMS & Sonnet Full-Wave Solvers",
      "Circular Port Formulations (Duan)",
      "Anisotropic Multiple Scattering (Zhang & Fan)",
      "Signal Integrity & Crosstalk Analysis",
      "Python Numerical Modeling"
    ],
    figures: [
      {
        id: "g1",
        title: "G1: Single Via Through Transmission (S21 & S11)",
        imagePath: "/images/Avishtech/G1.png",
        caption: "Analytical model vs. full-wave OpenEMS validation for a single through-via up to 40 GHz, showing near-perfect match in S21 insertion loss and S11 return loss."
      },
      {
        id: "g2",
        title: "G2: Short Stubbed Via Response",
        imagePath: "/images/Avishtech/G2.png",
        caption: "Comparison of physics-based stub model against 3D solver for a short-stub via, capturing initial stub capacitive loading without deep resonances."
      },
      {
        id: "g3",
        title: "G3: Long Stubbed Via Resonance & Anti-Resonance Null",
        imagePath: "/images/Avishtech/G3.png",
        caption: "Long stub via response accurately predicting quarter-wave anti-resonant nulls and high-frequency stub phase shifts."
      },
      {
        id: "g4",
        title: "G4: Differential Via Pair Transmission",
        imagePath: "/images/Avishtech/G4.png",
        caption: "Differential via pair model validating differential-mode insertion loss (SDD21) and intra-pair coupling up to 40 GHz."
      },
      {
        id: "g5",
        title: "G5: 40-mil Pitch Differential Pair Overview",
        imagePath: "/images/Avishtech/G5.png",
        caption: "G5 test geometry evaluated at 40-mil pitch, defining the transition boundary where dense via coupling begins to demand anisotropic scattering."
      },
      {
        id: "g5-diff",
        title: "G5: Differential Mode Signal Integrity",
        imagePath: "/images/Avishtech/G5 differential.png",
        caption: "Differential mode S-parameter response for the 40-mil pitch pair, comparing physics-based predictions against full-wave baseline."
      },
      {
        id: "g5-fext",
        title: "G5: Far-End Differential Crosstalk (FEXT)",
        imagePath: "/images/Avishtech/G5 cross talk.png",
        caption: "Far-End Crosstalk (FEXT) curve for 40-mil pitch pair, demonstrating coupling magnitude behavior up to 40 GHz."
      },
      {
        id: "g6",
        title: "G6: 3x3 Dense Via Array Geometry",
        imagePath: "/images/Avishtech/G6.png",
        caption: "3x3 via array constellation at 40-mil pitch used to test multi-aggressor crosstalk and central via shielding performance."
      },
      {
        id: "g6-through",
        title: "G6: Outer Via Through Transmission",
        imagePath: "/images/Avishtech/G6 through.png",
        caption: "Through-channel transmission for an outer via in the 3x3 array surrounded by adjacent passive and active scatterers."
      },
      {
        id: "g6-center",
        title: "G6: Center Via Through Transmission",
        imagePath: "/images/Avishtech/G6 center through.png",
        caption: "Center via through-transmission curve demonstrating maximum surrounding via cage coupling effects at high frequencies."
      },
      {
        id: "g6-crosstalk",
        title: "G6: Aggressor-to-Corner Differential Crosstalk",
        imagePath: "/images/Avishtech/G6 cross talk to corner.png",
        caption: "Crosstalk transmission from central aggressor via to corner victim via, highlighting isotropic model degradation at 20 Gb/s+."
      }
    ]
  },
  {
    id: "yale-cubesat",
    number: "02",
    title: "Yale CubeSat Satellite — Project Lead",
    oneSentence: "Project Lead managing a 10-person team overseeing satellite subteams, leading NASA launch milestone meetings, and engineering the cosmic ray detector subsystem.",
    category: "Space Systems · Project Lead · Systems Engineering & PCB · Sept 2024–Present",
    year: "2024–Present",
    featured: true,
    overview: "As Project Lead for the Yale CubeSat satellite project, I manage a 10-person engineering team, assigning project deliverables across satellite subteams and leading NASA launch milestone meetings. In addition to overseeing overall team workflow and subteam integration, I designed and engineered the satellite's cosmic ray detector subsystem—from negative voltage power rails to multi-stage amplifiers and SPICE-validated PCBs.",
    keyHighlights: [
      "Manage a 10-person satellite engineering team, assigning project deliverables across subteams and leading NASA launch milestone meetings.",
      "Oversee subteam technical integration while directly engineering the cosmic ray detector schematic and PCB (negative voltage rail, multi-stage amplifiers, comparators, DACs, counter ICs, temperature sensors, boost converters, and multiplexers).",
      "Simulated detector circuits in KiCad using SPICE models for each component to validate gain, noise, timing response, and power behavior before fabrication.",
      "Tested and validated the detector subsystem through bench measurements, debugging, calibration, and data analysis from local cosmic-ray counts to confirm proper functionality."
    ],
    technologies: [
      "Satellite Project Leadership",
      "NASA Launch Milestones",
      "KiCad PCB Design",
      "SPICE Simulation",
      "Analog & Mixed-Signal Circuits",
      "Power Management"
    ]
  },
  {
    id: "cuscn-research",
    number: "03",
    title: "CuSCN Semiconductor Research for High-Efficiency Solar Cells",
    oneSentence: "Researched transparent semiconductor materials to improve solar cell efficiency, building custom gas-flow test chambers and automated data pipelines.",
    category: "Solar Research · Semiconductor Physics · Hardware & Automation · 2025–2026",
    year: "2025–2026",
    featured: true,
    overview: "Solar panels convert sunlight into electricity, but standard materials can block incoming light or trap electrical charges before they leave the cell. At Yale's Energy Sciences Institute, I investigated Copper(I) thiocyanate (CuSCN)—a low-cost, highly transparent material that helps positive charges flow efficiently out of the solar cell. I built an automated gas-flow test setup and data pipeline to study how exposure to hydrogen, oxygen, humidity, and light changes the material's electrical behavior.",
    keyHighlights: [
      "Awarded the Yale College First-Year Summer Research Fellowship ($5,000 grant) to lead independent experiments in the Konezny Lab.",
      "Designed and built an automated gas control system using an Arduino, mass flow controllers, and digital-to-analog converters to control gas mixtures.",
      "Connected precision measurement units with shielded cables to measure extremely small electrical currents without background noise.",
      "Developed a custom Python data processing script that automatically cleans raw sensor measurements, calculates conductivity, and plots graphs against gas exposure times.",
      "Discovered that storing CuSCN in ambient air over several months increases its conductivity by multiple orders of magnitude, and identified humidity as a key environmental factor."
    ],
    technologies: [
      "Python Data Processing",
      "Arduino & Hardware Control",
      "LabVIEW Automation",
      "Mass Flow Controllers",
      "Semiconductor Testing",
      "Agilent Precision SMUs"
    ],
    figures: [
      {
        id: "img6",
        title: "3 Mass Flow Controllers (MFCs)",
        imagePath: "/images/cuscn/poster_img_6_21.jpeg",
        caption: "Manages precise volumetric flow rates for Air, N2, and H2/N2 gas lines, routed through an air-actuated valve manifold controlled by a pneumatic Nitrogen pressure actuator."
      },
      {
        id: "img7",
        title: "Arduino + DAC Control Circuitry",
        imagePath: "/images/cuscn/poster_img_7_22.jpeg",
        caption: "Embedded control loop where the Arduino drives target flow rates and reads output feedback via DACs/ADCs with chip-select lines on a shared data bus and linear offset calibration."
      },
      {
        id: "img8",
        title: "SMUs & Gas Flow Test Setup",
        imagePath: "/images/cuscn/poster_img_8_23.jpeg",
        caption: "Agilent source-measure setup with 4 SMU channels connected via shielded triaxial (triax) guarded cables to suppress current leakage and noise during low-current conductivity tests."
      },
      {
        id: "img10",
        title: "LabVIEW Setup & Python Data Analysis Pipeline",
        imagePath: "/images/cuscn/poster_img_10_25.jpeg",
        caption: "Automated LabVIEW control interface issuing VISA serial commands alongside a vectorized Python data script that cleans logs into DataFrames and plots current against gas exposure and humidity."
      },
      {
        id: "img11",
        title: "Ambient Aging & Multi-Order Conductivity Surge",
        imagePath: "/images/cuscn/poster_img_11_26.jpeg",
        caption: "Longitudinal conductivity trends showing multi-order-of-magnitude increase in conductivity for CuSCN samples aged in ambient air over 175+ days, supported by GIXRD and XPS structural/chemical analysis."
      },
      {
        id: "img12",
        title: "Real-Time Current Response (Trial 1)",
        imagePath: "/images/cuscn/poster_img_12_28.jpeg",
        caption: "In-situ current vs. time plots tracking immediate photovoltaic photocurrent jumps under LED lighting and short-term conductivity drops caused by Relative Humidity (RH)."
      },
      {
        id: "img13",
        title: "Fresh vs. Aged Conduction Dynamics (Trial 2)",
        imagePath: "/images/cuscn/poster_img_13_31.jpeg",
        caption: "Comparative time-series cycles under H2/N2 gas flow isolating startup currents, peak heights, and baseline recovery between fresh and aged CuSCN thin films."
      }
    ],
    links: [
      {
        label: "View Research Poster Presentation (Google Slides) ↗",
        url: "https://docs.google.com/presentation/d/1e6wMXEWEJpyx848cdU-yQOiMJCMuljVILvgJ71IJeLk/edit?slide=id.g28067cb0407_0_1#slide=id.g28067cb0407_0_1",
        isExternal: true
      }
    ]
  },
  {
    id: "mind-vault",
    number: "04",
    title: "Co-Founder of MindVault AI Learning Platform & Browser Extension",
    oneSentence: "Co-founded MindVault, building a full-stack web app and Chrome extension that automatically converts AI chats and YouTube videos into interactive study quizzes.",
    category: "Co-Founder · Web Engineering · Chrome Extension · Full-Stack · 2025",
    year: "2025",
    featured: true,
    overview: "As Co-Founder of MindVault, I built an active-recall learning application that transforms passive reading into interactive flashcards and practice quizzes. MindVault features a browser extension that detects when a student is studying on ChatGPT, Claude, Gemini, or YouTube, allowing them to capture key information with one click and test their memory later.",
    keyHighlights: [
      "Co-founded MindVault and engineered a React and TypeScript web app backed by Express.js and Firebase Firestore.",
      "Developed a Manifest V3 Chrome Extension that injects capture buttons directly into major AI chat interfaces and YouTube video pages.",
      "Created a shared flashcard engine that manages spaced-repetition practice, daily study streaks, and quiz scoring across both the web app and extension.",
      "Designed intuitive, clutter-free user interfaces that let students create custom quizzes from captured content in seconds."
    ],
    technologies: [
      "React & TypeScript",
      "Manifest V3 Chrome Extension",
      "Node.js & Express",
      "Firebase Firestore",
      "Vite & Monorepo Architecture"
    ]
  },
  {
    id: "analog-lab",
    number: "05",
    title: "AnalogLab & Hardware-Aware BNN Compiler Framework",
    oneSentence: "Developed a software platform and compiler framework that provides an intuitive interface to switch between open-source analog circuit models when training neural networks.",
    category: "Analog AI · Compiler Frameworks · Machine Learning · 2026",
    year: "2026",
    featured: true,
    overview: "Standard digital AI processors consume significant power performing matrix calculations. Analog chip architectures run these calculations using physical electric currents, dramatically reducing energy use. I created AnalogLab—a software platform and compiler framework that serves as an easy interface to switch between open-source analog circuit models when training neural networks, translating models into physical netlists for analog microchips.",
    keyHighlights: [
      "Developed a hardware-aware compiler framework pipeline that translates Bayesian Neural Networks (BNNs) into physical analog crossbar circuit layouts.",
      "Engineered AnalogLab as a streamlined interface to seamlessly swap and evaluate open-source analog circuit models during neural network training.",
      "Created a mathematical training rule that accounts for real-world chip noise, reducing the optimization search space by half.",
      "Proved mathematically that crossbar circuit layouts minimize data transfer costs for edge AI computing.",
      "Standardized model output files so AI developers can export models directly to manufacturer-specific microchip toolchains."
    ],
    technologies: [
      "Python & PyTorch",
      "Analog Computing",
      "Compiler Framework Design",
      "Bayesian Neural Networks",
      "Edge Silicon Integration"
    ]
  },
  {
    id: "ai-video-pipeline",
    number: "06",
    title: "Automated Cloud Video Generation System",
    oneSentence: "Built an automated cloud pipeline that generates and publishes short-form AI videos from trending YouTube topics.",
    category: "Cloud Automation · Docker · Generative AI · 2025",
    year: "2025",
    featured: false,
    overview: "I designed and deployed a server pipeline that automatically creates short-form educational and trending videos without human intervention. The system monitors trending video topics, uses generative AI models (Gemini Flash Lite and Sora-2) to craft video prompts and scripts, synthesizes media, and uploads finished videos directly to YouTube.",
    keyHighlights: [
      "Built a fully automated server workflow running inside Docker containers for reliable scheduled execution.",
      "Integrated Gemini and Sora-2 APIs via CometAPI to automatically turn raw search trends into video prompts and scripts.",
      "Implemented secure OAuth credential management to automatically handle token refreshes and programmatic YouTube uploads."
    ],
    technologies: [
      "Docker",
      "Python",
      "Gemini & Sora-2 APIs",
      "YouTube Data API",
      "Headless Cloud Automation"
    ]
  }
];

/**
 * ARCHIVED PROJECTS
 * Projects temporarily removed from the active site display but preserved in code for future re-activation.
 */
export const ARCHIVED_PROJECTS_DATA: Project[] = [
  {
    id: "glucose-optical-sensing",
    number: "07",
    title: "Non-Invasive Glucose Prediction via Optical Sensors",
    oneSentence: "Developed machine learning models to non-invasively predict glucose levels using optical light sensor data.",
    category: "Machine Learning · Optical Sensing · Medical Technology · 2026–Present",
    year: "2026–Present",
    featured: false,
    overview: "Working in the Jung Han Lab at Yale, I analyze light absorption data from optical spectroscopy sensors to estimate blood glucose levels without requiring needle pricks. I build machine learning models in Python that filter optical noise and extract clear health metrics from light reflections.",
    keyHighlights: [
      "Trained and optimized Random Forest machine learning models using cross-validated grid searches to process optical sensor readings.",
      "Processed multi-wavelength light spectrum data to separate glucose absorption signatures from background skin and blood signals.",
      "Collaborated with lab researchers to refine feature selection and improve measurement accuracy across diverse light conditions."
    ],
    technologies: [
      "Python & scikit-learn",
      "Random Forest Regressors",
      "Optical Spectroscopy Analysis",
      "Signal Processing",
      "Data Cleaning & Grid Search"
    ]
  }
];

