import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./utils";
import Library from "./components/Library";
import Nav from "./components/Nav";

const App = () => {
  const [songs, setSongs] = useState(data()); // Returns the whole array of objects in the state, its kinda like a variable.
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const [playing, setPlaying] = useState(false);
  // We don't care about the initial value, only after a song is played, can you pause the music.
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: "",
    durationTime: "",
    active: false,
  });

  // EventHandlers
  const timeUpdateHandler = (e) => {
    // console.log(e.target.currentTime);  Pretty Cool huh?
    // console.log(e.target.duration);
    const current = e.target.currentTime;
    const duration = e.target.duration;
    console.log(current);

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    // console.log(percentage);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      durationTime: duration,
      animationPercentage: percentage,
    });
  };

  const [libraryStatus, setLibraryStatus] = useState(false);

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (playing) audioRef.current.play();
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        playing={playing}
        setPlaying={setPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
      />
      <Library
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        playing={playing}
        setPlaying={setPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default App;
