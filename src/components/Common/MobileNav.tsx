import React, { useState } from "react";
import "./MobileNav.css";
import Logo from "../../assets/header/logo.svg";
import { Link } from "react-scroll";

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
          <Link
            to="about-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            About Us
          </Link>
          <Link
            to="features-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            Features
          </Link>
          <Link
            to="tokenomics-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            Tokenomics
          </Link>
          <Link
            to="roadmap-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            Roadmap
          </Link>
          <a
            href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/November/Gorilla%20Inuvv.pdf"
            target="_blank"
          >
            Audit
          </a>
          <Link
            to="nft-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            Nft's
          </Link>
          <Link
            to="metaverse-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            Metaverse
          </Link>
          <Link
            to="partners-section"
            smooth={true}
            duration={1000}
            onClick={handleToggle}
          >
            Partners
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
