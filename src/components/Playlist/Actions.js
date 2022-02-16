import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCircleArrowDown,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const fav = () => {
  console.log("I like this one");
};

let Actions = () => (
  <div className="actions">
    <img
      src="https://pbcdn1.podbean.com/imglogo/image-logo/4449526/IMG_0034.jpg"
      alt="album art"
      style={{ width: "200px" }}
    />
    <div className="album_meta">
      <span className="alb_label"> Side B - Dashboard Confessional </span>
      <h1>The Places You Have Come To Fear The Most</h1>
    </div>
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

export default Actions;
