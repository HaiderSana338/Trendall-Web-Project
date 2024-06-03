import React from 'react'; 
import Header from '../Components/HomeScreen/Header';
import Remarkable from '../Components/NewsPage/RemarkableArticle';
import SearchBar from '../Components/NewsPage/SearchBar';
import Information from '../Components/NewsPage/Information';
import ReactPaginate from 'react-paginate';
import Footer from '../Components/HomeScreen/Footer';

function News() {

    return (
        <div className="app">
            <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
            <Header />
            <div className="app__container">
                <div className="background--black">
                    <div className="grid-container">
                        <h1 className='page-header article-header'>ARTICLES</h1>
                        <SearchBar />
                        <Remarkable />
                        <Information />
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default News;