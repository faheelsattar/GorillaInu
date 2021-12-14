import React from "react";
import "./Stepper.css";
import Bigwave from "../../assets/roadmap/bigwave.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../assets/steps/left.png";
import right from "../../assets/steps/right.png";

const Stepper = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <img src={right} style={{ width: "50px", height: "50px" }} />,
    prevArrow: <img src={left} style={{ width: "50px", height: "50px" }} />,
  };
  const phases = [1, 2, 3, 4, 5, 6].map((data) => {
    return (
      <div key={data}>
        <p className="phase-title">Phase {data}</p>
        <div className="phase-img-hldr">
          <img className="phase-img" src={Bigwave} />
        </div>
        <div className="phase-data">
          <ul className="phase-data-list">
            <ol>1. Stealth launch on Uniswap V2</ol>
            <ol>2. Stealth launch on Uniswap V2</ol>
            <ol>3. Stealth launch on Uniswap V2</ol>
            <ol>4. Stealth launch on Uniswap V2</ol>
            <ol>5. Stealth launch on Uniswap V2</ol>
            <ol>6. Stealth launch on Uniswap V2</ol>
            <ol>7. Stealth launch on Uniswap V2</ol>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div className="stepper">
      <div className="line-hldr">
        <hr className="filled-line" />
        <hr className="dotted-line" />
        <hr className="dotted-line" />
        <hr className="dotted-line" />
      </div>
      {/* <div className="phases-hldr">{}</div> */}
      <Slider {...settings}>{phases}</Slider>
    </div>
  );
};

export default Stepper;
