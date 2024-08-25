import "./Manager.css"; // Updated file name
import React, { useState, useEffect } from 'react';


const Manager = () => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [salesStats, setSalesStats] = useState({});

  return (
    <div className="manager-container"> 
      <header className="manager-header"> 
        <h1 className="manager-title"> 
          Manager Dashboard
        </h1>
      </header>

      <main className="manager-main"> 
        <section className="manager-section"> 
          <h2 className="manager-section-title"> 
            User List
          </h2>
          <div className="manager-user-list"> 
            {users.map((user) => (
              <div key={user.id} className="manager-user-item"> 
                <h3 className="manager-user-name"> 
                  {user.name}
                </h3>
                <p className="manager-user-email"> 
                  {user.email}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="manager-section"> 
          <h2 className="manager-section-title"> 
            Statistics
          </h2>
          <div className="manager-stats"> 
            <div className="manager-stat-item"> 
              <p className="manager-stat-label"> 
                Current Month Sales:
              </p>
              <p className="manager-stat-value"> 
                {salesStats.monthSales}
              </p>
            </div>
            <div className="manager-stat-item"> 
              <p className="manager-stat-label"> 
                Properties Published This Month:
              </p>
              <p className="manager-stat-value"> 
                {salesStats.propertiesPublished}
              </p>
            </div>
          </div>
        </section>

        <section className="manager-section"> 
          <h2 className="manager-section-title"> 
            Published Properties List
          </h2>
          <ul className="manager-property-list"> 
            {properties.map((property) => (
              <li key={property.id} className="manager-property-item"> 
                {property.title}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Manager; // Updated file name