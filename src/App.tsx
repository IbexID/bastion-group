import React from 'react';
import './App.css';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
