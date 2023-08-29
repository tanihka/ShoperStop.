import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { id, title, price, description, category, image } = product;

  const handleAddToCart = () => {
    if (!user.isLoggedIn) {
      // Redirect to login page if not logged in
      toast.error('Please login to add items to the cart.');
      history.push('/login');
      return;
    }
    addToCart(product);
  };
  const isLoggedIn = () => {
    // Implement your logic to check if the user is logged in
    // You might use a context or state to store login status
    // Return true if logged in, false if not
    return user.isLoggedIn;
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{price}$</p>
        <p>{description}</p>
        {isLoggedIn() ? (
          <button onClick={handleAddToCart}>Add to Cart</button>
        ) : (
          <button onClick={() => history.push('/login')}>
            Log in or Sign up to Add to Cart
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
