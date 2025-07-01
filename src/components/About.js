import React from 'react';
import './About.css';
import profileImage from '../assets/desika.jpg.jpg'; // Pastikan path ini sesuai

function About() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 75 }
  ];

  return (
    <div className="about">
      <div className="container">
        <h1 className="section-title">Tentang Saya</h1>
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <img src={profileImage} alt="Profil" />
            </div>
          </div>
          <div className="about-text">
            <h2 className="about-heading">Developer JavaScript Fullstack</h2>
            <p className="about-description">
              Halo! Saya adalah pengembang web yang antusias dengan keahlian dalam teknologi JavaScript modern.
              Saya fokus dalam menciptakan aplikasi web yang indah, responsif, dan memberikan
              pengalaman pengguna yang luar biasa.
            </p>
            <p className="about-description">
              Dengan pengalaman profesional lebih dari 3 tahun, saya telah membantu banyak klien mewujudkan
              ide mereka. Saya percaya pada penulisan kode yang bersih, desain yang matang, dan pembelajaran berkelanjutan.
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">Keahlian Saya</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%`, background: `linear-gradient(to right, var(--primary-pink), var(--secondary-pink))` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
