import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // Using Link for proper routing
import './App.css';

const Navbar = () => {
  // Use a string state to track which menu is open: null, 'profile', or 'projects'
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="logo">GK <span>CONSTRUCTION</span></div>
      
      <div className="nav-menu">
        <Link to="/">Home</Link>
        
        {/* COMPANY PROFILE DROPDOWN */}
        <div 
          className="nav-item-dropdown"
          onMouseEnter={() => setActiveDropdown('profile')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropdown-btn">
            Company Profile <ChevronDown size={14} className={activeDropdown === 'profile' ? "rotate" : ""} />
          </button>
          
          <div className={`dropdown-content ${activeDropdown === 'profile' ? "show" : ""}`}>
            <Link to="/profile">Company Profile</Link>
            <Link to="/equipment">Equipment</Link>
            <Link to="/certificates">Certificates & Awards</Link>
            <Link to="/videos">Our Videos</Link>
          </div>
        </div>

        {/* PROJECTS DROPDOWN */}
        <div 
          className="nav-item-dropdown"
          onMouseEnter={() => setActiveDropdown('projects')}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropdown-btn">
            Projects <ChevronDown size={14} className={activeDropdown === 'projects' ? "rotate" : ""} />
          </button>
          
          <div className={`dropdown-content ${activeDropdown === 'projects' ? "show" : ""}`}>
            <Link to="/current-projects">Current Projects</Link>
            <Link to="/completed-projects">Completed Projects</Link>
          </div>
        </div>
        <Link to="/services">Services</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/safety">Safety</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;