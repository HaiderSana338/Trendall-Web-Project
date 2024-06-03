import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { scrollToTop } from "..";
import { articles } from "../Components/NewsPage/Information";
import Header from "../Components/HomeScreen/Header";
import SearchBar from "../Components/NewsPage/SearchBar";
import Footer from "../Components/HomeScreen/Footer";

const Article = ({ heading, image, description, date }) => (
    <Link to="/article" onClick={scrollToTop} className="information">
        <div className="information-container">
            <div className="information__image-container">
                <img src={image} alt="" className="information__image" />
            </div>
            <div className="information-info">
                <div className="information-info__wrapper-heading">
                    <h3 className="information__heading">{heading}</h3>
                    <span className="information__date">{date}</span>
                </div>
                <p className="information__description">{description}</p>
            </div>
        </div>
    </Link>
);
function SearchResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q");

    const searchResults = useMemo(() => {
        if (!searchQuery) return []; // Kiểm tra nếu không có query
        return articles.filter(article => 
            article.heading.toLowerCase().includes(searchQuery.toLowerCase())||
            article.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    console.log("Search Results:", searchResults); // In kết quả ra console

    return (
        <div className="app">
            <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
            <Header />
            <div className="app__container">
                <div className="background--black">
                    <div className="grid-container">
                        <h1 className='page-header article-header'>ARTICLES</h1>
                        <SearchBar />
                        <div className="search-result">
                            {searchQuery ? (
                                <>
                                    <h2 className="search-result-announce">Search Results for "{searchQuery}"</h2>
                                    <p className="search-result-count">{searchResults.length} Results found</p>
                                    {searchResults.length > 0 ? (
                                        searchResults.map(article => (
                                            <Article
                                                key={article.id}
                                                heading={article.heading}
                                                image={article.image}
                                                description={article.description}
                                                date={article.date}
                                            />
                                        ))
                                    ) : (
                                        <p>No results found.</p>
                                    )}
                                </>
                            ) : (
                                <p>Please enter a search query.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default SearchResult;

