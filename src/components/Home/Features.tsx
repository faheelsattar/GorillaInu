import React from "react";
import "./Features.css";
import background from "../../assets/bg/3rdbg.png";

const Features = () => {
  const feature = [1, 2, 3, 4].map((data) => {
    return (
      <div key={data} className="ft-box">
        <div className="ft-circle"></div>
        <p className="ft-box-text">adoption of blockchain service</p>
      </div>
    );
  });
  return (
    <div className="features" style={{ backgroundImage: `url(${background})` }}>
      <div className="ft-text">
        <h1>Features</h1>
        <p>
          GORILLA INUs mission is to bring cryptocurrency concepts to the masses
          and help with adoption of blockchain services. Unlike other
          cryptocurrencies the GORILLA INU will allocate 1% of the token supply
          to donate to Gorilla protection organizations around the world.{" "}
        </p>
      </div>
      <div className="ft-list">{feature}</div>
    </div>
  );
};

export default Features;
