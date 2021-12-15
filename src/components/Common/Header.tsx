import React from "react";
import "./Header.css";
import Logo from "../../assets/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <div className="hdr-main">
        <div className="hdr-content">
          <div className="hdr-logo">
            <img alt="" className="hdr-img" src={Logo} />
          </div>
          <div className="hdr-menu">
            <ul className="hdr-menu-list">
              <Link
                className="list-item"
                to="about-section"
                smooth={true}
                duration={1000}
              >
                About Us
              </Link>
              <Link
                className="list-item"
                to="features-section"
                smooth={true}
                duration={1000}
              >
                Features
              </Link>
              <Link
                className="list-item"
                to="tokenomics-section"
                smooth={true}
                duration={1000}
              >
                Tokenomics
              </Link>
              <Link
                className="list-item"
                to="roadmap-section"
                smooth={true}
                duration={1000}
              >
                Roadmap
              </Link>
              <Link
                className="list-item"
                to="nft-section"
                smooth={true}
                duration={1000}
              >
                Nft's
              </Link>
              <Link
                className="list-item"
                to="partners-section"
                smooth={true}
                duration={1000}
              >
                Partners
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;
