import React from "react";
import "./App.css";
import About from "./components/About";
import Community from "./components/Community";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nft from "./components/Nft";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import bgCurve from "./assets/bg/bgcurve1.svg";
import Curve from "./components/Curve";
function App() {
  return (
    <div className="App">
      <div
        style={{
          background:
            "linear-gradient(130.63deg, #9A56FF -8.34%, #5123FF 120.05%)",
        }}
      >
        <Header />
        <Hero />
        <About />
        <Curve />
        {/* <Community /> */}
        <Roadmap />
        <Nft />
        <Partners />
      </div>
    </div>
  );
}

export default App;
