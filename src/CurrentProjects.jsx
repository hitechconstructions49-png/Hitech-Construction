import React from 'react';
import './App.css';

const CurrentProjectsTable = ({ statusFilter }) => {
  const projectsData = [
    {
      details: "Engineering and Construction of Siriapalli Ash Pond – Lagoon , Jharusuguda",
      client: "Vedanta",
      amount: "11500",
      start: "14/05/2025",
      completion: "14/05/2027",
      status: "Work in progress"
    },
    {
      details: "Wagon tippler Civil work for the Bauxite Handling Plant required for 5MTPA at Vedanta Limited Lanjgarh odisha.",
      client: "Vedanta",
      amount: "15151",
      start: "30/10/2022",
      completion: "31/03/2026",
      status: "Work in progress"
    },
    {
      details: "Pilling work for NTPC Farakka Project super thermal power station (3x200mw, 2x500mw & 1x500mw), FGD Package",
      client: "MPW",
      amount: "4685",
      start: "22/02/2025",
      completion: "30/04/2026",
      status: "Work in progress"
    },
    {
      details: "FGD Package for Civil work and Pilling Work for NTPC Mauda Super Thermal Power Plant (2*660MW)",
      client: "MHPS (Mitsubishi)",
      amount: "7453",
      start: "19/02/2019",
      completion: "31/03/2026",
      status: "Work in progress"
    },
    {
      details: "Constructions of Ash divide bund for Solapur – Lagoon -1, 2 and 3, NTPC Solapur",
      client: "NTPC",
      amount: "1715",
      start: "01/06/21",
      completion: "31/05/26",
      status: "Work in progress"
    }
  ];

  return (
    <div className="projects-page">
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d', paddingTop: '30px'}}>{statusFilter} Projects</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      <div className="table-container">
        <table className="industrial-table">
          <thead>
            <tr>
              <th>Work Details</th>
              <th>Clients</th>
              <th>Amount (Lakh)</th>
              <th>Start Date</th>
              <th>Completion</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project, index) => (
              <tr key={index}>
                <td className="work-details-cell">{project.details}</td>
                <td className="client-cell">
                  <span className="client-tag">{project.client}</span>
                </td>
                <td className="amount-cell">₹ {project.amount}</td>
                <td>{project.start}</td>
                <td>{project.completion}</td>
                <td>
                  <span className={`status-badge ${project.status.toLowerCase().replace(/\s/g, '-')}`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentProjectsTable;