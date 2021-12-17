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
import Footer from "../components/Common/Footer";
import gif from "../assets/meta/gif.gif";

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
      <section id="metaverse-section">
        <div className="" style={{ padding: "40px 20px" }}>
          <div
            className="box"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={gif}
              style={{ maxWidth: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
      </section>
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
