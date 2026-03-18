import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import programmingAnimation from '../resources/Animation - 1743519629515.json';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({ years: 0, projects: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef(null);
  
  const skills = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Spring Security', icon: '🔒' },
    { name: 'Hibernate/JPA', icon: '💾' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Microservices', icon: '🏗️' },
    { name: 'Docker', icon: '🐋' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Redis', icon: '⚡' },
    { name: 'Kafka', icon: '📨' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '🔀' },
    { name: 'Maven', icon: '📦' },
    { name: 'CI/CD', icon: '🔄' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated]);
  
  const animateCounters = () => {
    const targets = { years: 2, projects: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress)
      });
      
      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(interval);
      }
    }, stepDuration);
  };
  
  return (
    <section id="about" ref={aboutRef}>
      <div className="container">
        <div className="about-container">
          {/* Top: Image and About text side by side */}
          <div className="about-intro">
            <div className="about-image reveal">
              <div className="profile-animation">
                <Lottie 
                  animationData={programmingAnimation} 
                  loop={true}
                  className="about-lottie"
                />
              </div>
            </div>
            <div className="about-text reveal">
              <h3>About Me</h3>
              <p>
                I'm a passionate Backend Java Developer with over 2+ years of experience building 
                robust, scalable microservices and RESTful APIs. I specialize in Spring Boot ecosystem, 
                cloud-native architectures, and distributed systems. My focus is on writing clean, 
                maintainable code that solves real-world problems.
              </p>
              <p>
                I thrive in collaborative environments and enjoy mentoring junior developers. 
                When I'm not coding, you'll find me contributing to open-source projects or 
                exploring the latest trends in backend technologies and DevOps practices.
              </p>
            </div>
          </div>
          
          {/* Full width: Skills section */}
          <div className="skills-section reveal">
            <h4>Tech Stack & Expertise</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-badge" 
                  style={{ '--i': index }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Full width: Stats */}
          <div className="stats-container reveal">
            <div className="stat-card">
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
