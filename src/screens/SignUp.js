// SignUp.js

import React from 'react';
import './SignUp.css';


export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-content">
       
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
