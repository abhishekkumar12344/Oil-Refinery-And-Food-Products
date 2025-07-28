import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          {/* Replace src with your logo path */}
          <img src="/logoo.png" alt="Company Logo" />
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
