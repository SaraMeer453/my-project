// RestaurantList.js

import React from 'react';
import './RestList.css'; // Import the CSS file

export default function RestaurantList() {
  return (
    <main className="container mt-4">
      <section id="addRestaurantSection">
        {/* Add Restaurant Form */}
      </section>

      <section id="restaurantDisplaySection">
        <h2>Restaurant List</h2>
        <input type="text" id="searchInput" className="form-control mb-3" placeholder="Search by name" />
        <div id="restaurantList">
          {/* Restaurant Cards */}
          <div className="card">
            <h3>Restaurant Name</h3>
            <p><strong>Location:</strong> Address</p>
            <p><strong>Contact:</strong> Phone Number</p>
            <button className="btn btn-danger delete-restaurant">Delete</button>
          </div>
          {/* Repeat this card structure for each restaurant */}
        </div>
        <button id="deleteAllButton" className="btn btn-danger">Delete All</button>
      </section>
    </main>
  );
}
