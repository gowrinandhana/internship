import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');

  const handleSignup = (e) => {
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
    if (password !== reenteredPassword) {
      alert("Passwords do not match");
      return;
    }

    // Here, you would typically send the data to your backend server.
    // For now, we'll just log it to the console.
    console.log("Signup details:", { username, password });

    // Clear form fields after successful signup
    setUsername('');
    setPassword('');
    setReenteredPassword('');
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-background"></div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reenteredPassword">Re-enter Password:</label>
            <input
              type="password"
              id="reenteredPassword"
              value={reenteredPassword}
              onChange={(e) => setReenteredPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;