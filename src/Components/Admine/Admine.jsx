import "./Admine.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admine() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    console.log('Fetching users...');
    axios.get('http://127.0.0.1:8000/api/get_user') // Replace with your actual endpoint
      .then(response => {
        console.log('Received data:', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const toggleCanAdd = (userId, currentStatus) => {
    console.log('Toggling can_add for user:', userId);
    const updatedStatus = !currentStatus;

    axios.post(`http://127.0.0.1:8000/api/toggle-can-add`, {id:userId,can_add: updatedStatus }) // Replace with your actual endpoint
      .then(response => {
        console.log('User status updated!');
        fetchUsers(); // Refresh the user list
      })
      .catch(error => {
        console.error('Error updating user status:', error);
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
        <h1 className="admin-title">Admin Dashboard</h1>
        <h2 className="pending-requests-title">Users</h2>
        <table className="pending-requests-table">
          <thead>
            <tr>
              <th className="table-header">ID</th>
              <th className="table-header">Name</th>
              <th className="table-header">Email</th>
              <th className="table-header">User Type</th>
              <th className="table-header">Can Add</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="table-row">
                <td className="table-cell">{user.id}</td>
                <td className="table-cell">{user.f_name}</td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">{user.user_type}</td>
                <td className="table-cell">{user.can_add ? 'Yes' : 'No'}</td>
                <td className="table-cell">
                  <button
                    className="approve-button"
                    onClick={() => toggleCanAdd(user.id, user.can_add)}
                  >
                    {user.can_add ? 'Revoke' : 'Grant'}
                  </button>
                  <button
                    className="reject-button"
                    onClick={() => toggleCanAdd(user.id, user.can_add)}
                  >
                    {user.can_add ? 'Move Grant' : 'No Action'}
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

export default Admine;
