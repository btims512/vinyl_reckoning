import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHeart,
//   faCircleArrowDown,
//   faEllipsis,
// } from "@fortawesome/free-solid-svg-icons";
import playerContext from "../../context/PlayerContext";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
</style>;

// const fav = () => {
//   console.log("I like this one");
// };

let Actions = () => (
  <div className="actions">
    <img
      // src="https://pbcdn1.podbean.com/imglogo/image-logo/4449526/IMG_0034.jpg"
      alt="album art"
      style={{ width: "200px" }}
    />
    <div className="album_meta">
      <span className="alb_label">
        <NowPlaying />{" "}
      </span>
      <h1>{/* <NowPlaying /> */}</h1>
    </div>

    {/* Not sure if want to use icons here yet */}
    {/* <div className="action_btns">
      <button onClick={() => fav()} className="fav_btn">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button onClick={() => fav()} className="fav_btn">
        <FontAwesomeIcon icon={faCircleArrowDown} />
      </button>
      <button onClick={() => fav()} className="fav_btn">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </div> */}
  </div>
);

let NowPlaying = () => {
  const { currentSong, songslist } = useContext(playerContext);
  return (
    <header>
      <h4> {songslist[currentSong].title}</h4>
      <h5> {songslist[currentSong].albumTitle} </h5>
    </header>
  );
};

export default Actions;
