import React, { useContext } from "react";
import playerContext from "../../context/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsis, faPlay } from "@fortawesome/free-solid-svg-icons";

function Playlist() {
  const { songslist, currentSong, SetCurrent } = useContext(playerContext);

  return (
    <div className="playlist no_drag">
      <div className="header">
        <h4 className="pltext"></h4>
      </div>
      <ul className="loi">
        {songslist.map((song, i) => (
          <li
            className={"songContainer " + (currentSong === i ? "selected" : "")}
            key={i}
            onClick={() => {
              SetCurrent(i);
            }}
          >
            <div className="tmbn_song">
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            </div>
            <div className="songmeta_playlist">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
            <div className="playlist_btns_group">
              <button className="fav_song playlist_btn">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </button>
              <button className="options_song playlist_btn">
                <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
