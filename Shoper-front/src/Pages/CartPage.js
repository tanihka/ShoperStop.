import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItems from '../Components/CartItems'
import CartTotal from '../Components/CartTotal'

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems.length === 0 ?
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>Your cart is empty.</p>
        :
        <div className='CartPage'>
          <CartItems />
          <CartTotal />
        </div>
      }
    </>

  )
}

export default CartPage