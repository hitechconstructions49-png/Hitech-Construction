import React from 'react';
import './App.css';

const CompanyProfile = () => {
  return (
    <div className="profile-page">
      {/* PAGE HEADER */}
      <section className="profile-header">
        <h1>Company Profile</h1>
      </section>

      <div className="profile-container">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="profile-text-content">
          <section className="md-desk">
            <h2>Managing Director Desk</h2>
            <div className="decorative-line-left">
              <span className="square"></span>
              <span className="line"></span>
            </div>
            <p>
              Incorporated our company 30 years ago when we had a mission for "Committed to Excellence". 
              With every Project we Complete, we would be building a name. With every new project 
              building something that we hold very dear to ourselves.
            </p>
            <p>
              And to build that, we knew we would have to build with values. This is why with over 185 Site 
              over 30 years we have had but one blueprint, one mantra for success: Build not with bricks, mortar, 
              steel or glass but with values that add worth.
            </p>
            <p><strong>Our Mission is to achieve work with Safety First.</strong></p>
          </section>

          <section className="company-info">
            <h2>Hi-Tech Constructions India Private Limited</h2>
            <p>
              One of the fastest growing companies in the field of Engineering of Ash Dyke, construction of Civil work, 
              Pilling, Ash handling plants, Earthwork, Earth retention, having Registered Office at New Delhi 
              and Branch at Dahej (Gujarat).
            </p>
            <p>
              Late Sh. Gopal Singh - Managing Director of the company, was sole proprietor from the year 1989 to 1995.
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN: CERTIFICATIONS */}
        <div className="profile-sidebar">
          <h3>Our Certifications</h3>
          <div className="cert-list">
            <div className="cert-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/ISO_9001-2015.png" alt="ISO 9001" />
              <p>ISO 9001:2015 Quality Management System</p>
            </div>
            <div className="cert-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/ISO_45001_Logo.png" alt="ISO 45001" />
              <p>ISO 45001:2018 Occupational Health & Safety</p>
            </div>
            <div className="cert-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/ISO_14001_Logo.png" alt="ISO 14001" />
              <p>ISO 14001:2015 Environmental Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;