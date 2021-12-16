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
  const phases = [
    {
      id: 1,
      completed: true,
      date: "(October 2021)",
      points: [
        "Stealth launch",
        "Landing page",
        "Whitepaper V0.1",
        "1,000+ community",
      ],
    },
    {
      id: 2,
      completed: true,
      date: "(November 2021)",
      points: [
        "CoinGecko",
        "CoinMarketCap",
        "2,000+ community",
        "First donations",
        "AMAs + Marketing",
      ],
    },
    {
      id: 3,
      completed: true,
      date: "(We Are Here)",
      points: [
        "Whitepaper V1.0",
        "Website upgrade",
        "Earning products",
        "Official and community NFTs",
      ],
    },
    {
      id: 4,
      completed: false,
      date: "(Q2 2022)",
      points: [
        "All in on marketing",
        "Crypto education platform",
        "Gorilla SWAG merchandise",
        "5,000+ community",
        "CEX listing",
      ],
    },
    {
      id: 5,
      completed: false,
      date: "(Q3 2022)",
      points: [
        "Final burn of unlocked tokens",
        "contract renounce",
        "Whitepaper V2.0",
        "Gorilla Adoptions through NFTs",
        "First Metaverse in-game previews",
        "New earning products",
      ],
    },
    {
      id: 6,
      completed: false,
      date: "(2023)",
      points: [
        "10,000+ community",
        "Working Gorilla Metaverse",
        "Fully decentralized and",
        "community driven",
      ],
    },
  ].map((data) => {
    return (
      <div key={data.id}>
        <p className="phase-title">
          {data.completed === true ? (
            <span
              style={{
                backgroundColor: "#15E888",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                display: "block",
                marginRight: "5px",
              }}
            ></span>
          ) : null}
          Stage {data.id}
        </p>
        <p
          style={{ fontSize: "0.9rem", margin: "0 auto", width: "fit-content" }}
        >
          {data.date}
        </p>
        <div className="line-hldr">
          {data.completed ? (
            <hr className="filled-line" />
          ) : (
            <hr className="dotted-line" />
          )}
        </div>
        <div className="phase-img-hldr">
          <img className="phase-img" src={Bigwave} />
        </div>
        <div className="phase-data">
          <ul className="phase-data-list">
            {data.points.map((data) => (
              <ol>{data}</ol>
            ))}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div className="stepper">
      {/* <div className="phases-hldr">{}</div> */}
      <Slider {...settings}>{phases}</Slider>
    </div>
  );
};

export default Stepper;
