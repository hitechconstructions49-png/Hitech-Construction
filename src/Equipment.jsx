import React from 'react';
import './App.css';

const Equipment = () => {
  const equipmentData = [
    { id: 1, particulars: "Excavator -215/225", model: "2016-2025", nos: 30 },
    { id: 2, particulars: "Excavator -340", model: "2018", nos: 5 },
    { id: 3, particulars: "Excavator -140", model: "2020", nos: 5 },
    { id: 4, particulars: "Rock Breaker", model: "2016-2022", nos: 12 },
    { id: 5, particulars: "Rock Breaking Drill bit -115 and Compressor setup – 650CFM", model: "2022-2023", nos: 5 },
  ];

  return (
    <div className="equipment-page">
      {/* HEADER SECTION */}
      <section className="profile-header" style={{backgroundColor: '#eee'}}>
        <h1 style={{color: '#14213d'}}>Our Equipments</h1>
        <div className="decorative-line">
          <span className="line"></span>
          <span className="square"></span>
          <span className="line"></span>
        </div>
      </section>

      <div className="table-container">
        <table className="equipment-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Particulars</th>
              <th>Make/Model</th>
              <th>Nos.</th>
            </tr>
          </thead>
          <tbody>
            {equipmentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="particulars-cell">{item.particulars}</td>
                <td><span className="model-badge">{item.model}</span></td>
                <td className="nos-cell">{item.nos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Equipment;