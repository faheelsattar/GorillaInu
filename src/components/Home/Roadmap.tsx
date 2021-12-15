import React from "react";
import "./Roadmap.css";
import Stepper from "./Stepper";

const Roadmap = () => {
  return (
    <section id="roadmap-section">
      <div className="roadmap">
        <h1 className="roadmap-heading">Roadmap</h1>
        <Stepper />
      </div>
    </section>
  );
};

export default Roadmap;
