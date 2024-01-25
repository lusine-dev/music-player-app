import PlayAllButton from "../playAllButton/PlayAllButton";
import AddAllButton from "../addAllButton/AddAllButton";
import SortSongs from "../sortSongs/SortSongs";
import FilterSongs from "../filterSongs/FilterSongs";

import "./topBar.css";

function TopBar({ onSort, onFilter }) {
  return (
    <div className="container-topbar">
      <div className="top-items">
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className="top-items">
        <SortSongs onSort={onSort} />
        <FilterSongs onFilter={onFilter} />
      </div>
    </div>
  );
}

export default TopBar;
