import React from "react";
import { MdSearch } from "react-icons/md";

const search = ({ handleSearch }) => {
  return (
    <div className="search_container">
      {<MdSearch className="search_icon" />}
      <input
        type="text"
        placeholder="type to search note..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default search;
