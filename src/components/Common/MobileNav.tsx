import React, { useState } from "react";
import "./MobileNav.css";
import Logo from "../../assets/header/logo.svg";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="topnav">
      <div className="mb-hldr">
        <div className="hdr-logo1">
          <img alt="" className="hdr-img" src={Logo} />
        </div>
        <a className="icon" onClick={handleToggle}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      {toggle ? (
        <div id="myLinks">
          <a href="#news">About us</a>
          <a href="#contact">Features</a>
          <a href="#about">Tokenomics</a>
          <a href="#about">Roadmaps</a>
          <a href="#about">Nft's</a>
          <a href="#about">Partners</a>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
