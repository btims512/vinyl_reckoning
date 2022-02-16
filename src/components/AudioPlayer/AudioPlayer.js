import React from "react";
import Header from "../Header/Header";
import Actions from "../Playlist/Actions";

import "./main.css";
import "./input.css";
import Playlist from "../Playlist/Playlist";

let AudioPlayer = () => {
  return (
    <div className="audioplayer">
      <div className="inside_content">
        <Header />
        <Actions />
        <Playlist />
      </div>
      {/* <Controls /> */}
    </div>
  );
};

export default AudioPlayer;
