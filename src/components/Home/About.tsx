import React from "react";
import "./About.css";
import Logo from "../../assets/header/logo.svg";
import background from "../../assets/bg/secbg.png";

const About = () => {
  return (
    <div className="about" style={{ backgroundImage: `url(${background})` }}>
      <div className="row" style={{ paddingTop: "100px" }}>
        <div className="col-md-6 my-auto">
          <h1 style={{ color: "#ffffff" }}>
            About <span style={{ color: "#7E42FF" }}>Gorilla Inu</span>
          </h1>
          <p style={{ color: "#ffffff", fontSize: "1.1rem" }}>
            GORILLA INUs mission is to bring cryptocurrency concepts to the
            masses and help with adoption of blockchain services. Unlike other
            cryptocurrencies the GORILLA INU will allocate{" "}
            <span style={{ color: "#7E42FF" }}>
              1% of the token supply to donate to Gorilla protection
              organizations around the world{" "}
            </span>
            . The rug proof project has a strong and growing active community
            following and will be introducing next generation blockchain
            concepts in the near future (more on that in the roadmap).
          </p>
        </div>
        <div className="col-md-6 my-auto">
          <div className="about-img-hldr">
            <img className="about-img" src={Logo} />
          </div>
        </div>
      </div>
      <div className="phil-hldr">
        <div>
          <h1 style={{ fontWeight: "bold" }}>Philosophy</h1>
          <p style={{ fontSize: "1.3rem" }}>
            GORILLA INUs mission is to bring cryptocurrency concepts to the
            masses and help with adoption of blockchain services. Unlike other
            cryptocurrencies the GORILLA INU will allocate 1% of the token
            supply to donate to Gorilla protection organizations around the
            world.{" "}
          </p>
        </div>
      </div>

      <h1 style={{ color: "#7C41FF", textAlign: "center", fontWeight: "bold" }}>
        Apes Together Strong
      </h1>
    </div>
  );
};

export default About;
