import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import CompanyProfile from './CompanyProfile';
import Equipment from './Equipment';
import Awards from './Awards';
import Videos from './Videos';
import CurrentProjectsTable from './CurrentProjects';
import CompletedProjectsTable from './CompletedProjects';
import Services from './Services';
import Clients from './Clients';
import Safety from './Safety';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar is outside Routes, so it stays on top of every page */}
        <Navbar />
        
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<CompanyProfile />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/certificates" element={<Awards />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/current-projects" element={<CurrentProjectsTable />} />
            <Route path="/completed-projects" element={<CompletedProjectsTable />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer is outside Routes, so it stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;