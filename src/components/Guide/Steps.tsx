import React from "react";
import "./Steps.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../assets/steps/left.png";
import right from "../../assets/steps/right.png";

type Image = {
  id: string;
  src: string;
};
interface IProps {
  textLeft: boolean;
  heading: string;
  subHeading: string;
  text: string;
  picture: Array<Image>;
}
const Steps = (props: IProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={right} style={{width:"50px", height:"50px"}} />,
    prevArrow: <img src={left} style={{width:"50px", height:"50px"}} />,
  };

  const sliderImages = props.picture.map((data) => {
    return (
      <div>
        <div key={data.id} className="slider-image-hldr">
          <img src={data.src} alt="slider-image" className="slider-image" />
        </div>
      </div>
    );
  });
  const renderText = () => {
    return (
      <div className="col-md-6 my-auto">
        <h3 className="step-heading">{props.heading}</h3>
        <p className="step-subheading">{props.subHeading}</p>
        <p className="step-text">{props.text}</p>
      </div>
    );
  };

  const renderSlider = () => {
    return (
      <div className="col-md-6 my-auto">
        <Slider {...settings}>{sliderImages}</Slider>
      </div>
    );
  };
  return (
    <div className="steps">
      {props.textLeft ? (
        <div className="row">
          {renderText()}
          {renderSlider()}
        </div>
      ) : (
        <div className="row">
          {renderSlider()}
          {renderText()}
        </div>
      )}
    </div>
  );
};

export default Steps;
