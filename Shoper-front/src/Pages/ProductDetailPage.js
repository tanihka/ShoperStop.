import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import { BiPlus, BiMinus } from 'react-icons/bi'


const ProductDetailPage = () => {
  const [apiData, setApiData] = useState([]);
  const { productId } = useParams();
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(apiData);
  };
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData =  async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setApiData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(apiData)
  
  const existingProduct = cartItems.find((item) => item.id === apiData.id);

  return (
    <div className='ProductDetailPage'>
      <div className="imagee">
        <img src={apiData.image} alt="" />
      </div>
      <div className="content">
        <h2>{apiData.title}</h2>
        <h3>₹ {apiData.price}</h3>
        <p>{apiData.description}</p>
        {
          existingProduct ?
            <div className='bottomBtns'>
              <div className='quantityBtn'>
                <button onClick={() => decreaseQuantity(apiData.id)}><BiMinus /></button>
                <p>{existingProduct.quantity}</p>
                <button onClick={() => increaseQuantity(apiData.id)}><BiPlus /></button>
              </div>
              {/* <button className='deleteBtn' onClick={() => removeFromCart(apiData.id)}><MdDeleteOutline /></button> */}
            </div> : 
            <button onClick={handleAddToCart} className='addToCartBtn'>Add to Cart</button>
        }     
      </div>
    </div>
  )
}

export default ProductDetailPage