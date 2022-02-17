import React, { useContext } from "react";
import playerContext from "../../context/PlayerContext";

let Header = () => {
  const { currentSong, songslist } = useContext(playerContext);
  return (
    <header>
      <h3> Episodes</h3>
    </header>
  );
};

export default Header;
