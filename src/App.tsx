import React from 'react';
import './App.css';
import CartItem from './components/CartItem';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import CartControls from './components/ui/CartControls';
import Cart from './pages/Cart';
import Index from './pages/Index';
import ProductTypes from './pages/ProductTypes';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Cart /> */}
        <ProductTypes />
        {/* <Index /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
