import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
function App() {
  return (
    <div className="App">
         <Product />
         <Cart />
    </div>
  );
}

export default App;
