import React from "react";
import "./Tokenomics.css";
import chart from "../../assets/tokenomics/chart.png";
const Tokenomics = () => {
  const tokenFeatures = [
    { id: "1", color: "#151A20" },
    { id: "2", color: "#151A20" },
    { id: "3", color: "#151A20" },
    { id: "4", color: "#3A0CA3" },
    { id: "5", color: "#FFD600" },
    { id: "6", color: "#F72585" },
    { id: "7", color: "#00C5C9" },
  ].map((data) => {
    return (
      <div className="token-box" style={{ borderLeftColor: data.color }}>
        <h4>Lorem Ipsum</h4>
        <p>Lorem ipsum dolor sit amet, consectetu</p>
      </div>
    );
  });
  return (
    <div className="tokenomics">
      <div className="token-text">
        <h1> Tokenomics</h1>
        <p>
          GORILLA INUs mission is to bring cryptocurrency concepts to the masses
          and help with adoption of blockchain services. Unlike other
          cryptocurrencies the GORILLA INU will allocate 1% of the token supply
          to donate to Gorilla protection organizations around the world.{" "}
        </p>
      </div>
      <div className="token">
        <p>Token name</p>
        <h3> GORINU</h3>
        <div className="row">
          <div className="col-md-6 my-auto">
            <div className="chart-img-hldr">
              <img src={chart} alt="chart" className="chart-img" />
            </div>
          </div>
          <div className="col-md-6">{tokenFeatures}</div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
