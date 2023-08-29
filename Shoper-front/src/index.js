
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './Context/UserContext'; // Make sure you import the UserProvider
import { CartProvider } from './Context/CartContext'; // Make sure you import the CartProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>
  </Router>
);
