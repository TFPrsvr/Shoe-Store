import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import CartCard from './Components/CartCard/CartCard';
import './App.css';

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleCartSubmit = () => {
    setCartItems([...cartItems, { quantity }]);
  };

  return (
    <div className="App">
      <Header />
      <Product quantity={quantity} setQuantity={setQuantity} handleCartSubmit={handleCartSubmit} />
      <CartCard quantity={quantity} />
    </div>
  );
};

export default App;