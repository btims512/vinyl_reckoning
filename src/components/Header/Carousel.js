import React from "react";
import ReactDOM from "react-dom";
import { CarouselStyles } from "./CarouselStyles";

const ImageCarousel = ({ imageUrls, defaultSlideIndex = 0 }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(
    defaultSlideIndex
  );
  const slidesRef = React.useRef([]);
  const imageTrackRef = React.useRef(null);
  let slideWidth = 0;
  React.useEffect(() => {
    slideWidth = slidesRef.current[0].getBoundingClientRect().width;
    slidesRef.current.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });
  }, [slidesRef.current]);

  React.useEffect(() => {
    const amountToMove = slidesRef.current[currentSlideIndex].style.left;
    imageTrackRef.current.style.transform = `translateX(-${amountToMove})`;
  }, [currentSlideIndex]);

  const clickLeftArrow = () => {
    setCurrentSlideIndex(Math.max(currentSlideIndex - 1, 0));
  };
  const clickRightArrow = () => {
    setCurrentSlideIndex(Math.min(currentSlideIndex + 1, imageUrls.length - 1));
  };
  const clickIndicator = (index) => {
    setCurrentSlideIndex(index);
  };
  return (
    <div className="imageCarouselContainer">
      <div
        className={
          "arrowButton leftArrow" +
          (currentSlideIndex === 0 ? " is-hidden" : "")
        }
        onClick={clickLeftArrow}
      >
        {"<"}
      </div>
      <div className="imageTrackContainer">
        <ul className="imageTrack" ref={imageTrackRef}>
          {imageUrls.map((url, index) => {
            return (
              <li
                key={index.toString()}
                className={
                  "imageSlide" +
                  (index === currentSlideIndex ? " currentSlide" : "")
                }
                ref={(el) => (slidesRef.current[index] = el)}
              >
                <img className="carouselImage" src={url} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={
          "arrowButton rightArrow" +
          (currentSlideIndex === imageUrls.length - 1 ? " is-hidden" : "")
        }
        onClick={clickRightArrow}
      >
        {">"}
      </div>
      <div class="indicatorNav">
        {imageUrls.map((url, index) => {
          return (
            <button
              class={
                "carouseIndicator" +
                (index === currentSlideIndex ? " currentSlide" : "")
              }
              onClick={() => clickIndicator(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

function Carousel() {
  return (
    <div>
      <CarouselStyles>
        <div id="app"></div>
      </CarouselStyles>
      ReactDOM.render(
        <ImageCarousel imageUrls={imageUrls} />,
        document.getElementById("app")
      );
    </div>
  );
}

export default Carousel;

const imageUrls = [
  "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
];

