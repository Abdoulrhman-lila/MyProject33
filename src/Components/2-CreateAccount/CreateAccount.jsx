import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  
const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 



  const handlePhoneInput = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      navigate("/home");
    } else {
      setError("Please fill in all required fields correctly.");
    }
  };

  
  const validateForm = ()=>{
    if(!firstName || !lastName || !email || !password || !phoneNumber ){
      return false;
    }
    else{
      return true;
    }
  }

  const handleReset = () => {
    setPhoneNumber("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    
    setError(null); 
  };

 

  return (
    <div className="container">
      <div className="form_area">
        <h1 className="title">
          Sign <span>Up</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="form_group">
            <label className="sub_title" htmlFor="firstName">
              First Name
            </label>
            <input
              placeholder="Enter your first name"
              className="form_style"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="lastName">
              Last Name
            </label>
            <input
              placeholder="Enter your last name"
              className="form_style"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              id="email"
              className="form_style"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="password"
              className="form_style"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="phone">
              Phone
            </label>
            <input
              placeholder="Enter your phone number"
              id="phone"
              className="form_style"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneInput}
              pattern="[0-9]*"
              required
            />
          </div>
         
          {error && <div className="error">{error}</div>}
          <div className="form-actions">
            <button type="submit" className="btn">
              Sign Up
            </button>
            <button type="button" className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
   
    </div>
  );
}

export default CreateAccount;