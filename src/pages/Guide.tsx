import React, { useEffect } from "react";
import Hero from "../components/Guide/Hero";
import Steps from "../components/Guide/Steps";
import StepImage from "../assets/steps/step.svg";
import Community from "../components/Common/Community";
import Partners from "../components/Common/Partners";
import Wave1 from "../components/Guide/Wave1";
import Wave2 from "../components/Guide/Wave2";
import Logo from "../assets/header/logo.svg";
import { useNavigate } from "react-router-dom";
import Uniswap from "../components/Guide/Uniswap";
import Video from "../components/Guide/Video";
import Footer from "../components/Common/Footer";

const Guide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  type Image = {
    id: string;
    src: string;
  };
  const images: Image[] = [
    { id: "1", src: StepImage },
    { id: "1", src: StepImage },
    { id: "1", src: StepImage },
  ];
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div
      style={{
        background: "#8253FF",
      }}
    >
      <div
        className="hdr-logo"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <img alt="" className="hdr-img" src={Logo} />
      </div>
      <Hero />
      <Steps
        textLeft={true}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
        step={1}
      />
      <Wave1 />
      <Steps
        textLeft={false}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
        step={2}
      />
      <Wave2 />
      <Steps
        textLeft={true}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
        step={3}
      />
      <Wave1 />
      <Steps
        textLeft={false}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
        step={4}
      />
      <Video />
      <Uniswap />
      <Community />
      <Partners />
      <Footer />
    </div>
  );
};

export default Guide;
