import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1 fst-italic" to="/">Restaurant Review</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">LogIn</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signup">SignUp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/prodlist">View Products</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
