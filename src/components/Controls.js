import React, { useState, useRef, useEffect, useContext } from "react";
import playerContext from "./../context/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeDown,
  faBackwardFast,
  faForwardFast,
  faPlay,
  faPause,
  faShuffle,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

function Controls() {
  // Global State
  const {
    currentSong,
    // songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext);

  const audio = useRef("audio_tag");

  // self State
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);

  return (
    <div className="controls">
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songslist[currentSong].fileUrl}
      />
      <img
        src="https://pbcdn1.podbean.com/imglogo/image-logo/4449526/IMG_0034.jpg"
        alt="album art"
        style={{ width: "100px" }}
      />
      <div className="vlme">
        <span className="volum">
          <FontAwesomeIcon icon={faVolumeDown} />
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>
      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          <FontAwesomeIcon icon={faBackwardFast}></FontAwesomeIcon>
        </span>

        <span
          className="play"
          onClick={() => {
            togglePlaying();
            toggleAudio();
          }}
        >
          <span className={!playing ? "" : "hide"}>
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </span>
          <span className={!playing ? "hide" : ""}>
            <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
          </span>
        </span>

        <span className="next" onClick={nextSong}>
          <FontAwesomeIcon icon={faForwardFast}></FontAwesomeIcon>
        </span>
      </div>
      <div className="progressb"></div>
      <div className="songMeta">
        <span className="songtitle">{songslist[currentSong].title}</span>
        <span className="songartistName">
          {songslist[currentSong].artistName}
        </span>
      </div>
      <input
        onChange={handleProgress}
        value={dur ? (currentTime * 100) / dur : 0}
        type="range"
        name="progresBar"
        id="prgbar"
      />
      <span className="currentT">{fmtMSS(currentTime)}</span>/
      <span className="totalT">{fmtMSS(dur)}</span>
      <div className="plsoptions">
        <span
          onClick={toggleRandom}
          className={"random " + (random ? "active" : "")}
        >
          <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
        </span>
        <span
          onClick={toggleRepeat}
          className={"repeat " + (repeat ? "active" : "")}
        >
          <FontAwesomeIcon icon={faRotateRight}></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
}

export default Controls;
