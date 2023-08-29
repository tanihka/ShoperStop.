import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import { ApiDataProvider } from './Context/ApiDataContext';
import { CartProvider } from './Context/CartContext';
import ProductDetailPage from './Pages/ProductDetailPage'
import LoginPage from './Pages/LoginPage';
import SignupForm from './Signup';

const App = () => {
  return (
    <CartProvider>
    <ApiDataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupForm/>} />
        </Routes>
    </ApiDataProvider>
    </CartProvider>

  )
}

export default App