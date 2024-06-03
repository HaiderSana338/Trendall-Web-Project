import React from "react";

function SearchBar({ handleSearch, type, searchInput, onSearchAndClose, handleChange, name }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleSearch(event);
        onSearchAndClose();
    }
  };

  const handleClickSearch = (event) => {
    handleSearch(event);
    onSearchAndClose();
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
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            name={name}
          />
        </div>
        <button
          className="header__search-btn header__search-btn--traditional"
          onClick={handleClickSearch}
        >
          <i className="header__search-btn-icon fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
