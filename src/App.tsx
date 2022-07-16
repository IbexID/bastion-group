import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import CartItem from './components/CartItem';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import CartControls from './components/ui/CartControls';
import Cart from './pages/Cart';
import Index from './pages/Index';
import Products from './pages/Products';
import ProductTypes from './pages/ProductTypes';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter basename='/' >
          <Routes >
            <Route path='/' element={<Index/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/producttypes' element={<ProductTypes/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
