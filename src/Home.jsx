import React, { useState, useEffect } from 'react';
import { Award, Shield, Target, HardHat, Users, Leaf, Check, Plus, Minus, ArrowLeft, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
      title: "SOLUTIONS FOR CONSTRUCTION",
      subtitle: "WELCOME TO Hi-Tech CONSTRUCTION"
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
      title: "INNOVATIVE TECHNOLOGY",
      subtitle: "BUILDING THE FUTURE"
    },
    {
      url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=2070",
      title: "PREMIUM WATERPROOFING",
      subtitle: "PROTECTING YOUR STRUCTURES"
    }
  ];

  const [projectIndex, setProjectIndex] = useState(0);

  const projects = [
    {
      title: "DAHEJ MANUFACTURING SYSTEM",
      desc: "State-of-the-art manufacturing Hi-Tech Constructions India Private Limited construction in Dahej, Gujarat with advanced infrastructure and utilities.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"
    },
    {
      title: "FGD CIVIL CONSTRUCTION",
      desc: "FGD Package for Civil work and Pilling Work for NTPC Mauda Super Thermal Power Plant (2*660MW).",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
    },
    {
      title: "PILING WORK CONSTRUCTION",
      desc: "Piling work for NTPC Farakka Project super thermal power station (3x200mw, 2x500mw & 1x500mw), FGD Package.",
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=800"
    },
    {
      title: "DIVIDE BUND AT ASH POND",
      desc: "Constructions of Divide Bund at Ash Pond, Talwandi Sabo Power Limited, Mansa, Punjab.",
      img: "https://images.unsplash.com/photo-1590486803833-ffc475d2745a?q=80&w=800"
    }
  ];

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1 >= projects.length - 2 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="main-wrapper">

      {/* HERO SECTION */}
      <header className="hero-section" style={{ backgroundImage: `url(${slides[currentSlide].url})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="subtitle">{slides[currentSlide].subtitle}</span>
            <h1>{slides[currentSlide].title.split(' ')[0]} <br /> 
                <span className="highlight">{slides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p>Specialized in Damp Proofing, Concrete Admixtures, and Waterproofing Systems.</p>
            <div className="hero-btns">
              <button className="btn-solid">Read More</button>
              <button className="btn-outline">Contact Us</button>
            </div>
            <div className="slide-dots">
              {slides.map((_, index) => (
                <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MISSION AND VISION */}
      <section className="mission-vision-section" style={{paddingBottom: '10px'}}>
        <div className="section-header">
          <h2 style={{ color: '#14213d' }}>OUR MISSION AND VISION</h2>
          <div className="decorative-line">
            <span className="line"></span>
            <span className="square"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="mission-vision-grid">
          <div className="mv-card">
            <h3 style={{ color: '#ff6b00' }}>Our Mission</h3>
            <p style={{color: '#14213D'}}>Providing superior-quality construction services that exceed client expectations through safety, sustainability, and innovation.</p>
          </div>
          <div className="mv-card">
            <h3 style={{ color: '#ff6b00' }}>Our Vision</h3>
            <p style={{color: '#14213D'}}>To be the leading construction company recognized for innovation and integrity, shaping the future of modern infrastructure.</p>
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
        <section className="video-section">
        <div className="section-header">
            <h2 style={{ color: '#14213D' }}>PROJECT VIDEOS</h2>
            <div className="decorative-line">
            <span className="line"></span>
            <span className="square"></span>
            <span className="line"></span>
            </div>
        </div>

        <div className="video-grid">
            {/* Video 1 - Foundation & Structural */}
            <div className="video-card">
            <div className="video-wrapper">
                <iframe 
                src="https://www.youtube.com/embed/ScMzIvxBSi4" 
                title="Structural Construction" 
                frameBorder="0" 
                allowFullScreen
                ></iframe>
            </div>
            </div>

            {/* Video 2 - High Rise Technology */}
            <div className="video-card">
            <div className="video-wrapper">
                <iframe 
                src="https://www.youtube.com/embed/vAnVl0id3_E" 
                title="Building Technology" 
                frameBorder="0" 
                allowFullScreen
                ></iframe>
            </div>
            </div>

            {/* Video 3 - Industrial Waterproofing */}
            <div className="video-card">
            <div className="video-wrapper">
                <iframe 
                src="https://www.youtube.com/embed/5F2v_2Y_j-k" 
                title="Waterproofing Demo" 
                frameBorder="0" 
                allowFullScreen
                ></iframe>
            </div>
            </div>
        </div>

        {/* Button moved outside grid for easier centering */}
        <div className="view-more-container">
            <button className="btn-view-more" onClick={() => navigate('/videos')}>VIEW MORE VIDEOS</button>
        </div>
        </section>

      {/* CERTIFICATIONS */}
      <section className="certifications-section">
        <div className="cert-overlay">
          <div className="section-header-left">
            <h2 className="text-white">OUR CERTIFICATIONS</h2>
            <div className="decorative-line-left"><span className="square"></span><span className="line"></span></div>
          </div>
          <div className="cert-grid">
            <div className="cert-item"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/ISO_9001-2015.png" alt="ISO" /></div>
            <div className="cert-item"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/ISO_45001_Logo.png" alt="ISO" /></div>
            <div className="cert-item"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/ISO_14001_Logo.png" alt="ISO" /></div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-us">
        <div className="section-header">
          <h2 style={{ color: '#14213d'}}>WHY CHOOSE US</h2>
          <div className="decorative-line"><span className="line"></span><span className="square"></span><span className="line"></span></div>
        </div>
        <div className="choices-grid">
          <div className="choice-card"><Award className="choice-icon" />
            <h3 style={{color: "#14213d"}}>BEST QUALITY</h3>
            <p style={{color: "#ff6b00"}}>Excellence in every project.</p></div>
          <div className="choice-card"><Target className="choice-icon" />
            <h3 style={{color: "#14213d"}}>INTEGRITY</h3>
            <p style={{color: "#ff6b00"}}>Guided by honesty and ethics.</p></div>
          <div className="choice-card"><Shield className="choice-icon" />
            <h3 style={{color: "#14213d"}}>STRATEGY</h3>
            <p style={{color: "#ff6b00"}}>Smart solutions for optimal results.</p></div>
          <div className="choice-card"><HardHat className="choice-icon" />
            <h3 style={{color: "#14213d"}}>SAFETY</h3>
            <p style={{color: "#ff6b00"}}>Your security is our priority.</p></div>
          <div className="choice-card"><Users className="choice-icon" />
            <h3 style={{color: "#14213d"}}>COMMUNITY</h3>
            <p style={{color: "#ff6b00"}}>Positive impact on society.</p></div>
          <div className="choice-card"><Leaf className="choice-icon" />
            <h3 style={{color: "#14213d"}}>SUSTAINABILITY</h3>
            <p style={{color: "#ff6b00"}}>Eco-friendly future development.</p></div>
        </div>
      </section>

      {/* AWESOME FACTS */}
        <section className="facts-section">
        <div className="facts-overlay">
            <div className="section-header">
            <h2 className="text-white" style={{color: "#14213d"}}>AWESOME FACTS</h2>
            <div className="decorative-line"><span className="line"></span><span className="square"></span><span className="line"></span></div>
            <p className="text-white" style={{color: "#ff6b00"}}>Our dedication has built a strong workforce and a history of success.</p>
            </div>
            <div className="facts-grid">
            <div className="fact-item">
                <div className="fact-icon-circle"><HardHat /></div>
                <div className="fact-info">
                <span className="count">185 +</span>
                <p>PROJECTS COMPLETED</p>
                </div>
            </div>
            <div className="fact-item">
                <div className="fact-icon-circle"><Users /></div>
                <div className="fact-info">
                <span className="count">185 +</span>
                <p>HAPPY CLIENTS</p>
                </div>
            </div>
            <div className="fact-item">
                <div className="fact-icon-circle"><Users /></div>
                <div className="fact-info">
                <span className="count">1000 +</span>
                <p>WORKERS EMPLOYED</p>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* FAQ & MARKET SECTORS */}
        <section className="faq-market-section">
        <div className="faq-container">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-item active">
            <div className="faq-question">WHEN WAS Hi-Tech FOUNDED? <Minus /></div>
            <div className="faq-answer" >Hi-Tech was founded on 16/10/1995 with a vision for quality construction.</div>
            </div>
            <div className="faq-item active">
            <div className="faq-question">WHAT DOES Hi-Tech OFFER? <Plus /></div>
            </div>
        </div>
        
        <div className="market-sectors">
            <h3 style={{color: "#fff"}}>Market Sectors</h3>
            <div className="sector-bar">
            <div className="sector-info" style={{color: "#fff"}}><span>Industrial</span><span>95%</span></div>
            <div className="progress-bg" style={{color: "#fff"}}><div className="progress-fill" style={{width: '95%'}}></div></div>
            </div>
            <div className="sector-bar">
            <div className="sector-info" style={{color: "#fff"}}><span>Refinery</span><span>85%</span></div>
            <div className="progress-bg" style={{color: "#fff"}}><div className="progress-fill" style={{width: '85%'}}></div></div>
            </div>
            <div className="sector-bar">
            <div className="sector-info" style={{color: "#fff"}}><span>Power Plant</span><span>90%</span></div>
            <div className="progress-bg" style={{color: "#fff"}}><div className="progress-fill" style={{width: '90%'}}></div></div>
            </div>
        </div>
        </section>

        {/* RECENT PROJECTS */}
        <section className="recent-projects">
            <div className="section-header">
                <h2 style={{color: "#14213d"}}>OUR RECENT COMPLETED PROJECTS</h2>
                <div className="decorative-line">
                <span className="line"></span>
                <span className="square"></span>
                <span className="line"></span>
                </div>
                <p className="section-subtitle" style={{color: "#ff6b00"}}>
                At Hi-Tech, every project we deliver stands as a symbol of trust, quality, and engineering excellence.
                </p>
            </div>

            <div className="project-slider-wrapper">
                <div 
                className="project-track" 
                style={{ transform: `translateX(-${projectIndex * (100 / 3.1)}%)` }}
                >
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                    <div className="project-img-container">
                        <img src={project.img} alt={project.title} />
                    </div>
                    <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="slider-nav">
                <button onClick={prevProject} className="nav-btn"><ChevronLeft /></button>
                <button onClick={nextProject} className="nav-btn active"><ChevronRight /></button>
            </div>
            
            {/* Small orange/grey indicators below arrows */}
            <div className="slider-dots">
                <span className={projectIndex === 0 ? "dot active" : "dot"}></span>
                <span className={projectIndex !== 0 ? "dot active" : "dot"}></span>
            </div>
            </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
        <div className="section-header" style={{backgroundColor: '#eee'}}>
            <h2 className="text-white" style={{color: "#14213d", backgroundColor: '#eee'}}>WHAT OUR CLIENTS SAY</h2>
            <div className="decorative-line">
                <span className="line"></span>
                <span className="square"></span>
                <span className="line"></span>
            </div>
        </div>

        <div className="testimonial-grid">
            {/* Testimonial 1 */}
            <div className="testi-card">
            <Quote className="quote-icon" />
            <p>Hi-Tech delivered excellent quality work within the required time and budget. Their team is professional, highly skilled, and committed to client satisfaction.</p>
            <h5>Mr. Prakashchandra M. Prajapati</h5>
            <span>Deputy Manager | Elecon Engineering Company Ltd.</span>
            </div>

            {/* Testimonial 2 */}
            <div className="testi-card">
            <Quote className="quote-icon" />
            <p>Hi-Tech is highly reliable and efficient. They maintain excellent workmanship, timely completion, and keep great communication throughout the project lifecycle.</p>
            <h5>Mr. Mithilesh Kumar</h5>
            <span>Project Head (Civil) | GE Power India Limited</span>
            </div>

            {/* Testimonial 3 */}
            <div className="testi-card">
            <Quote className="quote-icon" />
            <p>A pioneer construction company for works of schedule with quality and safety. We are pleased with their technical expertise and T&P to ensure end delivery.</p>
            <h5>Mr. Heera Ram Chaudhary</h5>
            <span>AGM | National Thermal Power Corporation (NTPC)</span>
            </div>
        </div>
        </section>
    </div>
  );
};

export default Home;