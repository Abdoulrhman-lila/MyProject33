import "./Appointments.css";
import React, { useState } from 'react';
import axios from 'axios';
function Appointments() {
    const user = JSON.parse(localStorage.getItem("user"));
    const p_id = JSON.parse(localStorage.getItem('p_id'));
    const [formData, setFormData] = useState({
        user_id:user.id,
        property_id: p_id,
        date: '',
        status: 'Pending' // Default status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Assuming user information and property_id are available
        const appointmentData = {
            ...formData,
            id: user ? user.id : '',  // Use user ID from local storage
            property_id: formData.property_id || 'default_property_id' // Adjust this as necessary
        };
        
        axios.post('http://127.0.0.1:8000/api/createAppointment', appointmentData)
            .then(response => {
                console.log('Appointment booked successfully:', response.data);
                // Handle successful response (e.g., show a success message or redirect)
            })
            .catch(error => {
                console.error('Error booking appointment:', error);
                // Handle error response (e.g., show an error message)
            });
    };

    return (
        <div className="appointmentss">
            <h2>To book an appointment, fill in the <span>following fields:</span></h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                     
                        required
                    />
                </label>
               
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}

export default Appointments;
