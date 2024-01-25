import ImportExportIcon from "@mui/icons-material/ImportExport";

const SortSongs = ({ onSort }) => {
  // handle change
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="top-button icon">
      <ImportExportIcon />
      <select onChange={handleSortChange} className="none-border">
        <option value="id">Track Number </option>
        <option value="artistName">Artist Name</option>
        <option value="songName">Song Name</option>
      </select>
    </div>
  );
};

export default SortSongs;
