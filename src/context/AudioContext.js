import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};
// audio provider for player
export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const play = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const stop = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, currentSong, play, stop }}>
      {children}
    </AudioContext.Provider>
  );
};
