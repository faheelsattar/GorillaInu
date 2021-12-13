import React from "react";
import "./Curve.css";
import background from "../../assets/bg/secbg.png";

const Curve = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
        style={{ backgroundImage: `url(${background})` }}
        className="curve"
      >
        <path
          fill="#7038FF"
          fill-opacity="1"
          d="M0,128L120,117.3C240,107,480,85,720,101.3C960,117,1200,171,1320,197.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Curve;
