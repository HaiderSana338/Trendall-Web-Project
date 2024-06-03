//App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store, persistor } from './Redux/store';
import HomeScreen from './Page Container/Home';
import News from './Page Container/News';
import Search from './Page Container/Search';
import Article from './Page Container/Article';
import SearchResult from './Page Container/SearchResult';
import Gallery from './Page Container/Gallery';
import BasicSearch from './Page Container/BasicSearchMain/BasicSearch';
import AdvancedSearch from './Page Container/AdvancedSearchMain/AdvancedSearch';
import TraditionalSearch from './Page Container/TraditionalSearch/TraditionalSearchBar';
import ShapePage from './Page Container/BasicSearchMain/Filter Pages/ShapePage';
import InventoryPage from './Page Container/BasicSearchMain/Filter Pages/InventoryPage';
import ProveniencePage from './Page Container/BasicSearchMain/Filter Pages/ProveniencePage';
import VaseSearchResult from './Page Container/BasicSearchMain/BasicResult';
import ArtifactDetail from './Page Container/ArtifactDetail';
import ShapeTerms from './Page Container/TraditionalSearch/ShapeTerms';
import InventoryTerms from './Page Container/TraditionalSearch/InventoryTerms';
import ProvenienceTerms from './Page Container/TraditionalSearch/ProvenienceTerms';
import ArticlePage from './Page Container/ArticlePage';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/news" element={<News />} />
            <Route path="/search-tool" element={<Search />} />
            <Route path="/article" element={<Article />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/basic-search" element={<BasicSearch />} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            <Route path="/traditional-search" element={<TraditionalSearch />} />
            <Route path="/search-by-shape" element={<ShapePage />} />
            <Route path="/search-by-inventory" element={<InventoryPage />} />
            <Route path="/search-by-provenience" element={<ProveniencePage />} />
            <Route path="/search-by-shape/testSearch.asp" element={<VaseSearchResult/>} />
            <Route path="/search-by-inventory/testSearch.asp" element={<VaseSearchResult/>} />
            <Route path="/search-by-provenience/testSearch.asp" element={<VaseSearchResult/>} />
            <Route path="/vase-detail/:referenceNo" element={<ArtifactDetail/>} />
            <Route path="/shape-terms" element={<ShapeTerms/>} />
            <Route path="/inventory-terms" element={<InventoryTerms/>} />
            <Route path="/provenience-terms" element={<ProvenienceTerms/>} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
