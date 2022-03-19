import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Products from './pages/Products/Products';
import Cart from './pages/cart/Cart';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='main'>
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="products" element={<Products />} />

              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>

    </BrowserRouter >

  );
}

export default App;
