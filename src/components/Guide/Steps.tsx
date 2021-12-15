import React from "react";
import "./Steps.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left from "../../assets/steps/left.png";
import right from "../../assets/steps/right.png";
import { useQuery } from "@apollo/client";
import {
  STEP1_QUERY,
  STEP2_QUERY,
  STEP3_QUERY,
  STEP4_QUERY,
} from "../../apollo/query";

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
  step: number;
}
const Steps = (props: IProps) => {
  const queryThrower = () => {
    if (props.step === 1) {
      return STEP1_QUERY;
    } else if (props.step === 2) {
      return STEP2_QUERY;
    } else if (props.step === 3) {
      return STEP3_QUERY;
    } else if (props.step === 4) {
      return STEP4_QUERY;
    }
    return STEP2_QUERY;
  };

  const dataRender = (data: any) => {
    if (props.step === 1) {
      return [
        data.step1S[0].heading,
        data.step1S[0].subheading,
        data.step1S[0].steptext,
        data.step1S[0].images,
      ];
    } else if (props.step === 2) {
      return [
        data.step2S[0].heading,
        data.step2S[0].subheading,
        data.step2S[0].steptext,
        data.step2S[0].images,
      ];
    } else if (props.step === 3) {
      return [
        data.step3S[0].heading,
        data.step3S[0].subheading,
        data.step3S[0].steptext,
        data.step3S[0].images,
      ];
    } else if (props.step === 4) {
      return [
        data.step4S[0].heading,
        data.step4S[0].subheading,
        data.step4S[0].steptext,
        data.step4S[0].images,
      ];
    }
    return ["", "", "", []];
  };

  const imageRender = (data: any): Array<string> => {
    if (props.step === 1) {
      console.log("data step1", data.step1S[0].images.images);
      return data.step1S[0].images.images;
    } else if (props.step === 2) {
      return data.step2S[0].images.images;
    } else if (props.step === 3) {
      return data.step3S[0].images.images;
    } else if (props.step === 4) {
      return data.step4S[0].images.images;
    }
    return [""];
  };

  const { loading, error, data } = useQuery(queryThrower());
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={right} style={{ width: "50px", height: "50px" }} />,
    prevArrow: <img src={left} style={{ width: "50px", height: "50px" }} />,
  };

  const sliderImages = imageRender(data).map((img: string) => {
    return (
      <div>
        <div className="slider-image-hldr">
          <img src={img} alt="slider-image" className="slider-image" />
        </div>
      </div>
    );
  });

  const renderText = () => {
    return (
      <div className="col-md-6 my-auto">
        <h3 className="step-heading">{dataRender(data)[0]}</h3>
        <p className="step-subheading">{dataRender(data)[1]}</p>
        <p className="step-text">{dataRender(data)[2]}</p>
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
      {console.log("data", data)}
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
