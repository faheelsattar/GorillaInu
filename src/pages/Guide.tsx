import React from "react";
import Hero from "../components/Guide/Hero";
import Steps from "../components/Guide/Steps";
import StepImage from "../assets/steps/step.svg";
import Community from "../components/Common/Community";
import Partners from "../components/Common/Partners";
import Wave1 from "../components/Guide/Wave1";
import Wave2 from "../components/Guide/Wave2";

const Guide = () => {
  type Image = {
    id: string;
    src: string;
  };
  const images: Image[] = [
    { id: "1", src: StepImage },
    { id: "1", src: StepImage },
    { id: "1", src: StepImage },
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(130.63deg, #9A56FF -8.34%, #5123FF 120.05%)",
      }}
    >
      <Hero />
      <Steps
        textLeft={true}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
      />
      <Wave1 />
      <Steps
        textLeft={false}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
      />
      <Wave2 />
      <Steps
        textLeft={true}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
      />
      <Wave1 />
      <Steps
        textLeft={false}
        heading="Create a wallet and ETH"
        subHeading="Open Metamask extension"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        picture={images}
      />
      <Wave2 />
      <Community />
      <Partners />
    </div>
  );
};

export default Guide;
