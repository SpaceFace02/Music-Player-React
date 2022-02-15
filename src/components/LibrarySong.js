import React from "react";
// import { playAudio } from "../PromiseFn";

const LibrarySong = ({
  currentSong,
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  playing,
  setPlaying,
  songInfo,
  setSongInfo,
  setSongs,
}) => {
  const selectSongHandler = async () => {
    // filter returns us an array, so we need to access the first element.

    const selectedSong = songs.filter((song) => song.id === id);
    await setCurrentSong(selectedSong[0]);

    //  Set Active Song
    const newSongsActive = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });

    setSongs(newSongsActive);

    if (playing) audioRef.current.play();
  };

  return (
    <div
      className={`library-song ${song.active && "selected"}`}
      onClick={selectSongHandler}
    >
      {/* We want all songs to be displayed, not only the currentSong, but currentSong will also be used. */}
      <img src={song.cover} alt="cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
