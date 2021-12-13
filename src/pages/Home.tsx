import React from "react";
import About from "../components/Home/About";
import Community from "../components/Common/Community";
import Curve from "../components/Home/Curve";
import Features from "../components/Home/Features";
import Header from "../components/Common/Header";
import Hero from "../components/Home/Hero";
import Nft from "../components/Home/Nft";
import Partners from "../components/Common/Partners";
import Roadmap from "../components/Home/Roadmap";
import Tokenomics from "../components/Home/Tokenomics";

const Home = () => {
  return (
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
      <Features />
      <Tokenomics />
      <Community />
      <Roadmap />
      <Nft />
      <Partners />
    </div>
  );
};

export default Home;
