import os
import subprocess

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: letter;
    margin: 0.3in 0.4in 0.3in 0.4in;
  }
  body {
    font-family: "Times New Roman", Times, serif;
    font-size: 9.25pt;
    line-height: 1.18;
    color: #000;
    margin: 0;
    padding: 0;
  }
  a {
    color: #0000EE;
    text-decoration: underline;
  }
  .header {
    text-align: center;
    margin-bottom: 6px;
  }
  .name {
    font-size: 15pt;
    font-weight: bold;
    letter-spacing: 0.8px;
    margin-bottom: 1px;
  }
  .contact {
    font-size: 9pt;
    margin-bottom: 1px;
  }
  .honors {
    font-size: 9.5pt;
    font-weight: bold;
  }
  .section-title {
    font-size: 10pt;
    font-weight: bold;
    letter-spacing: 0.4px;
    border-bottom: 1px solid #000;
    margin-top: 6px;
    margin-bottom: 3px;
    padding-bottom: 1px;
  }
  .item-row {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-top: 3px;
  }
  .item-subrow {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    margin-bottom: 1px;
  }
  ul {
    margin: 1px 0 2px 0;
    padding-left: 16px;
  }
  li {
    margin-bottom: 1px;
  }
  .skills-list {
    margin-top: 3px;
    line-height: 1.25;
  }
  .skills-list strong {
    font-weight: bold;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">AUSTIN GIFFEN</div>
  <div class="contact">
    <a href="mailto:AUSTIN.GIFFEN@YALE.EDU">AUSTIN.GIFFEN@YALE.EDU</a> | 1-(208)-995-3914 | <a href="https://WWW.LINKEDIN.COM/IN/AUSTIN-GIFFEN-56A09431A">WWW.LINKEDIN.COM/IN/AUSTIN-GIFFEN-56A09431A</a>
  </div>
  <div class="honors">2024 U.S. Presidential Scholar, National Merit Scholar</div>
</div>

<div class="section-title">EDUCATION</div>
<div class="item-row">
  <span>Yale University (GPA: 3.91)</span>
  <span>New Haven, CT</span>
</div>
<div class="item-subrow">
  <span>Major: Electrical Engineering</span>
  <span>Graduating Spring 2028</span>
</div>
<ul>
  <li>
    <strong>Relevant Courses</strong>
    <ul>
      <li>Probabilistic Machine Learning, Quantum Information Processing and Communication, Mechatronics Laboratory, Circuits and Systems Design, Digital Systems, Information Systems, Intensive Physics (classical mechanics/special relativity), Modern Physical Measurement, Linear Algebra, Computer Engineering, Intensive Physics (E&M/special relativity/quantum mechanics), Electromagnetic Waves and Devices, Electronics, Communications and Control</li>
    </ul>
  </li>
</ul>

<div class="section-title">WORK EXPERIENCE</div>

<div class="item-row">
  <span>Avishtech, Inc | Electrical Engineering Intern</span>
  <span>Summer 2026 + Fall 2026 Internships</span>
</div>
<ul>
  <li>Developed analytical via-in-cavity EM models comparable to full-wave accuracy up to 50 GHz with orders-of-magnitude reduction in solve time.</li>
  <li>Validated formulations across canonical multi-layer PCB geometries using full-wave 3D planar MoM (Sonnet) and FDTD (openEMS) simulations.</li>
</ul>

<div class="item-row">
  <span>Yale Undergraduate Research Assistant &mdash; Konezny Lab</span>
  <span>January 2025 - January 2026</span>
</div>
<ul>
  <li>Recipient of the Yale College First-Year Summer Research Fellowship ($5,000 research grant)</li>
  <li>Designed and assembled gas flow control system using Arduino, mass flow controllers, and LabVIEW for precise hydrogen/oxygen doping experiments.</li>
  <li>Developed Python scripts to process experimental data, compute conductivity, and generate visual correlations.</li>
  <li>Reviewed and applied findings from academic literature to evaluate and optimize the conduction mechanisms of CuSCN</li>
</ul>

<div class="item-row">
  <span>Yale Undergraduate Research Assistant &mdash; Jung Han Lab</span>
  <span>January 2026 - May 2026</span>
</div>
<ul>
  <li>Developed and optimized machine-learning models (Random Forest, cross-validated grid search) in Python to predict glucose levels from optical spectroscopy sensor signals.</li>
</ul>

<div class="item-row">
  <span>Lead Sailing Instructor for Southern Idaho Sailing Association</span>
  <span>May 2022 - August 2024</span>
</div>
<ul>
  <li>Worked with two other instructors to run sailing camps for beginner through advanced sailors.</li>
</ul>

<div class="section-title">PROJECTS</div>

<div class="item-row">
  <span>Yale CubeSat (satellite) Project Lead</span>
  <span>September 2024 - Present</span>
</div>
<ul>
  <li>Manage a 10-person team, assigning project deliverables across subteams and leading NASA launch milestone meetings.</li>
  <li>Developed the complete cosmic ray detector schematic and PCB from negative voltage rail, multiple stage amplifiers, comparators, DACs, counter ICs, temperature sensors, boost converters, and multiplexers.</li>
  <li>Simulated circuits in KiCad using SPICE models for each component to validate gain, noise, timing response, and power behavior before fabrication.</li>
  <li>Tested and validated the detector subsystem through bench measurements, debugging, calibration, and data analysis from local cosmic-ray counts to confirm proper functionality.</li>
</ul>

<div class="item-row">
  <span>Hardware-Aware Bayesian Neural Network Compiler Framework</span>
  <span>Spring 2026</span>
</div>
<ul>
  <li>Built a compiler framework to translate Bayesian Neural Networks (BNNs) into physical analog memristor crossbar circuits for low-power edge AI.</li>
  <li>Cut parameter search space by 50% by embedding real-world memristor physical constraints directly into the variational training objective.</li>
  <li>Minimized routing overhead and proved convergence, demonstrating that crossbar topology optimizes data movement while ensuring reliable probabilistic sampling under physical device noise.</li>
</ul>

<div class="item-row">
  <span>MindVault: Consumer Learning App</span>
  <span>Summer 2026 &ndash; Present</span>
</div>
<ul>
  <li>Co-founded and built a consumer app that vaults lectures, articles, and videos, extracts them into discrete concepts, and models per-concept memory decay to serve personalized daily microquizzes.</li>
  <li>Managed market outreach and investment outreach, including creator partnership negotiations and a pilot program designed to validate user retention and engagement.</li>
</ul>

<div class="section-title">ADDITIONAL SKILLS</div>
<div class="skills-list">
  <div><strong>Engineering Skills:</strong> Circuit Design & Analysis, Oscilloscopes, Digital Multimeters, Waveform Generators, Verilog (RTL & Testbenches), Glove Box + Cryostat Operation, Spin Coating, Thin Film Deposition</div>
  <div><strong>Python Libraries:</strong> NumPy, Matplotlib, Scikit-learn, Pandas, tkinter</div>
  <div><strong>Workflow Tools:</strong> GitHub, Visual Studio Code, Spyder, Jupyter Notebook, Docker</div>
  <div><strong>Languages:</strong> English &ndash; Native, Spanish &ndash; Advanced: 2023 International Diploma of Spanish (D.I.E.)</div>
</div>

</body>
</html>
"""

html_path = r"c:\Users\ajgif\Personal Website\scratch_resume_build.html"
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

chrome_cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--print-to-pdf=" + r"c:\Users\ajgif\Personal Website\public\Full Resume_Portfolio for Personal Website.pdf",
    html_path
]

res = subprocess.run(chrome_cmd, capture_output=True, text=True)
print("Chrome stdout:", res.stdout)
print("Chrome stderr:", res.stderr)

# Also copy to root folder
import shutil
shutil.copyfile(
    r"c:\Users\ajgif\Personal Website\public\Full Resume_Portfolio for Personal Website.pdf",
    r"c:\Users\ajgif\Personal Website\Full Resume_Portfolio for Personal Website.pdf"
)
print("Copied PDF to root folder successfully.")
