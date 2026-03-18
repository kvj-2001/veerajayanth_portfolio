import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            {'<KVJ />'}
          </a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      
      <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
