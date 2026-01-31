import React, { useState, useEffect } from 'react';
import "./Header.css";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize theme
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    
    // Legacy support for old class-based theme
    if (newTheme) {
      document.body.classList.remove('light');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id='header'>
      {/* Logo/Brand Section */}
      <div className="header-brand">
        <div className="brand-text">
          <span className="brand-name">Ritesh Pandit</span>
          <span className="brand-tagline">AI/ML Developer</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <Link to="/#intro" className="nav-link">
          <span className="nav-icon">👋</span>
          <span className="nav-text">Introduction</span>
        </Link>
        <Link to="/#education" className="nav-link">
          <span className="nav-icon">🎓</span>
          <span className="nav-text">Education</span>
        </Link>
        <Link to="/#skills" className="nav-link">
          <span className="nav-icon">⚡</span>
          <span className="nav-text">Skills</span>
        </Link>
        <Link to="/#projects" className="nav-link">
          <span className="nav-icon">🚀</span>
          <span className="nav-text">Projects</span>
        </Link>
        <Link to="/#hobbies" className="nav-link">
          <span className="nav-icon">🎨</span>
          <span className="nav-text">Hobbies</span>
        </Link>
        <Link to="/#experience" className="nav-link">
          <span className="nav-icon">💼</span>
          <span className="nav-text">Experience</span>
        </Link>
        <Link to="/#resume" className="nav-link nav-link-primary">
          <span className="nav-icon">📄</span>
          <span className="nav-text">Resume</span>
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navigation</span>
          <button className="mobile-close-btn" onClick={closeMobileMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="mobile-nav-links">
          <Link to="/#intro" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="nav-icon">👋</span>
            <span className="nav-text">Introduction</span>
          </Link>
          <Link to="/#education" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="nav-icon">🎓</span>
            <span className="nav-text">Education</span>
          </Link>
          <Link to="/#skills" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="nav-icon">⚡</span>
            <span className="nav-text">Skills</span>
          </Link>
          <Link to="/#projects" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="nav-icon">🚀</span>
            <span className="nav-text">Projects</span>
          </Link>
          <Link to="/#hobbies" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="nav-icon">🎨</span>
            <span className="nav-text">Hobbies</span>
          </Link>
          <Link to="/#experience" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="nav-icon">💼</span>
            <span className="nav-text">Experience</span>
          </Link>
          <Link to="/#resume" className="mobile-nav-link mobile-nav-link-primary" onClick={closeMobileMenu}>
            <span className="nav-icon">📄</span>
            <span className="nav-text">Resume</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Right Section: Theme Toggle + Mobile Menu Button */}
      <div className="header-actions">
        {/* Theme Toggle */}
        <button 
          className="theme-toggle-btn" 
          onClick={changeTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;