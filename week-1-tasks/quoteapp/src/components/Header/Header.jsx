import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>MyQuotesApp</h1>
      </div>
      <div className="header-right">
        <a href="#about-us">About Us</a>
        <a href="#contact-us" style={{marginRight:'50px'}}>Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
