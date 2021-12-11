import React from 'react';
import './Header.css';
import Logo from '../assets/header/logo.svg';
const Header = () => {
  return (
    <div className="hdr-main">
      <div className="hdr-content">
        <div className="hdr-logo">
          <img alt="" className="hdr-img" src={Logo} />
        </div>
        <div className="hdr-menu">
          <ul className="hdr-menu-list">
            <li className="list-item">About Us</li>
            <li className="list-item">Features</li>
            <li className="list-item">Tokenomics</li>
            <li className="list-item">Roadmap</li>
            <li className="list-item">NFT's</li>
            <li className="list-item">Partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
