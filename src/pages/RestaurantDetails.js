import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ addToCart }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 1) + delta, 1),
        }));
    };

    const handleAddToCart = item => {
        if (typeof addToCart === 'function') {
            addToCart({ ...item, quantity: 1 }); // Adding with a default quantity of 1
        } else {
            console.error('addToCart is not a function');
        }
    };

    const items = [
        {
            id: 1,
            name: 'Chicken Biryani',
            price: 316,
            description: 'Chicken biryani is made by layering marinated chicken at the bottom of a pot',
            image: 'https://assets.cntraveller.in/photos/6218cfdbd84ae9ad8ecff426/master/w_1600%2Cc_limit/sp%2520biryani.jpg',
        },
        {
            id: 2,
            name: 'Pepperoni Pizza',
            price: 399,
            description: 'Yummy Chicken Pepperoni & 100% mozzarella cheese with signature pan sauce. Its a classic!',
            image: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
        },
        {
            id: 3,
            name: 'Masala Dosa',
            price: 72,
            description: 'Masala Dosa with spicy potato filling',
            image: 'https://www.efghfoods.com/wp-content/uploads/2020/11/Blog-2-min.jpg',
        },
        {
            id: 4,
            name: 'Milk Shake',
            price: 249,
            description: 'Shake prepared by using premium ice creams',
            image: 'https://img.freepik.com/premium-photo/black-background-showcases-three-vibrant-milkshake-cocktails-chocolate-strawberry-vanilla_908985-14426.jpg',
        },
        {
            id: 5,
            name: 'Alfahm Mandhi',
            price: 400,
            description: 'Traditional Alfahm Mandhi with flavorful spices',
            image: 'https://b.zmtcdn.com/data/dish_photos/105/e38958e55ae4f927bfe9f568ab16c105.jpeg',
        },
    ];

    return (
        <section>
            {items.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '20px', margin: '10px', border: '1px solid black', marginBottom: '20px', borderRadius: '10px' }}>
                    <div style={{ padding: '10px', height: '150px', width: '160px' }}>
                        <img src={item.image} alt={item.name} width='220' height='175' />
                    </div>
                    <div style={{ padding: '10px', height: '150px', width: '600px' }}>
                        <h1 style={{ fontSize: '22px', marginTop: '5px', fontFamily: 'Georgia', color: 'black' }}>{item.name}</h1>
                        <h1 style={{ fontSize: '18px', marginTop: '5px', fontFamily: 'Georgia', color: 'black' }}>Rs/-{item.price}</h1>
                        <p style={{ fontSize: '15px', marginTop: '5px', fontFamily: 'Georgia', color: 'black' }}>{item.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '30px', width: '200px' }}>
                            <div style={{marginLeft:'299px'}} className="quantity-selector">
                                <button   onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                <span>{quantities[item.id] || 1}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            </div >
                         
                            <button onClick={() => handleAddToCart(item)} className="card-button">
                                Add to Cart
                            </button>
                            
                        </div>
                    </div>
                    
                </div>
              
            ))}
        </section>
    );
};

RestaurantDetail.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default RestaurantDetail;
