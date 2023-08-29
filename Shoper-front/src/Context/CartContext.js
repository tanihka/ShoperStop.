import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'


const CartContext = createContext();

const CartProvider = ({ children }) => {
   const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem(`cartItems_${user.userId}`);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateLocalStorage = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem(`cartItems_${user.userId}`, JSON.stringify(updatedCartItems));
  console.log(`${user.userId}`);
  
  };
  const clearUserCart = () => {
    setCartItems([]);
    localStorage.removeItem(`cartItems_${user.userId}`);
  };


  const addToCart = (product) => {
    if (!user.isLoggedIn) {
      // Handle logic when user is not logged in
      toast.error("Please login to add items to the cart.");
      console.log('Please log in or sign up to add to cart.');
      navigate('/login');
      return;
    }

    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      alert('Product is already added to cart');
      return;
    }

    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    updateLocalStorage(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    updateLocalStorage(updatedCartItems);
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    updateLocalStorage(updatedCartItems);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    updateLocalStorage(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const getTotalTimesAdded = () => {
    return cartItems.length;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  useEffect(() => {
    if (!user.isLoggedIn) {
      clearUserCart();
    }
  }, [user.isLoggedIn]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
       
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getTotalTimesAdded,
        getTotalPrice,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
