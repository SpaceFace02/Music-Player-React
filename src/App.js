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

    setSongInfo({
      ...songInfo,
      currentTime: current,
      durationTime: duration,
    });
  };

  const [libraryStatus, setLibraryStatus] = useState(false);

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
      ></audio>
    </div>
  );
};

export default App;
