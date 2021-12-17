import React from "react";
import "./Footer.css";
import reddit from "../../assets/footer/reddit.png";
import twitter from "../../assets/footer/twitter.png";
import telegram from "../../assets/footer/telegram.png";
import discord from "../../assets/footer/discord.png";
import footerlogo from "../../assets/footer/footerlogo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-hldr">
        <img src={footerlogo} className="footer-logo" alt="" />
      </div>
      <div className="footer-links">
        <p className="text-link-footer">info@gorilla-inu.com |</p>
        <p className="text-link-footer"> marketing@gorilla-inu.com |</p>
        <p className="text-link-footer"> arts@gorilla-inu.com</p>
      </div>
      <div className="footer-links">
        <a
          className="footer-link-hldr"
          href="https://www.reddit.com/r/GorillaInu_Official"
          target="_blank"
        >
          <img src={reddit} alt="" className="footer-link-img" />
        </a>
        <a
          className="footer-link-hldr"
          href="https://t.me/GorillaInuOfficial"
          target="_blank"
        >
          <img src={telegram} alt="" className="footer-link-img" />
        </a>
        <a
          className="footer-link-hldr"
          href="https://discord.gg/qNbQq9Pe5c"
          target="_blank"
        >
          <img src={discord} alt="" className="footer-link-img" />
        </a>
        <a
          className="footer-link-hldr"
          href="https://twitter.com/gorilla_inu"
          target="_blank"
        >
          <img src={twitter} alt="" className="footer-link-img" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
