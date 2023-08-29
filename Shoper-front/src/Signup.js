import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext'; // Adjust the path to your UserContext
import { Link } from 'react-router-dom';
import './index.css';

const SignupForm = () => {
  const { signup } = useContext(UserContext); // Access the signup function from the context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password); // Call the signup function from the context
  };

  return (
    <div className="login-container signup-container" >
       <div className="center-login" >
      <h2 className="login-title" >Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
        </label>
        <br />
        <button className="btn-login" type="submit">Sign Up</button>
      </form>
      <p className="signup-link">
        Already have an account? <Link to="/login">Log in here</Link>.
      </p>
      </div>    </div>
  );
};

export default SignupForm;
