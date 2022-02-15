import React, { useEffect } from "react";
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Player = ({
  songs,
  currentSong,
  setCurrentSong,
  playing,
  setPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setSongs,
}) => {
  // Use Effect, when the current song state changes, we also want the Library UI to update simultaneosly, hence we use useEffect.

  useEffect(() => {
    const newSongsActive = songs.map((song) => {
      if (song.id === currentSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSongsActive);
    setSongInfo({
      ...songInfo,
      currentTime: 0,
    });
  }, [currentSong]);

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

  const skipTrackHandler = async (direction) => {
    //   Well here we can't do song.active as we havent added the functionality to change active state when you click the skip forwards or backwards button. So the first one works, coz that's active and doesn't work afterwards.
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    console.log(currentIndex);

    if (direction === "next") {
      // Always use this(modulus) when you want to loop over things.
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "back") {
      if ((currentIndex - 1) % songs.length < 0) {
        await setCurrentSong(songs[songs.length - 1]);
        if (playing) audioRef.current.play();

        return;
      } // Put else or put return at the end of if condition.
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      if (playing) audioRef.current.play();
    }
    if (playing) audioRef.current.play();
  };

  //   Add Styles

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  useEffect(() => {
    const trackAnim = {
      transform: `translateX(0%)`,
    };
    return trackAnim;
  }, [currentSong]);

  const backgroundGradientColor = {
    background: `linear-gradient(to right ,${currentSong.color[0]}, ${currentSong.color[1]} )`,
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        {/* No need to format the duration time this time as its internal and its just the whole duration of the song. */}
        <div className="track">
          <input
            min={0}
            max={songInfo.durationTime || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
            style={backgroundGradientColor}
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>

        <p>{songInfo.durationTime ? getTime(songInfo.durationTime) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FaAngleLeft
          className="skip-backward"
          size="2em"
          //   IF AND ONLY IF YOU ARE INVOKING A FUNCTION WITHIN THE ONLICK DUE TO SOME PARAMETERS, THEN ONLY PASS AN ARROW FUNCTION OR ELSE DON'T DO IT.
          onClick={() => skipTrackHandler("back")}
        />

        {playing ? (
          <FaPause onClick={playSongHandler} className="play" size="1.6em" />
        ) : (
          <FaPlay onClick={playSongHandler} className="play" size="1.6em" />
        )}
        <FaAngleRight
          className="skip-forward"
          size="2em"
          onClick={() => skipTrackHandler("next")}
        />
      </div>
      {/* onTimeUpdate runs everytime the time updates in the audio track. */}

      {/* When the song/audio is first mounted/loaded, update the values and invoke the timeUpdateHandler function. */}
    </div>
  );
};

export default Player;
