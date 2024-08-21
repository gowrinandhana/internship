import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import Offers from './pages/Offers';
import Specials from './pages/Specials';
import Signup from './pages/Signup';
import Login from './pages/Login'; // Import the Login component
import Checkout from './pages/Checkout';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart(prevCart => {
      // Check if the item is already in the cart
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Item already in cart, update quantity
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Item not in cart, add new
        return [...prevCart, item];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  // Function to handle checkout
  const checkout = () => {
    alert('Proceeding to checkout');
    // Implement your checkout logic here
  };
  const Checkout = () => {
    alert('Proceeding to checkout');
    // Implement your checkout logic here
};

// Function to handle payment
const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment processed');
    // Implement your payment logic here
};

// Calculate the total price of items in the cart
const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> {/* Add route for login */}
          <Route path="/checkout" element={<Checkout cart={cart} total={total} handlePayment={handlePayment} />} /> {/* Add route for checkout */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;