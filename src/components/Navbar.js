import React,{useContext} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {cartContext} from './CartContext';

const Navbar = () => {

  const {qty} = useContext(cartContext)

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <Link class="navbar-brand text-white" to="/">E-Commerce</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none' }}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-auto">
              <Link class="nav-link text-white" to="/cart"><i class="far fa-shopping-cart"></i></Link>
            </li>
            <li class="nav-item mr-auto">
              <a class="nav-link cart-count text-white" href="#">{qty}</a>
            </li>
          </ul>
        </div>
      </nav>
     </div>
  )
}

export default Navbar
