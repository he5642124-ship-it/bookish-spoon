import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SoftwareAccel</h3>
            <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
              Accelerating your digital transformation through innovative software solutions and expert development services.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--color-text-tertiary)' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--color-text-tertiary)' }}>Twitter</a>
              <a href="#" style={{ color: 'var(--color-text-tertiary)' }}>GitHub</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">Digital Strategy</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 SoftwareAccel. All rights reserved. Accelerating digital transformation worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;