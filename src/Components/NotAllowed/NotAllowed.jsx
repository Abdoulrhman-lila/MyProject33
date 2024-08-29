// src/NotAllowed.js

import React from 'react';
import './NotAllowed.css';
import { Link } from 'react-router-dom';

function NotAllowed() {
    return (
        <div className="not-allowed-container">
            <div className="not-allowed-message">
                <h1>You are not allowed to add new property</h1>
                <p>Please contact the administrator if you believe this is an error.</p>
                <Link to="/" className="home-link">Go Back to Home</Link>
            </div>
        </div>
    );
}

export default NotAllowed;
