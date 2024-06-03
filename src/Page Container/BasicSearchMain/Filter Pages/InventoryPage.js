import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import items from "../../../Components/BasicResearch/Alphabet Page/InventoryGroups"; 
import Header from "../../../Components/HomeScreen/Header";
import "./ShapePage.css";
import Footer from "../../../Components/HomeScreen/Footer";

function SearchItem({ name, url }) {
  const searchDataFromRedux = useSelector(state => state.search.searchData);
  const countVasesByName = (name) => {
    return searchDataFromRedux.filter(vase => vase.InventoryID === name).length;
  };

  if (countVasesByName(name) > 0) {
    return (
      <Link className="searchListValue" to={url}>
        {name}
        <span className="countVasesByName">({countVasesByName(name)})</span>
      </Link>
    );
  } else {
    return null;
  }
}

function AlphabetList({ letters }) {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollTop + targetOffset - 70,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="alphabetHeader">
      {letters.map((letter, index) => (
        <a key={index} className="alphabetLink" href={`#${letter}`} onClick={(e) => handleClick(e, letter)}>
          {letter}
        </a>
      ))}
    </div>
  );
}

function SearchList({ items }) {
  return (
    <div className="searchListContainer">
      {items.map((item, index) => (
        <p key={index}>
          <a id={item.letter} className="letter-list">
            {item.values.map((value, i) => (
              <SearchItem key={i} name={value.name} url={value.url} />
            ))}
          </a>
        </p>
      ))}
    </div>
  );
}

function InventoryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const searchDataFromRedux = useSelector(state => state.search.searchData);
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <div className="background--black-full" style={{paddingBottom:'30px'}}>
          <div className="grid-container">
            <div className="white-text">
              <div className="container__link navigation-section__link" onClick={handleBack}>
                <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
                Return previous page
              </div>
              <h1 className="h1-style">Classical Art Research Centre Pottery Search</h1>
              <h2>Search by Inventory</h2>
              <p>
                To search the database click on the inventory below,{" "}
              </p>
              <div className="AlphabetList-container">
                <AlphabetList letters={letters} />
              </div>
              <SearchList items={items} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-circle-arrow-up"></i>
        </div>
      )}
    </div>
  );
}

export default InventoryPage;
