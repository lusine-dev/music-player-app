import { useState } from "react";
import TopBar from "../topBar/TopBar";
import SongList from "../songList/SongList";
import MusicUploadForm from "../musicUplodForm/MusicUploadForm";
import Player from "../player/Player";
import songsData from "../../data";

function Main() {
  const [filteredSongs, setFilteredSongs] = useState(songsData); // to track filtered songs
  const [isPlaying, setIsPlaying] = useState(false); //  to track if any song is currently playing
  const [currentSong, setCurrentSong] = useState(null); // to track the currently playing song

  const handleFilter = (searchTerm) => {
    // song data filter
    const filtered = songsData.filter(
      (song) =>
        song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artistName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  const handleSort = (property) => {
    //filtered song data sort
    const sorted = [...filteredSongs].sort((a, b) => {
      const valueA =
        typeof a[property] === "string"
          ? a[property].toLowerCase()
          : a[property];
      const valueB =
        typeof b[property] === "string"
          ? b[property].toLowerCase()
          : b[property];

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });

    setFilteredSongs(sorted);
  };

  const handlePlay = (song) => {
    // stop the currently playing song
    if (currentSong && currentSong.id !== song.id) {
      // stop the current song
      setCurrentSong(null);
      setIsPlaying(false);
    }
    // play the selected song
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleStop = () => {
    // stop the currently playing song
    if (currentSong) {
      setCurrentSong(null);
      setIsPlaying(false);
    }
  };

  const handleUpload = (uploadedSong) => {
    // showing uploaded song in console
    console.log("Uploaded Song:", uploadedSong);
  };

  return (
    <div className="container-main">
      <TopBar onFilter={handleFilter} onSort={handleSort} />
      <SongList
        songs={filteredSongs}
        onPlay={handlePlay}
        onStop={handleStop}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Player currentSong={currentSong} onStop={handleStop} />
      <MusicUploadForm onUpload={handleUpload} />
    </div>
  );
}

export default Main;
