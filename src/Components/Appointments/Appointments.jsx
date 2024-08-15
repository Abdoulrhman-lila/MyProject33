import "./Appointments.css";
import React, { useState } from 'react';

function Appointments() {
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        property_id: '',
        date: '',
        status: ''
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
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="appointmentss">
            <h2>To book an appointment, fill in the <span>following fields:</span></h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}

export default Appointments;