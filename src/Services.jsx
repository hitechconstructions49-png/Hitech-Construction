import React from 'react';
import './App.css';

const Services = () => {
  const servicesData = [
    {
      title: "Ash Dyke Construction",
      description: "Hi-Tech Construction is a leader in the engineering and construction of Ash Dykes and Lagoons. With a track record of completing over 185 sites, we specialize in Earthwork, Earth retention, and structural lining that ensures environmental safety and long-term durability for power plants.",
      whyUs: "Our expertise in soil stabilization and specialized lining techniques makes us the preferred partner for major clients like NTPC and Vedanta.",
      img1: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
      img2: "https://images.unsplash.com/photo-1590486803833-ffc475d2745a?q=80&w=800"
    },
    {
      title: "Piling & Foundation Work",
      description: "We provide high-capacity piling work construction for super thermal power stations and heavy industrial structures. Our fleet of advanced hydraulic rigs and experienced engineering teams allow us to execute deep foundation projects in complex soil conditions with precision.",
      whyUs: "We own a massive fleet of TATA Hitachi and Volvo equipment, ensuring zero downtime and meeting aggressive project timelines without compromising structural integrity.",
      img1: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
      img2: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=800"
    }
  ];

  return (
    <div className="services-page">
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Our Specialized Services</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="service-text">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <div className="why-us-box">
                <h4>Why Choose Hi-Tech For This?</h4>
                <p style={{color: '#14213d'}}>{service.whyUs}</p>
              </div>
            </div>
            <div className="service-images">
              <div className="img-frame primary-img">
                <img src={service.img1} alt={service.title} />
              </div>
              <div className="img-frame secondary-img">
                <img src={service.img2} alt={`${service.title} detail`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;