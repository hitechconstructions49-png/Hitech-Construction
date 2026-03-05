import React from 'react';
import { 
  Send, Facebook, Twitter, Linkedin, Youtube, Instagram, 
  MapPin, Phone, Mail, ChevronRight 
} from 'lucide-react';
import './App.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* 1. TOP CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-content">
          <div className="cta-text">
            <h3>WE ARE READY TO BUILD YOUR DREAM TELL US MORE ABOUT YOUR PROJECT</h3>
            <p>Delivering quality, trust, and innovation in every project—your vision, our expertise.</p>
          </div>
          <button className="btn-cta">
            CONTACT US <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="footer-body">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-col about">
            <h4 className="footer-title">ABOUT COMPANY</h4>
            <div className="footer-line"><span></span></div>
            <div className="footer-logo">GK <span>CONSTRUCTION</span></div>
            <p>
              GK Construction stands for strength, reliability, and innovation. 
              We build lasting structures, deliver quality projects on time, 
              and create trust for communities across India.
            </p>
          </div>

          {/* Useful Links */}
          <div className="footer-col">
            <h4 className="footer-title">USEFUL LINKS</h4>
            <div className="footer-line"><span></span></div>
            <ul className="footer-links">
              <li><ChevronRight size={14} /> <a href="#">Home</a></li>
              <li><ChevronRight size={14} /> <a href="#">About</a></li>
              <li><ChevronRight size={14} /> <a href="#">Safety</a></li>
              <li><ChevronRight size={14} /> <a href="#">Services</a></li>
              <li><ChevronRight size={14} /> <a href="#">Equipments</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="footer-col">
            <h4 className="footer-title">MORE LINKS</h4>
            <div className="footer-line"><span></span></div>
            <ul className="footer-links">
              <li><ChevronRight size={14} /> <a href="#">Career</a></li>
              <li><ChevronRight size={14} /> <a href="#">Company Profile</a></li>
              <li><ChevronRight size={14} /> <a href="#">Current Projects</a></li>
              <li><ChevronRight size={14} /> <a href="#">Privacy Policy</a></li>
              <li><ChevronRight size={14} /> <a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="footer-col">
            <h4 className="footer-title">NEWSLETTER</h4>
            <div className="footer-line"><span></span></div>
            <div className="newsletter-box">
              <input type="email" placeholder="ENTER YOUR EMAIL" />
              <button><Send size={18} /></button>
            </div>
            <h4 className="footer-title social-title">SOCIAL LINKS</h4>
            <div className="footer-line"><span></span></div>
            <div className="social-icons">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* 3. CONTACT INFO BOXES */}
        <div className="footer-contact-info">
          <div className="info-box">
            <MapPin className="info-icon" />
            <div>
              <h5>ADDRESS</h5>
              <p>A3/22, 1st Floor, Janakpuri, New Delhi-110058</p>
            </div>
          </div>
          <div className="info-box">
            <Phone className="info-icon" />
            <div>
              <h5>PHONE</h5>
              <p>011 45 525 648<br/>011 45 520 699</p>
            </div>
          </div>
          <div className="info-box">
            <Mail className="info-icon" />
            <div>
              <h5>EMAIL</h5>
              <p>delhi@acil.co.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT BAR */}
      <div className="copyright-bar">
        <p>© 2026 GK Construction India. All Rights Reserved. Powered by <span>GKC</span></p>
      </div>
      <div className="hazard-strip"></div>
    </footer>
  );
};

export default Footer;