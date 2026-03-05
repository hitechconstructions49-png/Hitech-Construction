import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import './App.css';

const Contact = () => {
  const enquiryFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSek_J_aFN-wsyE5zMwZ37Y4sOlABQYuTqxZfmDU-y3aQT17Yw/viewform";

  return (
    <div className="contact-page">
      {/* HEADER SECTION */}
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Contact Us</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      {/* QUICK CONTACT BLOCKS */}
      <section className="contact-info-grid">
        <div className="contact-block">
          <Phone className="contact-icon" size={32} />
          <h3>Phone number</h3>
          <p><strong>Delhi:</strong> +91 45520699, 45525648</p>
          <p><strong>Gujarat:</strong> 026422-27323, 02642-245232</p>
        </div>

        <div className="contact-block">
          <Mail className="contact-icon" size={32} />
          <h3>Email address</h3>
          <p>delhi@acil.co.in</p>
          <p>bharuch@acil.co.in</p>
        </div>

        <div className="contact-block">
          <MapPin className="contact-icon" size={32} />
          <h3>Address info</h3>
          <p><strong>Head office:</strong> A3/22, 1st floor, Janakpuri, New Delhi-110058</p>
        </div>
      </section>

      {/* MAP AND FORM SECTION */}
      <section className="map-form-section">
        <div className="location-container">
          <div className="section-title-left">
            <h2 style={{color:'#14213d'}}>LOCATION</h2>
            <div className="decorative-line-left">
               <span className="square"></span>
               <span className="line"></span>
            </div>
          </div>
          {/* Static Map Image Placeholder */}
          <div className="map-wrapper">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.146608580556!2d77.08643537613045!3d28.625368384394015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04af08365267%3A0xc496667a42617f0b!2sA-3%2F22%2C%20Block%20A3%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1709555000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>

        <div className="enquiry-container">
          <div className="section-title-left">
            <h2 style={{color:'#14213d'}}>ENQUIRY FORM</h2>
            <div className="decorative-line-left">
               <span className="square"></span>
               <span className="line"></span>
            </div>
          </div>
          <div className="form-notice-box">
            <p style={{color:'#14213d'}}>Please click the button below to fill out our enquiry form. It will open in a new tab.</p>
            <a 
              href={enquiryFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-open-form"
            >
              Open Enquiry Form <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;