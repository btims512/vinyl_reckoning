import React from "react";
// import createClass from "create-react-class";
// import { CarouselStyles } from "./CarouselStyles";
// import bb_main from "/Users/Ben/Desktop/project_files/vinyl_reckoning/src/assets/group_pic_1.png";

import { Carousel } from "react-bootstrap";

const CarouselSlider = () => {
  return (
    <Carousel style={{ margin: "20px", zIndex: "1" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/gFMNcvg.png"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            background: "rgb(0 0 0 / 50%)",
            borderRadius: "25px",
            fontFamily: "fantasy",
            lineHeight: "1",
            margin: "-20px",
          }}
        >
          <h1>"I hate podcasts but I love this... so that says a lot 🤘"</h1>
          <h4>-d12squared</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/WFg9Q9C.jpg"
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            background: "rgb(0 0 0 / 50%)",
            borderRadius: "25px",
            fontFamily: "fantasy",
            lineHeight: "1",
            margin: "-30px",
          }}
        >
          <h3>
            "Great podcast and insight on a lot of albums I owned and still
            listen to from time to time."
          </h3>
          <h4>-Romeo0987</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/8Bkuz2X.png"
          alt="Third slide"
        />

        <Carousel.Caption
          style={{
            background: "rgb(0 0 0 / 50%)",
            borderRadius: "25px",
            fontFamily: "fantasy",
            lineHeight: "1",
          }}
        >
          <h1>"World's most okay background type of podcast."</h1>
          <h4>-The dev of this site</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlider;
