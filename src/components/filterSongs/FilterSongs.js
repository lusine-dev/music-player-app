import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const FilterSongs = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // handle change
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <div className="top-button filter">
      <label htmlFor="filter">
        <SearchIcon />
      </label>
      <input
        id="filter"
        className="none-border"
        type="text"
        placeholder="Filter"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterSongs;
