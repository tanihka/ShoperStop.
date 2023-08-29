// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'
import { MdDeleteOutline } from 'react-icons/md'
import { BiPlus, BiMinus } from 'react-icons/bi'

const CartItems = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
        <div>
          {cartItems.map((item) => (
            <div className='cartCard' key={item.id}>
              <img src={item.image} alt=' '></img>
              <div>
                <h3>{item.title}</h3>
                <div className='bottomBtns'>
                  <div className='quantityBtn'>
                    <button onClick={() => decreaseQuantity(item.id)}><BiMinus /></button>
                    <p>{item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}><BiPlus /></button>
                  </div>
                  <button className='deleteBtn' onClick={() => removeFromCart(item.id)}><MdDeleteOutline /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
  );
};

export default CartItems;
