import React from 'react';
import './Nav.css';
import Avatar from '../assets/image-avatar.png';
import cartIcon from '../assets/icon-cart.svg';
import menuIcon from '../assets/icon-menu.svg';

const Nav = ({ handleMenuToggle, menuOpen }) => {
  return (
    <nav>
      <ul className="navBar">
        <li>
          <a href='#' id="menuIcon" onClick={handleMenuToggle} className={menuOpen ? 'hidden' : ''}>
            <img src={menuIcon} className='menuIcon' alt="menu icon" />
          </a>
        </li>
        <h2 id='sneakers'>Sneakers</h2>
        <div id='empty'></div>
        <li><a href='#cart'>
          <img src={cartIcon} className='navCart' style={{ height: '25px', width: '25px' }} alt="Cart icon" />
        </a></li>
        <li><a href="#avatar">
          <img src={Avatar} className='navProfile' style={{ height: '25px', width: '25px' }} alt="Avatar icon" />
        </a></li>
      </ul>
    </nav>
  );
};

export default Nav;
