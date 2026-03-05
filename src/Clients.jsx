import React from 'react';
import './App.css';

const Clients = () => {
  const majorLogos = [
    { name: "NTPC", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/NTPC_Limited_Logo.svg/1200px-NTPC_Limited_Logo.svg.png" },
    { name: "BHEL", img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/BHEL_logo.svg/1200px-BHEL_logo.svg.png" },
    { name: "Vedanta", img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Vedanta_Resources_logo.svg/1200px-Vedanta_Resources_logo.svg.png" },
    { name: "Reliance", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png" },
    { name: "Tata Steel", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Tata_Steel_Logo.svg/1200px-Tata_Steel_Logo.svg.png" },
    { name: "BGR Energy", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/BGR_Energy_Systems_logo.svg/1200px-BGR_Energy_Systems_logo.svg.png" }
  ];

  const fullClientList = [
    "ABAN CONSTRUCTIONS PVT LTD", "BHARAT HEAVY ELECTRICALS LTD (BHEL)", "BGR ENERGY LTD.", 
    "BRIDGE & ROOF CO. (I) LTD", "DODSAL LTD", "DOOSAN POWER SYSTEM INDIA LIMITED",
    "ELECON EPC", "GAMMON INDIA LTD", "GANNON DUNKERLEY CO. LTD",
    "GE POWER INDIA PVT LIMITED", "GUJARAT TORRENT ENERGY CORPORATION LTD", "HINDUSTAN OIL EXPLORATION CO LTD",
    "INDO GULF CORPORATION LTD", "LARSEN & TOUBRO LTD (L&T)", "NATIONAL THERMAL POWER CORPORATION (NTPC)",
    "NORTH WESTERN RAILWAYS", "ORIENTAL CIVIL ENGINEERING CO. LTD", "PREMIER OIL CACHAR BV",
    "PUNJ LLOYD LTD", "RELIANCE PETROLEUM LTD", "SIMPLEX INFRASTRUCTURE LTD",
    "SUZLON INFRASTRUCTURE LTD", "TELANGANA STATE POWER GENERATION CORPORATION", "THYSSENKRUPP INDUSTRIES INDIA PVT LTD",
    "VEDANTA", "WELSPUN GROUP"
  ];

  return (
    <div className="clients-page">
      {/* HEADER */}
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Our Major Clients</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
        <p className="section-subtitle" style={{color: '#14213d'}}>We proudly collaborate with leading developers, businesses, and public agencies.</p>
      </section>

      {/* LOGO MARQUEE SECTION */}
      <section className="logo-showcase-section">
        <div className="logo-grid-premium">
          {majorLogos.map((logo, idx) => (
            <div key={idx} className="premium-logo-card" style={{color: '#14213d'}}>
              <img src={logo.img} alt={logo.name} />
            </div>
          ))}
        </div>
      </section>

      {/* FULL CLIENT LIST SECTION */}
      <section className="full-client-list">
        <div className="list-container">
          <h3>Extensive Partnership Network</h3>
          <div className="client-column-grid">
            {fullClientList.map((client, idx) => (
              <div key={idx} className="client-list-item">
                <span className="bullet">▶</span> {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;