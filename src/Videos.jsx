import React from 'react';
import './App.css';

const Videos = () => {
  const videoData = [
    { id: 1, title: "Dahej Manufacturing Site", url: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    { id: 2, title: "FGD Civil Construction", url: "https://www.youtube.com/embed/vAnVl0id3_E" },
    { id: 3, title: "Piling Work Demo", url: "https://www.youtube.com/embed/5F2v_2Y_j-k" },
    { id: 4, title: "Ash Handling System", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "Safety Protocol Overview", url: "https://www.youtube.com/embed/vAnVl0id3_E" },
    { id: 6, title: "Project Site Progress", url: "https://www.youtube.com/embed/ScMzIvxBSi4" },
  ];

  return (
    <div className="videos-page">
      {/* HEADER SECTION */}
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Our Project Videos</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      <div className="videos-container">
        <div className="video-grid">
          {videoData.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-wrapper">
                <iframe 
                  src={video.url} 
                  title={video.title} 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info" style={{backgroundColor: '#1a1a1a', padding: '20px'}}>
                <h3 style={{color: '#FF6B00', fontSize: '1.1rem', margin: '0'}}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;