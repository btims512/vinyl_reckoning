import React, { useContext } from "react";
import playerContext from "../../context/PlayerContext";
import bb_main from "/Users/Ben/Desktop/project_files/vinyl_reckoning/src/assets/group_pic_1.png";
import Carousel from "./Carousel";

let Header = () => {
  // const { currentSong, songslist } = useContext(playerContext);
  return (
    <div>
      {/* <div className="car-body"> */}
        {/* <div className="carousel "> </div> */}
      {/* </div> */}
      carousel here <Carousel />
      <header>
        <h3> Episodes</h3>
        <div>
          {/* <img src={bb_main} alt="" style={{ width: "100vw" }} /> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
