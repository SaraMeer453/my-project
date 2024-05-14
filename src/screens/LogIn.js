// Login.js

import React from 'react';
import './LogIn.css';

export default function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <h3>login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
