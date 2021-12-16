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
        background: "#8253FF",
      }}
    >
      <Header />
      <Hero />
      <About />
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
