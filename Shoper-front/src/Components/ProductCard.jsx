import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'
// import { MdDeleteOutline } from 'react-icons/md'
import { BiPlus, BiMinus } from 'react-icons/bi'

const ProductCard = ({ product }) => {
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const existingProduct = cartItems.find((item) => item.id === product.id);


  return (
    <div className='CardDiv'>
      <div className="image">
        <Link to={`/products/${product.id}`}><img src={product.image} alt=' '></img></Link>
      </div>
      <div className="content">
        <div className="title-price">
          <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
          <h3>₹ {Math.trunc(product.price)}</h3>
        </div>
        <p>{product.description.split(' ').slice(0, 8).join(' ')}......</p>
        {
          existingProduct ?
            <div className='bottomBtns'>
              <div className='quantityBtn'>
                <button onClick={() => decreaseQuantity(product.id)}><BiMinus /></button>
                <p>{existingProduct.quantity}</p>
                <button onClick={() => increaseQuantity(product.id)}><BiPlus /></button>
              </div>
              {/* <button className='deleteBtn' onClick={() => removeFromCart(product.id)}><MdDeleteOutline /></button> */}
            </div> : <button onClick={handleAddToCart} className='addToCartBtn'>Add to Cart</button>
        }
      </div>
    </div>
  )
}

export default ProductCard