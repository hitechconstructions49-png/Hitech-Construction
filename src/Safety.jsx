import React from 'react';
import { ShieldCheck, Download, Eye, HardHat } from 'lucide-react';
import './App.css';

const Safety = () => {
  const safetyCertificates = [
    { id: 1, title: "PPEs Procedure", img: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=400" },
    { id: 2, title: "Safety Certificate - Vedanta", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400" },
    { id: 3, title: "Safety Certificate - Jubilant", img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=400" }
  ];

  return (
    <div className="safety-page">
      {/* HEADER */}
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Health, Safety & Environment (HSE)</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      {/* SAFETY ACTION GALLERY */}
      <section className="safety-gallery">
        <div className="safety-grid">
           <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600" alt="Mass Meeting" />
           <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600" alt="Site Safety" />
           <img src="https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=600" alt="PPE Inspection" />
        </div>
      </section>

      {/* HSE POLICY SECTION */}
      <section className="hse-policy-section">
        <div className="policy-box">
          <h2>Aneja Constructions India Private Limited HSE POLICY</h2>
          <p style={{color:"#14213d"}}>Our HSE Policy is project oriented. We strive to achieve and meet HSE requirements of our clients in both Public as well as Private sectors during project implementation.</p>
          <div className="achievement-highlight">
             <ShieldCheck color="#FF6B00" size={40} />
             <div>
               <h4>3,633,333 Man Hours</h4>
               <p style={{color:"#14213d"}}>Lost Time Accident Free (LTA Free) Site Management during past 15 years.</p>
             </div>
          </div>
          <p style={{color:"#14213d"}}>We are conscious of our responsibility towards mother earth and environment. We work in an environment while encouraging our employees to minimize use of paper and optimize carbon emission.</p>
        </div>
      </section>

      {/* PPE & CERTIFICATES */}
      <section className="safety-downloads">
        <h3 style={{color:"#FF6B00"}}>PPE's Procedure & Safety Certificates</h3>
        <div className="cert-download-grid">
          {safetyCertificates.map(cert => (
            <div key={cert.id} className="safety-cert-card">
              <img src={cert.img} alt={cert.title} />
              <h4 style={{color:"#14213d"}}>{cert.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ISO COMPLIANCE */}
      <section className="iso-safety">
        <div className="iso-content">
          <div className="iso-brand">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/ISO_45001_Logo.png" alt="ISO 45001" />
             <div className="safety-first-badge">SAFETY FIRST</div>
          </div>
          <div className="iso-text">
            <p style={{color:"#14213d"}}>Aneja Constructions India Private Limited has adopted ISO 45001:2018 standards for International Organisation for Standardisation.</p>
            <p style={{color:"#14213d"}}>ISO 45001 provides organizations with a framework to manage risks, reduce workplace accidents, and demonstrate compliance with international safety standards.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;