// src/pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (username.trim() === '') {
      alert("Username is required");
      return;
    }
    if (password.trim() === '') {
      alert("Password is required");
      return;
    }

    // Here, you would typically send the data to your backend server.
    // For now, we'll just log it to the console.
    console.log("Login details:", { username, password });

    // Clear form fields after successful login
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
      <div className="login-background"></div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signup-button">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
