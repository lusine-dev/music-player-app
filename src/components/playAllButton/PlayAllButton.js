import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PlayAllButton = () => {
  const handlePlayAll = () => {
    // show in console play All button clicked
    console.log("Play All button clicked");
  };

  return (
    <button className="top-button" onClick={handlePlayAll}>
      <PlayArrowIcon />
      Play All
      <span className="arrow-down">
        <ArrowDropDownIcon />
      </span>
    </button>
  );
};

export default PlayAllButton;
