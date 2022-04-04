import React, { useContext } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Shop from './pages/Shop/Shop'
import Cart from './pages/cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { GlobalStateContext } from './GlobalState'


function App() {

  const state = useContext(GlobalStateContext);
  const [isLogged] = state.userAPI.isLogged
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="shop" element={<Shop />} />
            <Route path="detail/:id" element={<ProductDetail />} />

            <Route path="login" element={isLogged ? <NotFound /> : <Login />} />
            <Route path="register" element={isLogged ? <NotFound /> : <Register />} />
            <Route path="cart" element={<Cart />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
