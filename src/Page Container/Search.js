import React from "react";
import { Link } from "react-router-dom";
import Header from '../Components/HomeScreen/Header';
import Footer from '../Components/HomeScreen/Footer';
function Search() {
  return (
    <div className="app">
      <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
      <Header />
      <div className="background--black-full">
        <div className="grid-container">
          <div className="container-section search-section" id="search">
            <Link to="/" className="container__link navigation-section__link">
              <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
              Return home page
            </Link>
            <div className="container__header search-section__header"></div>
            <div className="product-grid">
              {/* Advanced Search */}
              <Link to="/advanced-search" className="search-option search-option--advanced card-object">
                <h2 className="search-option__heading">
                  ADVANCED SEARCH
                </h2>
                {/* Add advanced search form or button here */}
              </Link>
              {/* Traditional Search */}
              <Link to="/traditional-search"className="search-option search-option--traditional card-object">
                <h2 className="search-option__heading">
                  TRADITIONAL SEARCH
                </h2>
                {/* Add traditional search form or button here */}
              </Link>
              {/* Basic Search */}
              <Link to="/basic-search" className="search-option search-option--basic card-object">
                <h2 className="search-option__heading">BASIC SEARCH</h2>
                {/* Add basic search form or button here */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    
  );
}

export default Search;
