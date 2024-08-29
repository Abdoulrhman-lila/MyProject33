import "./Profile.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [currentUser, setCurrentUser] = useState(null); // Initialize state for the user data
  const [appointments, setAppointments] = useState([]); // Initialize state for the appointments
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle any error
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected image file
  const [previewImage, setPreviewImage] = useState(null); // State to preview the image
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve the user from local storage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/getUserDetails', { id: user.id }); // Fetch user data from the endpoint
        setCurrentUser(response.data.user); // Update the state with the fetched user data
        setAppointments(response.data.appointments); // Update the state with the fetched appointments
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchUserData();
  }, [user.id]); // Dependency array includes user.id to avoid unnecessary fetches

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file)); // Create a preview of the image
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('id', user.id);
    formData.append('picture', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/updateUserImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Update the current user data with the new picture
      setCurrentUser(response.data.user);
      setPreviewImage(null); // Clear preview after upload
      alert('Image uploaded successfully');
    } catch (err) {
      setError(err.message);
      alert('Error uploading image');
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Render a loading message while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Render an error message if the fetch fails
  }

  if (!currentUser) {
    return <p>No user data available.</p>; // Render a message if no user data is available
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={'../../../public/'+currentUser.picture} alt={currentUser.f_name} className="profile-picture" />
          <label htmlFor="file-upload" className="upload-button">
            +
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
        </div>
        <div className="profile-info">
          <h2>{currentUser.f_name} {currentUser.l_name}</h2>
          <p><strong>Phone:</strong> {currentUser.phone}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>
      </div>

      {previewImage && (
        <button onClick={handleFileUpload}>Save Image</button>
      )}

      {appointments && appointments.length > 0 ? (
        <div className="appointment-info">
          <h3>Appointment Schedule</h3>
          <ul>
            {appointments.map(appointment => (
              <li key={appointment.id}>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Status:</strong> {appointment.status}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
}

export default Profile;
