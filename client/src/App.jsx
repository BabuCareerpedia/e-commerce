import React, { useState, useEffect } from 'react';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Navbar from './pages/Navbar';
import Payment from './pages/Payment'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartListPage from './pages/CartListPage';
import Sarath from './Context/Sarath';
import Demo from './pages/Demo';
import Gnew from './pages/Gnew';


function App() {

  return (
    <>
    {/* <Navbar/>
    <Cart/>
<Product/> */}
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/cartList" element={<CartListPage/>}/>
        <Route path="/sarath" element={<Sarath/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/Gnew" element={<Gnew/>}/>

   
      </Routes>
    </BrowserRouter>
    </>

    
  );
}

export default App;
