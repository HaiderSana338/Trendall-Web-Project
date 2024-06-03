import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/HomeScreen/Header";
import AdvancedButton from "../../Components/AdvancedSearch/AdvancedButton";
import InventorySearchBar from "../../Components/AdvancedSearch/InventorySearchBar";
import ShapeSearchBar from "../../Components/AdvancedSearch/ShapeSearchBar";
import ProvenienceSearchBar from "../../Components/AdvancedSearch/ProvenienceSearchBar";
import VaseIdSearchBar from "../../Components/AdvancedSearch/VaseIdSearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchData } from '../../Redux/actions';
import ReactPaginate from 'react-paginate';
import ButtonStyle from "../../Element/ButtonStyle";
import Footer from "../../Components/HomeScreen/Footer";
import axios from 'axios';
import { shapes } from "../../Data/Shapes";
import { provenience } from "../../Data/Provenience";
import { inventory } from "../../Data/Inventory";

// Define number of items per page
const itemsPerPage = 9;

const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

// Advanced search component
function AdvancedSearch() {
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(true);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedProvenience, setSelectedProvenience] = useState("");
  const [selectedInventory, setSelectedInventory] = useState("");
  const [searchData, setSearchData] = useState([]);
  const searchDataFromRedux = useSelector(state => state.search.searchData);
  const dispatch = useDispatch();
  const [filterString, setFilterString] = useState("Showing search results for: ");
  const [searchInput, setSearchInput] = useState(""); 
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      const response = await axios.get('https://54.252.229.57/api/artifacts');
      const artifactsWithImages = await Promise.all(response.data.map(async (artifact) => {
        try {
          const plateNo = artifact.PlateNo;
          if (!plateNo) {
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
      setSearchData(artifactsWithImages);
      dispatch(saveSearchData(artifactsWithImages));
    } catch (error) {
      console.error('Error fetching artifacts:', error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    if (searchDataFromRedux && searchDataFromRedux.length > 0) {
      setSearchData(searchDataFromRedux);
    }
  }, [searchDataFromRedux, dispatch]);

  useEffect(() => {
    if (selectedShape || selectedProvenience || selectedInventory) {
      const filteredVases = searchData.filter(vase => {
        return (
          (!selectedShape || vase.ArtifactType === selectedShape) &&
          (!selectedProvenience || vase.Provenience === selectedProvenience) &&
          (!selectedInventory || vase.InventoryID === selectedInventory)
        );
      });
      setSearchData(filteredVases);
      dispatch(saveSearchData(filteredVases));
    }
  }, [selectedShape, selectedProvenience, selectedInventory, dispatch]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const slicedItems = searchData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleRestartSearch = () => {
    fetchAllArtifacts();
    setFilterString("Showing search results for: ");
    window.location.href = '/advanced-search';
  };

  const filterState = () => {
    let tempFilterString = "Showing search results for: ";

    if (selectedShape) {
      tempFilterString += `Shape='${selectedShape}'`;
    }

    if (selectedInventory) {
      if (selectedShape) {
        tempFilterString += " + ";
      }
      tempFilterString += `Inventory='${selectedInventory}'`;
    }

    if (selectedProvenience) {
      if (selectedShape || selectedInventory) {
        tempFilterString += " + ";
      }
      tempFilterString += `Provenance='${selectedProvenience}'`;
    }
    if (searchInput) {
      if (selectedShape || selectedInventory || selectedProvenience) {
        tempFilterString += " + ";
      }
      tempFilterString += `Reference No.='${searchInput}'`;
    }

    return tempFilterString;
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://54.252.229.57/api/artifacts/search/${searchInput}`);
      const artifactsWithImages = await Promise.all(response.data.map(async (artifact) => {
        try {
          const plateNo = artifact.PlateNo;
          if (!plateNo) {
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
      setSearchData(artifactsWithImages);
      setFilterString(filterState());
    } catch (error) {
      console.error('Error searching artifacts:', error);
    }
  };

  useEffect(() => {
    setFilterString(filterState());
  }, [selectedShape, selectedProvenience, selectedInventory]);

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleButtonClick = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleButtonClose = () => {
    setSidebarVisible(false);
  };

  const toolPageContainerClass = isSidebarVisible ? 'tool-page-container tool-page-container--advanced visible' : 'tool-page-container tool-page-container--advanced';

  return (
    <div className="app">
      <img className="background-behind" src="assets/images/fixed-background.jpg" alt=""/>
      <Header />
      <div className="app__container">
        <div className="background--black">
          <div className="grid-container grid-container--advanced">
            <div className={toolPageContainerClass}>
              <div className={`page-side-one ${isSidebarVisible ? 'visible' : ''}`}>
                <i className="close-side-bar fa-solid fa-xmark" onClick={handleButtonClose}></i>
                <h4 className="advanced-search-title">Advanced Search</h4>
                <div className="search-by-type">
                  <VaseIdSearchBar
                    handleSearch={handleSearch}
                    type="Vase ID"
                    setSearchData={setSearchData}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <AdvancedButton buttonText="Shape" />
                  <ShapeSearchBar
                    searchData={shapes}
                    type="Shape"
                    onSelect={shape => setSelectedShape(shape)}
                    vaseData={searchData}
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <AdvancedButton buttonText="Inventory" />
                  <InventorySearchBar
                    searchData={inventory}
                    type="Inventory"
                    onSelect={inventory => setSelectedInventory(inventory)}
                    vaseData={searchData}
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <AdvancedButton buttonText="Provenience" />
                  <ProvenienceSearchBar
                    searchData={provenience}
                    type="Provenience"
                    onSelect={provenience => setSelectedProvenience(provenience)}
                    vaseData={searchData}
                    onSearchAndClose={handleButtonClose}
                  />
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
                {isLoading ? (
                  <div className="loader-advanced"></div> 
                ) : (
                  <ul>
                    <div className="product-grid">
                      {slicedItems.map((vase, index) => (
                        <li key={index} className="card-object stacked">
                          <Link to={`/vase-detail/${vase.ReferenceNo}`} className="artifact-link">
                            {showImage && <img className="artifact-main-image" src={vase.imageURL} alt={`Vase ${index}`} />}
                            {showText && (
                              <div className="card-object__content">
                                {vase.ReferenceNo}, {vase.ArtifactType}, {vase.InventoryID}, {vase.Provenience}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={Math.ceil(searchData.length / itemsPerPage)}
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

export default AdvancedSearch;
