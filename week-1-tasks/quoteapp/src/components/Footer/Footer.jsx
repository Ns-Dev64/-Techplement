import React from 'react';
import './Footer.css'
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#FFD700', // yellowish color
    color: '#000', // black text color
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer className='footer'>
      <p>&copy; 2024 - no copyright lmao</p>
    </footer>
  );
};

export default Footer;
