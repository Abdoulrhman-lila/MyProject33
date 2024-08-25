import "./Admine.css";
import React, { useState, useEffect } from 'react';

function Admine() {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  const fetchPendingRequests = () => {
    console.log('Fetching pending requests...');
    fetch('/api/pending-requests')
      .then(response => response.json())
      .then(data => {
        console.log('Received data:', data);
        setPendingRequests(data);
      });
  };

  const approveRequest = (requestId) => {
    console.log('Approving request:', requestId);
    fetch(`/api/approve-request/${requestId}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(() => {
        console.log('Request approved!');
        fetchPendingRequests();
      });
  };

  const rejectRequest = (requestId) => {
    console.log('Rejecting request:', requestId);
    fetch(`/api/reject-request/${requestId}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(() => {
        console.log('Request rejected!');
        fetchPendingRequests();
      });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <h2 className="pending-requests-title">Pending Requests</h2>
      <table className="pending-requests-table">
        <thead>
          <tr>
            <th className="table-header">ID</th>
            <th className="table-header">Property Address</th>
            <th className="table-header">Requestor</th>
            <th className="table-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingRequests.map(request => (
            <tr key={request.id} className="table-row">
              <td className="table-cell">{request.id}</td>
              <td className="table-cell">{request.propertyAddress}</td>
              <td className="table-cell">{request.requestor}</td>
              <td className="table-cell">
              </td>
            </tr>
          ))}
        </tbody>
        <button className="approve-button" onClick={() => approveRequest(request.id)}>Approve</button>
        <button className="reject-button" onClick={() => rejectRequest(request.id)}>Reject</button>
      </table>
    </div>
  )
}

export default Admine;