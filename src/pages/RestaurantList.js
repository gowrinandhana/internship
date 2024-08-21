
import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantList.css';

const restaurants = [
  {
    id: 1,
    name: 'Loocos Pizza',
    image: 'pizza.jpg',
    description: 'North Indian, Pizzas, Salads,.......Shoranur.',
  },
  {
    id: 2,
    name: 'Urban Kitchen',
    image: 'fish.jpg',
    description: 'North Indian,South Indian,...    Shoranur.',
  },
  {
    id: 3,
    name: 'Burger House',
    image: 'burger.jpeg',
    description: 'Burgers, Ice Cream, Pizzas,.....     Shoranur.',
  },
  {
    id: 4,
    name: 'Legacy Family Restaurant',
    image: 'legacy.jpg',
    description: 'Chinese, Arabian, Indian,....   Shoranur.',
  },
  {
    id: 5,
    name: 'Nila Restuarant',
    image: 'nila.jpg',
    description: 'Chinese, South Indian, Biryani,.....    Shoranur.',
  },
  {
    id: 6,
    name: 'Jbr Hotel',
    image: 'biri.jpeg',
    description: 'Chinese, Biryani, Kerala , Arabian,...    Shoranur.',
  },
  {
    id: 7,
    name: 'Dessi Cuppa Juice Factory',
    image: 'dessi.jpg',
    description: 'Ice Creams, Burgers, Pizzas,....   Shoranur.',
  },
  {
    id: 8,
    name: 'PisharodyS Veg Restaurant ',
    image: 'masala.jpg',
    description: 'South Indian, Biriyani,.... Shoranur.',
  },
  {
    id: 9,
    name: 'shalimar - mandi ',
    image: 'mandi.jpg',
    description: 'Arabian, mandi,.... cheruthuruthy.',
  },
 
];

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <div key={restaurant.id} className="restaurant-card">
          <Link to={'/restaurant/${restaurant.id}'}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;