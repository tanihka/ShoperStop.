import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const {user, login } = useContext(UserContext); // Replace with your actual login function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the login function here
      await login(email, password);
      setError('');
    } catch (error) {
      setError('Invalid email or password');
    }
  };
  if (user.isLoggedIn) {
    return <p>Login Successful!</p>;
  }
  return (
    <div className="login-container">
           <div className="center-login">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id='email' />
        </label>
        <br />
        <label>
          Password:
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id='password' autoComplete="current-password"/>
        </label>
        <br />
        <button className="btn-login" type="submit">Login</button>
      </form>
      {error && <p  className="error-message">{error}</p>}
      <p className="signup-link">
        Don't have an account yet? <Link to="/signup">Sign up here</Link>.
      </p>
      </div>
    </div>
  );
};

export default Login;
