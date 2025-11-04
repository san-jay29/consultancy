import React from 'react';
import './Header.css';

function Header({ onRequestQuote }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Tile Showroom</h1>
        </div>
        
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#catalog">Catalog</a>
          <a href="#about">About</a>
          <button className="header-quote-btn" onClick={onRequestQuote}>
            Get Quote
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;