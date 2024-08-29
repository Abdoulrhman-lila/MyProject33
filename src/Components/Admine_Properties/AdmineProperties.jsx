import "./AdmineProperties.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdmineProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = () => {
    console.log('Fetching properties...');
    axios.get('http://127.0.0.1:8000/api/popertyInformation') // Replace with your actual endpoint
      .then(response => {
        console.log('Received data:', response.data);
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  };

  const deleteProperty = (propertyId) => {
    console.log('Deleting property:', propertyId);

    axios.delete(`http://127.0.0.1:8000/api/delete_property`,{data:{id:propertyId}}) // Replace with your actual endpoint
      .then(response => {
        console.log('Property deleted!');
        fetchProperties(); // Refresh the property list
      })
      .catch(error => {
        console.error('Error deleting property:', error);
      });
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item"><a style={{color:"white",fontSize:17}} href="/admine">Grant Page</a> </li>
          <li className="sidebar-item"><a style={{color:"white",fontSize:17}} href="/AdmineProperties">Admine Properties</a> </li>
        </ul>
      </div>
      <div className="main-content">
        <h1 className="admin-title">Property Management</h1>
        <h2 className="pending-requests-title">Properties</h2>
        <table className="pending-requests-table">
          <thead>
            <tr>
           
              <th className="table-header">ID</th>
              <th className="table-header">area</th>
              <th className="table-header">Location</th>
              
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(property => (
              <tr key={property.id} className="table-row">
                
                <td className="table-cell">{property.id}</td>
                <td className="table-cell">{property.area}</td>
                <td className="table-cell">{property.location}</td>
               
                <td className="table-cell">
                  <button
                    className="reject-button"
                    onClick={() => deleteProperty(property.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdmineProperties;
