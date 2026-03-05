import React from 'react';
import './App.css';

const Awards = () => {
  const awardsData = [
    { id: 1, title: "Vedanta Award", img: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=500" },
    { id: 2, title: "Letter of Appreciation From NTPC", img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=500" },
    { id: 3, title: "Tata Steel Long Certificate", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500" },
    { id: 4, title: "Employee of the Year", img: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=500" },
  ];

  return (
    <div className="awards-page">
      {/* HEADER SECTION */}
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Awards & Certificates</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      <div className="awards-container">
        <div className="awards-grid">
          {awardsData.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-img-wrapper">
                <img src={award.img} alt={award.title} />
              </div>
              <p className="award-caption">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;