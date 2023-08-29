import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { CartContext } from './CartContext';

const ProductList = () => {
  const { cartItems } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
