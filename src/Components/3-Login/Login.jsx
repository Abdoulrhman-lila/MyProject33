import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/home");
    } else {
      setError("Please fill in all required fields correctly.");
    }
  };

  const validateForm = () => {
    if (!userName || !password) {
      return false; // If any required field is empty, return false
    }
    return true; // If all required fields are valid, return true
  };

  return (
    <>
      <div className="header">
        <form className="form card" onSubmit={handleSubmit}>
          <div className="card_header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
            </svg>
            <h1 className="form_heading">Sign <span>in</span></h1>
          </div>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input className="input" name="username" type="text" placeholder="Username" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input className="input" name="user_password" type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div className="error">{error}</div>}
          <div className="field">
            <button className="button">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login