import React from "react";

const Header = ({ handleToggle }) => {
  return (
    <div className="header">
      <h1 className="header_title">Notes</h1>
      <button
        className="save_btn toggle"
        onClick={() => handleToggle((previousMode) => !previousMode)}
      >
        Toogle Mode
      </button>
    </div>
  );
};
export default Header;
