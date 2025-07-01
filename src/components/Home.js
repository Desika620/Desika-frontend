import React, { useEffect, useState } from 'react';
import './Home.css';
import fotoDesika from '../assets/desika.jpg.jpg'; // Pastikan path ini sesuai

function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setFeaturedProjects(data.slice(0, 3)))
      .catch(error => console.error('Gagal mengambil data proyek:', error));
  }, []);

  return (
    <div className="home">
      {/* Bagian Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Halo, Saya <span className="highlight">Desika Cahya Azzahra</span></h1>
            <p className="hero-subtitle">Mahasiswa STMIK Widya Utama</p>
            <div className="hero-buttons">
              <a href="/portfolio" className="btn">Lihat Karya Saya</a>
              <a href="/contact" className="btn-outline">Hubungi Saya</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={fotoDesika} alt="Desika Cahya Azzahra" />
            </div>
          </div>
        </div>
      </section>

      {/* Proyek Unggulan */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Proyek Unggulan</h2>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="overlay">
                    <a href={`/portfolio/${project.id}`} className="view-btn">Lihat Proyek</a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
