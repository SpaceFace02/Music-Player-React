import React from "react";
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Player = ({
  songs,
  currentSong,
  playing,
  setPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  // We don't care about the initial value, only after a song is played, can you pause the music.

  const getTime = (time) => {
    let noPrefixTime = Math.floor(time % 60);
    if (noPrefixTime.toString().length < 2) {
      let prefixTime = `0${noPrefixTime}`;
      return `${Math.floor(time / 60)} : ${prefixTime}`;
    } else return `${Math.floor(time / 60)} : ${Math.floor(time % 60)}`;
  };

  //   setSongInfo updates constantly for each song, hence its a rapid changing state and its important to spread out previous values.

  const playSongHandler = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  //    Remember, whenever an event executes/invokes a function, always pass e(event) as a parameter.
  const dragHandler = (e) => {
    //   We need to hook it up to state, so yeah.
    // The audio's currentTime is set to the event handler's target value time.
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        {/* No need to format the duration time this time as its internal and its just the whole duration of the song. */}
        <input
          min={0}
          max={songInfo.durationTime || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.durationTime)}</p>
      </div>
      <div className="play-control">
        <FaAngleLeft className="skip-backward" size="2em" />

        {playing ? (
          <FaPause onClick={playSongHandler} className="play" size="1.6em" />
        ) : (
          <FaPlay onClick={playSongHandler} className="play" size="1.6em" />
        )}
        <FaAngleRight className="skip-forward" size="2em" />
      </div>
      {/* onTimeUpdate runs everytime the time updates in the audio track. */}

      {/* When the song/audio is first mounted/loaded, update the values and invoke the timeUpdateHandler function. */}
    </div>
  );
};

export default Player;
