import React from "react";
import { Carousel } from "antd";
import firstImage from "../assets/images/carousal1.jpg";
import secondImage from "../assets/images/carousal2.jpg";
const contentStyle = {
  margin: 0,
  height: "480px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#0b0c28",
};
const BodyCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel className="carousel-comp" afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img className="carouse-img" src={firstImage}></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img className="carouse-img" src={secondImage}></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img className="carouse-img" src={firstImage}></img>
        </h3>
      </div>
    </Carousel>
  );
};
export default BodyCarousel;
