import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import CartItem from './components/CartItem';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Index from './pages/Index';
import Products from './pages/Products';
import ProductTypes from './pages/ProductTypes';

function App() {

  return (
    <div className="App">
      <BrowserRouter  >
        <Header />
        <main>

          <Routes >
            <Route path='/' element={<Index />} />
            <Route path='cart' element={<Cart />} />
            <Route path='producttypes' element={<ProductTypes />} />
            <Route path='products' element={<Products />} />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
