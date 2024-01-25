import SongRow from "../songRow/SongRow";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { useAudio } from "../../context/AudioContext";

const SongList = ({ songs }) => {
  const { play, stop, isPlaying, currentSong } = useAudio();

  // if playing show play else stop
  const renderPlayStopButton = (song, isCurrentlyPlaying, play, stop) => {
    return (
      <span onClick={() => (isCurrentlyPlaying ? stop() : play(song))}>
        {isCurrentlyPlaying ? <StopIcon /> : <PlayArrowIcon />}
      </span>
    );
  };

  return (
    <div>
      {!songs.length ? (
        <p style={{ textAlign: "center" }}>No songs found.</p>
      ) : (
        <SongRow
          songs={songs}
          onPlay={play}
          onStop={stop}
          renderPlayStopButton={renderPlayStopButton}
          isPlaying={isPlaying}
          currentSong={currentSong}
        />
      )}
    </div>
  );
};

export default SongList;
