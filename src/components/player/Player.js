import { useState, useEffect } from "react";
import { useAudio } from "../../context/AudioContext";

const Player = () => {
  const { isPlaying, currentSong } = useAudio();
  const [audio] = useState(new Audio());

  useEffect(() => {
    if (currentSong) {
      audio.src = currentSong.src;
      audio.load();
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.pause();
    }

    return () => {
      // clean up the audio element when the component unmounts or when song changes
      audio.pause();
      audio.src = "";
    };
  }, [currentSong, isPlaying, audio]);
};

export default Player;
