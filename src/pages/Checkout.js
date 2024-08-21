import React from 'react';
import PropTypes from 'prop-types';
import './Checkout.css';

const Checkout = ({ cart = [], total = 0, handlePayment }) => {
    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-summary">
                <h3>Order Summary</h3>
                <table className="checkout-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="checkout-total">Total: ${total.toFixed(2)}</p>
            </div>
            <form onSubmit={handlePayment} className="payment-form">
                <h3>Payment Information</h3>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" required />

                <label htmlFor="expiryDate">Expiry Date:</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />

                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" required />

                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

Checkout.propTypes = {
    cart: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    handlePayment: PropTypes.func.isRequired,
};

export default Checkout;