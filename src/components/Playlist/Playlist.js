import React from "react";

import { song_list } from "../../context/podcast";

let Playlist = () => {
  return (
    <div className="playlist">
      <ul className="loi">
        {song_list.map((song, i) => (
          <li className="songContainer"> </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
