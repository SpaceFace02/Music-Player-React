import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  currentSong,
  songs,
  setCurrentSong,
  audioRef,
  playing,
  setPlaying,
  songInfo,
  setSongInfo,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library-container ${libraryStatus && "active-library"}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            currentSong={currentSong}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            setPlaying={setPlaying}
            playing={playing}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            setSongs={setSongs}
          />
          // All information of each track in song parameter passed in library Song.
        ))}
      </div>
    </div>
  );
};

export default Library;
