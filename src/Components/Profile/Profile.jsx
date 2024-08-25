import "./Profile.css"
import React, { useState } from 'react';


const users = [
  {
    name: 'John Doe',
    profilePicture: 'banner-01.jpg',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    appointmentData: {
      date: '2023-05-15',
      time: '10:00 AM',
      propertyAddress: '123 Main St, Anytown USA'
    }
  },
  {
    name: 'Jane Smith',
    profilePicture: 'banner-02.jpg',
    phoneNumber: '987-654-3210',
    email: 'jane.smith@example.com',
    appointmentData: {
      date: '2023-05-16',
      time: '2:00 PM',
      propertyAddress: '456 Oak Rd, Anytown USA'
    }
  },
  {
    name: 'Bob Johnson',
    profilePicture: 'banner-03.jpg',
    phoneNumber: '555-123-4567',
    email: 'bob.johnson@example.com',
    appointmentData: {
      date: '2023-05-17',
      time: '9:30 AM',
      propertyAddress: '789 Elm St, Anytown USA'
    }
  }
];






function Profile() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);


  const handlePrevUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };


  const handleNextUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
  };

  const currentUser = users[currentUserIndex];


  return (
    <div className="profile-container">
       <div className="profile-header">
        <img src={`/${currentUser.profilePicture}`} alt={currentUser.name} className="profile-picture" />
        <div className="profile-info">
          <h2>{currentUser.name}</h2>
          <p><strong>Phone:</strong> {currentUser.phoneNumber}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>
      </div>
      <div className="appointment-info">
        <h3>Appointment Schedule</h3>
        <p><strong>Date:</strong> {currentUser.appointmentData.date}</p>
        <p><strong>Time:</strong> {currentUser.appointmentData.time}</p>
        <p><strong>Property Address:</strong> {currentUser.appointmentData.propertyAddress}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevUser}>Previous User</button>
        <button onClick={handleNextUser}>Next User</button>
      </div>
    </div>
  )
}

export default Profile
