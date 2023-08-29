import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    // You can add other user-related data here
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', user.isLoggedIn);
  }, [user.isLoggedIn]);


  // Function to handle user login
  const login = async (email, password) => {
    try {
      // const response = await axios.post('https://shoperstop.onrender.com/auth/signin', { email, password });
      const response = await axios.post('http://localhost:5555/auth/signin', { email, password });
      const token = response.data.token;
      if (token) {
        // Set the token in localStorage
        localStorage.setItem('token', token);
        // Update the user state to reflect the user being logged in
        setUser({ ...user, isLoggedIn: true });
        toast.success('Login successful!');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      toast.error('Login Failed!');
    }
  };

  const logout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Update the user state to reflect the user being logged out
    setUser({ ...user, isLoggedIn: false });
    toast.success('logging out')
  };
  const signup = async (email, password) => {
    try {
      // const response = await axios.post('https://shoperstop.onrender.com/auth/signup', { email, password });
      const response = await axios.post('http://localhost:5555/auth/signup', { email, password });
      console.log('Signup successful:', response.data.message);
      toast.success('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error.response.data.message);
      toast.error('Signup failed. Please try again.');
    }
  };


  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
