import React from "react";
import "./Wave1.css";
import WaveLeft from "../../assets/steps/wave1.svg";


const Wave1 = () => {
  return (
    <div className="wave-hldr">
      <img src={WaveLeft} className="wave1" alt="" />
    </div>
  );
};

export default Wave1;
