import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('https://desika-backend.vercel.app/api/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  if (loading) {
    return (
      <div className="portofolio-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="portofolio">
      <div className="container">
        <h1 className="section-title">My Portfolio</h1>
        
        <div className="portofolio-filter">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'React' ? 'active' : ''}
            onClick={() => setFilter('React')}
          >
            React
          </button>
          <button 
            className={filter === 'Node.js' ? 'active' : ''}
            onClick={() => setFilter('Node.js')}
          >
            Node.js
          </button>
          <button 
            className={filter === 'MongoDB' ? 'active' : ''}
            onClick={() => setFilter('MongoDB')}
          >
            MongoDB
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-links">
                  <a href="#" className="project-link">
                    <FaGithub />
                  </a>
                  <a href="#" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <a href={`/portfolio/${project.id}`} className="view-more">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
