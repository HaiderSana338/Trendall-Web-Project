import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ShapeSearchBar({ searchData, type, vaseData, onSelect, onSearchAndClose }) {
    const [searchInput, setSearchInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(true); // State to track suggestion visibility
    const [matchedItems, setMatchedItems] = useState([]);
    const searchWrapperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [searchWrapperRef]);

    useEffect(() => {
        // Display suggestions when there is a change in searchData or vaseData
        showAllData();
    }, [searchData, vaseData]);

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setSearchInput(inputVal);

        if (inputVal.trim() === "") {
            setMatchedItems([]);
            setShowSuggestions(true); // Display suggestions when search input is empty
            return;
        }

        const matches = searchData
            .filter(item => typeof item === 'string' && item.toLowerCase().startsWith(inputVal.toLowerCase()))
            .map(option => {
                const count = vaseData.filter(vase => vase.ArtifactType === option ).length;
                return { name: option, count };})

        setMatchedItems(matches);
        setShowSuggestions(true);
    };

    const handleSelectName = (name) => {
        setSearchInput(name);
        setMatchedItems([]);
        setShowSuggestions(false);
        onSelect(name);  // Call the onSelect function and pass the suggestion value
    };

    const handleSearch = () => {
        // navigate(`/search?q=${encodeURIComponent(searchInput)}`);
    };
    
    const showAllData = () => {
        const matches = searchData.map(option => {
            const count = vaseData.filter(vase => vase.ArtifactType === option ).length;
            return { name: option, count };
        });
    
        // Sort the items by aphabetic order
        const filteredMatches = matches.filter(item => item.count > 0);
        filteredMatches.sort((a, b) => a.name.localeCompare(b.name));

        setMatchedItems(filteredMatches);
    };
    
    
    return (
        <div className="search-bar-wrapper search-bar-wrapper--advanced" ref={searchWrapperRef}>
            <div className="header__search header__search--advanced">
                <div className="header__search-input-wrap header__search-input-wrap--advanced">
                    <input
                        type="text"
                        className="header__search-input header__search-input--advanced"
                        placeholder={`Search ${type} ...`}
                        value={searchInput}
                        onChange={handleInputChange}
                        onFocus={showAllData}
                    />
                    
                </div>
                <button className="header__search-btn header__search-btn--advanced" onClick={() => { handleSearch(); onSearchAndClose(); }}>
                    <i className="header__search-btn-icon fas fa-search"></i>
                </button>
            </div>
            <div className="header__search-history header__search-history--advanced">
                <h3 className="header__search-history-heading">Search suggestion</h3>
                <ul className="header__search-history-list list">
                    {matchedItems.map(({ name, count }) => (
                        <li
                            key={name}
                            className="header__search-history-item  header__search-history-item--advanced list-items"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleSelectName(name)}
                        >
                            <span>
                                <b>{name}</b> ({count} vases)
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ShapeSearchBar;
