import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartTotal = () => {
    const {  getTotalTimesAdded, getTotalPrice } = useContext(CartContext);

  return (
    <div>
         <p>Total Times Added: {getTotalTimesAdded()}</p>
          <p>Total Price: {getTotalPrice()}</p>
    </div>
  )
}

export default CartTotal