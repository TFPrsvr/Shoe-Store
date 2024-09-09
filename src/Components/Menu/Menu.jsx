import React from 'react';
import './Menu.css';
import menuIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-close.svg';
import Avatar from '../assets/image-avatar.png';
import cartIcon from '../assets/icon-cart.svg';

const Menu = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div className="menu-container">
      {/* {console.log("mobileView:")} */}
      {/* {console.log("desktopView:")} */}
      {/* Mobile View */}
     
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <img src={menuIcon} alt="Menu icon" />
        </button>
        {menuOpen && (
          <div className="menu-overlay">
            <button className="close-button" onClick={handleMenuToggle}>
              <img src={closeIcon} alt="Close icon" />
            </button>
            <ul className="menu-links">
              <li><a href="#">Collections</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* Desktop View */}
      {/* {console.log('desktop-nav:')} */}
      <div className="desktop-nav">          
        <div className="desktop-logo">
          <span>Sneakers</span>
        </div>
        <nav className="desktop-menu">
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="desktop-icons">
          <img src={cartIcon} alt="Cart icon" />
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
