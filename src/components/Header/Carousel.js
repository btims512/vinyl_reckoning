import React from "react";
import createClass from "create-react-class";
import { CarouselStyles } from "./CarouselStyles";
import bb_main from "/Users/Ben/Desktop/project_files/vinyl_reckoning/src/assets/group_pic_1.png";

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.imgur.com/qvFhidE.png" },
  { url: "https://i.imgur.com/WFg9Q9C.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const Carousel = () => {
  return (
<div class="slider">
<img src="images/image1.jpg" /><img src="images/image2.jpg" /><div class="just_text">This one's just text.</div><img src="images/image3.jpg" /><div><img src="images/image4.jpg" /><span class="caption">This one has a caption</span></div>
</div>
  );
};

export default Carousel;
