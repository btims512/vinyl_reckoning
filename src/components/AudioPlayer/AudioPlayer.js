import React from "react";
import Header from "../Header/Header";
import Actions from "../Playlist/Actions";
import Playlist from "../Playlist/Playlist";
import PlayerState from "../../context/PlayerState";
import Controls from "../Controls";

import "./main.css";
import "./input.css";

let AudioPlayer = () => {
  return (
    <PlayerState>
      <div className="audioplayer">
        <div className="inside_content">
          <Header />
          {/* <Actions /> */}
        <Controls />
          <Playlist />
        </div>
      </div>
    </PlayerState>
  );
};

export default AudioPlayer;
