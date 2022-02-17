import styled from "styled-components";

export const CarouselStyles = styled.div`
  .imageCarouselContainer {
    position: relative;
    width: 80%;
    height: 600px;
    max-height: calc(100vh - 16px);
    margin: 0 auto;

    .imageTrackContainer {
      width: 100%;
      height: calc(100% - 40px);
      overflow: hidden;

      .imageTrack {
        list-style: none;
        margin: 0;
        padding: 0;
        transition: transform 0.25s ease-in;
        height: 100%;
        width: 100%;
        position: relative;

        .imageSlide {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
        }
        .carouselImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .arrowButton {
      font-size: 30px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.5);
      height: 40px;
      width: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 20px;
      background-color: grey;
      opacity: 80%;
      text-align: center;
      cursor: pointer;
      z-index: 1;
    }

    .leftArrow {
      left: 20px;
    }

    .rightArrow {
      right: 20px;
    }
  }

  .is-hidden {
    display: none;
  }

  .indicatorNav {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    .carouseIndicator {
      width: 20px;
      height: 20px;
      border: 0;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      margin: 0 12px;
      cursor: pointer;
      &.currentSlide {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;
