import React, { useState } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <Menu menuOpen={menuOpen} className='menu' handleMenuToggle={handleMenuToggle} />
      <div className="nav">
        <Nav handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} />
      </div>
    </header>
  );
};

export default Header;
