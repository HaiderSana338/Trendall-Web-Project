import React, { useState } from "react";

function VaseIdSearchBar({ handleSearch, type, searchInput, setSearchInput, onSearchAndClose }) {
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClickSearch = () => {
    handleSearch(searchInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
};

  return (
    <div className="search-bar-wrapper search-bar-wrapper--traditional search-bar-wrapper--traditional-single">
      <div className="header__search header__search--traditional">
        <div className="header__search-input-wrap header__search-input-wrap--traditional">
          <input
            type="text"
            className="header__search-input header__search-input--traditional"
            placeholder={`Search ${type} ...`}
            value={searchInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          className="header__search-btn header__search-btn--traditional"
          onClick={() => { handleClickSearch(); onSearchAndClose(); }}
        >
          <i className="header__search-btn-icon fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default VaseIdSearchBar;
