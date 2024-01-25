import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AddAllButton = () => {
  const handleAddAll = () => {
    // show in console add All button clicked
    console.log("Add All button clicked");
  };

  return (
    <button className="top-button" onClick={handleAddAll}>
      <AddIcon />
      Add All
      <span className="arrow-down">
        <ArrowDropDownIcon />
      </span>
    </button>
  );
};

export default AddAllButton;
