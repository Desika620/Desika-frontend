import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Ds</h3>
            <p>Membuat aplikasi web yang indah dan fungsional dengan teknologi modern.</p>
          </div>
          <div className="footer-links">
            <h4>Tautan Cepat</h4>
            <ul>
              <li><a href="/">Beranda</a></li>
              <li><a href="/about">Tentang</a></li>
              <li><a href="/portfolio">Portofolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Kontak</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Terhubung dengan Saya</h4>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:contact@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Desika Cahya Azzahra. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
