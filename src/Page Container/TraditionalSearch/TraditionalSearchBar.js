import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Header from "../../Components/HomeScreen/Header"; // Import Header component
import SearchBar from "../../Components/TraditionalSearch/SearchBar";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import ButtonStyle from "../../Element/ButtonStyle";
import Footer from "../../Components/HomeScreen/Footer";
import './TraditionalSearch.css'; // Import CSS file for styles
import { clearSelectedShape, clearSelectedInventory, clearSelectedProvenience } from '../../Redux/actions';

const TraditionalSearch = () => {
  const dispatch = useDispatch();
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(true);
  const [searchCriteria, setSearchCriteria] = useState({
    ReferenceNo: '',
    ArtifactType: '',
    InventoryID: '',
    Provenience: ''
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const selectedShape = useSelector(state => state.search.selectedShape); 
  const selectedInventory = useSelector(state => state.search.selectedInventory); 
  const selectedProvenience = useSelector(state => state.search.selectedProvenience); 

  useEffect(() => {
    if (selectedShape) {
      setSearchCriteria(prevState => ({
        ...prevState,
        ArtifactType: selectedShape
      }));
    }
  }, [selectedShape]);

  useEffect(() => {
    if (selectedInventory) {
      setSearchCriteria(prevState => ({
        ...prevState,
        InventoryID : selectedInventory
      }));
    }
    console.log('searchCriteria changed:', searchCriteria);
  }, [selectedInventory]);

  useEffect(() => {
    if (selectedProvenience) {
      setSearchCriteria(prevState => ({
        ...prevState,
        Provenience : selectedProvenience
      }));
    }
    console.log('searchCriteria changed:', searchCriteria);
  }, [selectedProvenience]);

  const itemsPerPage = 9;
  const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleReferenceNoSearch = (e) => {
    e.preventDefault();
    if (searchCriteria.ReferenceNo) {
      searchArtifactsByReferenceNo(searchCriteria.ReferenceNo);
    }
  };

  const handleArtifactTypeSearch = (e) => {
    e.preventDefault();
    if (searchCriteria.ArtifactType) {
      searchArtifactsByArtifactType(searchCriteria.ArtifactType);
    }
  };

  const handleInventoryIDSearch = (e) => {
    e.preventDefault();
    if (searchCriteria.InventoryID) {
      searchArtifactsByInventoryID(searchCriteria.InventoryID);
    }
  };

  const handleProvenienceSearch = (e) => {
    e.preventDefault();
    if (searchCriteria.Provenience) {
      searchArtifactsByProvenience(searchCriteria.Provenience);
    }
  };

  const searchArtifactsByReferenceNo = async (referenceNo) => {
    setLoading(true);
    try {
      const response = await fetch(`https://54.252.229.57/api/artifacts/search/${referenceNo}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const artifactsWithImages = await Promise.all(data.map(async (artifact) => {
        try {
          const plateNo = artifact.PlateNo;
          if (!plateNo) {
            console.warn('PlateNo is empty for artifact:', artifact);
            return { ...artifact, imageURL: defaultImageURL };
          }
          const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg`);
          if (!imageResponse.ok) {
            throw new Error('Network response for image was not ok');
          }
          const imageURL = imageResponse.url;
          return { ...artifact, imageURL };
        } catch (error) {
          console.error('Error fetching image:', error);
          return { ...artifact, imageURL: defaultImageURL };
        }
      }));

      setResults(artifactsWithImages);
      setFilterString(filterState());
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchArtifactsByArtifactType = async (artifactType) => {
    setLoading(true);
    try {
      const response = await fetch(`https://54.252.229.57/api/artifacts/ArtifactType/${artifactType}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const artifactsWithImages = await Promise.all(data.map(async (artifact) => {
        try {
          const plateNo = artifact.PlateNo;
          if (!plateNo) {
            console.warn('PlateNo is empty for artifact:', artifact);
            return { ...artifact, imageURL: defaultImageURL };
          }
          const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg`);
          if (!imageResponse.ok) {
            throw new Error('Network response for image was not ok');
          }
          const imageURL = imageResponse.url;
          return { ...artifact, imageURL };
        } catch (error) {
          console.error('Error fetching image:', error);
          return { ...artifact, imageURL: defaultImageURL };
        }
      }));

      setResults(artifactsWithImages);
      setFilterString(filterState());
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchArtifactsByInventoryID = async (inventoryID) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://54.252.229.57/api/artifacts/InventoryID/${inventoryID}`);
      const artifactsWithImages = await Promise.all(response.data.map(async (artifact) => {
        try {
          const plateNo = artifact.PlateNo;
          if (!plateNo) {
            console.warn('PlateNo is empty for artifact:', artifact);
            return { ...artifact, imageURL: defaultImageURL };
          }
          const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg`);
          if (!imageResponse.ok) {
            throw new Error('Network response for image was not ok');
          }
          const imageURL = imageResponse.url;
          return { ...artifact, imageURL };
        } catch (error) {
          console.error('Error fetching image:', error);
          return { ...artifact, imageURL: defaultImageURL };
        }
      }));

      setResults(artifactsWithImages);
      setFilterString(filterState());
    } catch (error) {
      console.error('Error searching artifacts by InventoryID:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchArtifactsByProvenience = async (provenience) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://54.252.229.57/api/artifacts/Provenience/${provenience}`);
      const artifactsWithImages = await Promise.all(response.data.map(async (artifact) => {
        try {
          const plateNo = artifact.PlateNo;
          if (!plateNo) {
            console.warn('PlateNo is empty for artifact:', artifact);
            return { ...artifact, imageURL: defaultImageURL };
          }
          const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg`);
          if (!imageResponse.ok) {
            throw new Error('Network response for image was not ok');
          }
          const imageURL = imageResponse.url;
          return { ...artifact, imageURL };
        } catch (error) {
          console.error('Error fetching image:', error);
          return { ...artifact, imageURL: defaultImageURL };
        }
      }));

      setResults(artifactsWithImages);
      setFilterString(filterState());
    } catch (error) {
      console.error('Error searching artifacts by Provenience:', error);
    } finally {
      setLoading(false);
    }
  };

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const handleButtonClick = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleButtonClose = () => {
    setSidebarVisible(false);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRestartSearch = () => {
    dispatch(clearSelectedShape());
    dispatch(clearSelectedInventory());
    dispatch(clearSelectedProvenience());
    setFilterString("Showing search results for: ");
    window.location.href = '/traditional-search';
  };

  const filterState = () => {
    let tempFilterString = "Showing search results for: ";

    if (searchCriteria.ReferenceNo) {
      tempFilterString += `Vase ID = '${searchCriteria.ReferenceNo}'`;
    }

    if (searchCriteria.ArtifactType) {
      if (searchCriteria.ReferenceNo) {
        tempFilterString += " + ";
      }
      tempFilterString += `Shape = '${searchCriteria.ArtifactType}'`;
    }

    if (searchCriteria.InventoryID) {
      if (searchCriteria.ReferenceNo || searchCriteria.ArtifactType) {
        tempFilterString += " + ";
      }
      tempFilterString += `Inventory = '${searchCriteria.InventoryID}'`;
    }

    if (searchCriteria.Provenience) {
      if (searchCriteria.ReferenceNo || searchCriteria.ArtifactType || searchCriteria.InventoryID) {
        tempFilterString += " + ";
      }
      tempFilterString += `Provenance = '${searchCriteria.Provenience}'`;
    }

    return tempFilterString;
  };

  const slicedItems = results.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const [filterString, setFilterString] = useState("Showing search results for: ");

  return (
    <div className="app">
      <img className="background-behind" src="assets/images/fixed-background.jpg" alt=""/>
      <Header />
      <div className="app__container">
        <div className="background--black-full">
          <div className="grid-container grid-container--advanced">
            <div className="tool-page-container tool-page-container--advanced">
              <div className={`page-side-one ${isSidebarVisible ? 'visible' : ''}`}>
                <i className="close-side-bar fa-solid fa-xmark" onClick={handleButtonClose}></i>
                <h4 className="advanced-search-title">Traditional Search</h4>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleReferenceNoSearch}
                    type="Vase ID 1-123"
                    searchInput={searchCriteria.ReferenceNo}
                    onSearchAndClose={handleButtonClose}
                    handleChange={handleChange}
                    name="ReferenceNo"
                  />
                </div>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleArtifactTypeSearch}
                    type="Shape"
                    searchInput={searchCriteria.ArtifactType}
                    onSearchAndClose={handleButtonClose}
                    handleChange={handleChange}
                    name="ArtifactType"
                  />
                  <a href="/shape-terms" className="term-link">Shape Terms</a>
                </div>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleInventoryIDSearch}
                    type="Inventory"
                    searchInput={searchCriteria.InventoryID}
                    onSearchAndClose={handleButtonClose}
                    handleChange={handleChange}
                    name="InventoryID"
                  />
                  <a href="/inventory-terms" className="term-link">Inventory Terms</a>
                </div>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleProvenienceSearch}
                    type="Provenience"
                    searchInput={searchCriteria.Provenience}
                    onSearchAndClose={handleButtonClose}
                    handleChange={handleChange}
                    name="Provenience"
                  />
                  <a href="/provenience-terms" className="term-link">Provenience Terms</a>
                </div>
              </div>
              <div className="page-side-five">
                <ButtonStyle buttonName="Filter" onClick={handleButtonClick}/>
                <div className="filter-state">
                  {filterString}
                </div>
                <div className="viewing-option">
                  <label className="advanced-label-checkbox">
                    <input
                      className="advanced-checkbox"
                      type="checkbox"
                      checked={showImage}
                      onChange={() => setShowImage(!showImage)}
                    />
                    Show Images
                  </label>
                  <label className="advanced-label-checkbox">
                    <input
                      className="advanced-checkbox"
                      type="checkbox"
                      checked={showText}
                      onChange={() => setShowText(!showText)}
                    />
                    Show Text
                  </label>
                  <button className="clear-all-filter" onClick={handleRestartSearch}>
                    Clear All Filters
                  </button>
                </div>
                {loading ? (
                  <div className="loader-advanced"></div> // Display loader while fetching data
                ) : (
                  <ul className="search-results">
                    <div className="product-grid">
                      {slicedItems.length > 0 ? (
                        slicedItems.map((artifact) => (
                          <Link to={`/vase-detail/${artifact.ReferenceNo}`} className="artifact-link" key={artifact.ReferenceNo}>
                            <li className="card-object stacked">
                              {showImage && (artifact.imageURL ? (
                                <img src={artifact.imageURL} alt={`Image for ${artifact.PlateNo}`} className="artifact-main-image" />
                              ) : (
                                <img src={defaultImageURL} alt="No image available" className="artifact-main-image" />
                              ))}
                              {showText && (
                                <div className="card-object__content">
                                  {artifact.ReferenceNo}, {artifact.ArtifactType}, {artifact.InventoryID}, {artifact.Provenience}
                                </div>
                              )}
                            </li>
                          </Link>
                        ))
                      ) : (
                        <p style={{marginLeft:'15px'}}>No results found.</p>
                      )}
                    </div>
                  </ul>
                )}
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={Math.ceil(results.length / itemsPerPage)}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TraditionalSearch;
