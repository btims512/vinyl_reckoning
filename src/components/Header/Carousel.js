import React from "react";
import createClass from "create-react-class";
import { CarouselStyles } from "./CarouselStyles";
import bb_main from "/Users/Ben/Desktop/project_files/vinyl_reckoning/src/assets/group_pic_1.png";

import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from "react-bootstrap";

const images = [
  { url: "https://i.imgur.com/qvFhidE.png" },
  { url: "https://i.imgur.com/WFg9Q9C.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const CarouselSlider = () => {
  return (
    <Carousel style={{ margin: "20px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/gFMNcvg.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>World's most okay background kind of podcast</h1>
          <p>- some dude on twitter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/WFg9Q9C.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/8Bkuz2X.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
