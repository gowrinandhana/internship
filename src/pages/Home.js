import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';
import topImage from '../pages/home2.jpg';


const foodItems = [
  { id: 1, name: 'Burger', price: 100, restaurant: 'Burger House', image: 'burger.jpeg' },
  { id: 2, name: 'Pizza', price: 150, restaurant: 'Pizza Place', image: 'pizza.jpg' },
  { id: 3, name: 'Sushi', price: 250, restaurant: 'Sushi World', image: 'sushi.jpg' },
  { id: 4, name: 'Pasta', price: 150, restaurant: 'Pasta Palace', image: 'past.jpeg' },
  { id: 5, name: 'Salad', price: 80, restaurant: 'Healthy Eats', image: 'sal.jpeg' },
  { id: 6, name: 'Tacos', price: 220, restaurant: 'Taco Stand', image: 'tacos.jpg' },
  { id: 7, name: 'Steak', price: 180, restaurant: 'Steakhouse', image: 'steak.jpg' },
  { id: 8, name: 'Ice Cream', price: 50, restaurant: 'Ice Cream Parlor', image: 'ic.jpg' },
  { id:  9,name:'Falooda',price:120,restaurant:'Dessi cuppa',image:'falooda.jpg'},
];

function Home({ addToCart }) {
  
  console.log('addToCart:', addToCart); 

  
  const [quantities, setQuantities] = useState({});

  
  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) + delta, 1), 
    }));
  };

  
  const handleAddToCart = (item) => {
    if (typeof addToCart === 'function') {
      addToCart({ ...item, quantity: quantities[item.id] || 1 });
    } else {
      console.error('addToCart is not a function');
    }
  };

  return (
    <div className="home">
      <img src={topImage} alt="Top" className="top-image" />
      <h2>Top Dishes</h2>
      <div className="card-container">
        {foodItems.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-restaurant">{item.restaurant}</p>
              <p className="card-price">₹{item.price}</p>
              <div className="card-rating">⭐⭐⭐⭐⭐</div>
              <div className="quantity-selector">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{quantities[item.id] || 1}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(item)} className="card-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="view-cart-button">View Cart</Link>
    </div>
  );
}


Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;