// Cart.js

import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart = [], removeFromCart, checkout }) => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total: ₹{total.toFixed(2)}</p>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    removeFromCart: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired,
};

export default Cart;
