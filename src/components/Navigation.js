import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="container">
        <Link to="/" className="logo">
          <FaLaptopCode className="logo-icon" />
          <span>Ds</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">Tentang saya</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/blog" className="nav-link">Blog</Link></li>
          <li><Link to="/contact" className="nav-link contact-btn">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;