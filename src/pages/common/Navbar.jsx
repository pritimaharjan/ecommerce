import React from 'react';
import '../common/Navbar.css';
import logo from '../assests/logo.png'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='navbar-content'>
          <div className='logo-container'>
            <img src={logo} alt="Logo" className='logo' />
          </div>
          <div className='menu-container'>
            <div className='menu'>
              <Link to='/' className='menu-item'>Home</Link>
              <Link to='/eyeglasses' className='menu-item'>Eyeglasses</Link>
            </div>
            <Link to='/cart' className='menu-item cart-icon'><TiShoppingCart /></Link>
            <Link to='/login' className='menu-item'>Login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
