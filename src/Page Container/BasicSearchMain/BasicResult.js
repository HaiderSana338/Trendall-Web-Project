import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchData } from '../../Redux/actions';
import BasicSearchButton from "../../Components/BasicResearch/Buttons In Page/BasicSearchButton";
import Header from "../../Components/HomeScreen/Header";
import BasicSearchButtonNoLink from "../../Components/BasicResearch/Buttons In Page/BasicSearchButtonNoLink";
import Footer from "../../Components/HomeScreen/Footer";
import axios from 'axios';
import ReactPaginate from 'react-paginate';


function VaseSearchResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const txtValue = queryParams.get("txtValue");

    const [searchData, setSearchData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // State for current page
    const [isLoading, setIsLoading] = useState(true); // State to track loading status
    const itemsPerPage = 12; // Number of items per page

    const searchDataFromRedux = useSelector(state => state.search.searchData);
    const dispatch = useDispatch();

    const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    
    useEffect(() => {
        if (searchDataFromRedux.length > 0) {
            setSearchData(searchDataFromRedux);
            setIsLoading(false);
        } else {
            fetchAllArtifacts();
        }
    }, [searchDataFromRedux, dispatch]);

    useEffect(() => {
        if (txtValue && searchDataFromRedux.length > 0) {
            const filteredVases = searchDataFromRedux.filter(item => 
                item.InventoryID === txtValue || 
                item.ArtifactType === txtValue || 
                item.Provenience === txtValue
            );
            setSearchData(filteredVases);
            dispatch(saveSearchData(filteredVases));
        }
    }, [txtValue, searchDataFromRedux, dispatch]);

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
    

    const handleRestartSearch = () => {
        fetchAllArtifacts();
        window.location.href = '/basic-search';
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const slicedItems = searchData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const totalVases = searchDataFromRedux.length;
    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <div className="background--black-full">
                    <div className="grid-container">
                        <div className="white-text">
                            <div className="basic-search-result-container">
                                <h1 className="search-result-heading">Search Result for "{txtValue}"</h1>
                                <p className="output-vases-found">{searchData.length} vases found</p>
                                {isLoading ? (
                                  <div className="loader"></div> // Display loader while fetching data
                                ) : (
                                  <ul>
                                    <div className="product-grid">
                                      {slicedItems.length > 0 ? (
                                        slicedItems.map((vase, index) => (
                                          <li key={index} className="card-object stacked">
                                            <Link to={`/vase-detail/${vase.ReferenceNo}`} className="artifact-link">
                                              <img className="artifact-main-image" src={vase.imageURL} alt={`Vase ${index}`} />
                                              <div className="card-object__content">
                                                {vase.ReferenceNo}, {vase.ArtifactType}, {vase.InventoryID}, {vase.Provenience}
                                              </div>
                                            </Link>
                                          </li>
                                        ))
                                      ) : (
                                        <p style={{ marginLeft: '15px' }}>No results found.</p>
                                      )}
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
                        <BasicSearchButton
                            onClick={() => window.location = 'testSearch.asp?searchBy=Shape'}
                            buttonText="Shape"
                            buttonUrl="/search-by-shape"
                        />
                        <BasicSearchButton
                            onClick={() => window.location = 'testSearch.asp?searchBy=Inventory'}
                            buttonText="Inventory"
                            buttonUrl="/search-by-inventory"
                        />
                        <BasicSearchButton
                            onClick={() => window.location = 'testSearch.asp?searchBy=Provenience'}
                            buttonText="Provenience"
                            buttonUrl="/search-by-provenience"
                        />
                        <BasicSearchButtonNoLink
                            onClick={handleRestartSearch}
                            buttonText="Start a new research"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default VaseSearchResult;
