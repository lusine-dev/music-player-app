import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAudio } from "../../context/AudioContext";

import "./songRow.css";

const SongRow = ({ songs, renderPlayStopButton }) => {
  // use context useAudio
  const { play, stop, isPlaying, currentSong } = useAudio();

  return (
    // creacte table for songs list
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th>Track Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>
              <DragIndicatorIcon />
              {renderPlayStopButton(
                song,
                isPlaying && currentSong && currentSong.id === song.id,
                play,
                stop
              )}
            </td>
            <td>{song.songName}</td>
            <td>{song.artistName}</td>
            <td>{song.id}</td>
            <td>
              <FavoriteIcon />
              <DoneIcon />
              <ShortcutIcon />
              <ArrowDropDownIcon />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongRow;
