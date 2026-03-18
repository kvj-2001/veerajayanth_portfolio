import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'ArthaVerse-Comprehensive Billing Software',
      category: 'Microservices',
      tech: ['Java', 'Spring Boot', 'MySQL', ' Spring Security with JWT', 'Junit'],
      description: 'A full-featured billing application built with Spring Boot, featuring user management, product management, invoice generation, and comprehensive reporting.',
      github: 'https://github.com/kvj-2001/ArthaVerseBackend',
      demo: '#'
    },
    {
      title: 'Airport Management System',
      category: 'REST APIs',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Spring Security'],
      description: 'AirportManagementSystem is a backend application in which the Admin can perform the CRUD operations and Manager can perform the allocations and deallocation between Hanger and Plane, Plane and Pilot.',
      github: 'https://github.com/kvj-2001/AirportManagementSystem',
      demo: '#'
    },
    {
      title: 'Prognosis-of-Crop-Yield',
      category: 'Machine Learning',
      tech: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS'],
      description: 'Designed to Predict the crop yield based on the inputs like rainfall, soil information, and crop type. Applied the Random Forest Algorithm to train the model on a dataset of more than 15,000 samples.',
      github: 'https://github.com/kvj-2001/Prognosis-of-Crop-Yield',
      demo: '#'
    },
    {
      title: 'S - BOTA - Smart Bottle',
      category: 'Others',
      tech: ['IOT | Arduino', 'C++', 'Sensors'],
      description: 'Smart Water Bottle is an IOT based project. In this project we use an app for displaying the amount of TDS and pH values of the water and suggests the quality of drinking water as well as to improve the quality of the water if necessary.',
      github: 'https://github.com/kvj-2001/S-BOTA-Smart-Bottle',
      demo: '#'
    }
  ];
  
  const filters = ['All', 'REST APIs', 'Microservices', 'Machine Learning', 'Others'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my work in backend development and system architecture
          </p>
        </div>
        
        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card reveal" 
              style={{ '--i': index }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
