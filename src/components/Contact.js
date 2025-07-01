import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Gagal mengirim formulir:', error);
    }
  };

  if (submitted) {
    return (
      <div className="contact">
        <div className="container">
          <h1 className="section-title">Hubungi Saya</h1>
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Terima Kasih!</h2>
            <p>Pesan Anda berhasil dikirim. Saya akan segera menghubungi Anda kembali.</p>
            <a href="/" className="btn">Kembali ke Beranda</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="container">
        <h1 className="section-title">Hubungi Saya</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Informasi Kontak</h2>
            <p className="info-subtitle">Jangan ragu untuk menghubungi saya untuk kerja sama atau sekadar menyapa!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h3>Lokasi</h3>
                  <p>Purbalingga, Jawa Tengah, Indonesia</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h3>Telepon</h3>
                  <p>+62 8821 3342 844</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>desikaazzahra@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Kirim Pesan ke Saya</h2>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nama Anda"
              />
              <span className="form-icon">👤</span>
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Anda"
              />
              <span className="form-icon">✉️</span>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Pesan Anda"
                rows="5"
              ></textarea>
              <span className="form-icon">📝</span>
            </div>
            
            <button type="submit" className="btn submit-btn">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
