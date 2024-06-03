import React, { useEffect } from "react";
import Header from "../../Components/HomeScreen/Header";
import SwiperComponent from "../../Components/BasicResearch/Swiper";
import BasicSearchButton from "../../Components/BasicResearch/Buttons In Page/BasicSearchButton";
import BasicSearchButtonNoLink from "../../Components/BasicResearch/Buttons In Page/BasicSearchButtonNoLink";
import { useDispatch } from 'react-redux';
import { saveSearchData } from '../../Redux/actions';
import Footer from "../../Components/HomeScreen/Footer";
import axios from 'axios';

const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

function BasicSearch() {
  const dispatch = useDispatch();
  const images = [
    'assets/images/swiper-1.png',
    'assets/images/swiper-6.png',
    'assets/images/swiper-3.png',
    'assets/images/swiper-2.png',
    'assets/images/swiper-5.png',
    "assets/images/swiper-4.png"
  ];

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      const response = await axios.get('https://54.252.229.57/api/artifacts');
      const artifactsWithImages = await fetchImagesForArtifacts(response.data);
      dispatch(saveSearchData(artifactsWithImages));
    } catch (error) {
      console.error('Error fetching artifacts:', error);
    }
  };

  const fetchImagesForArtifacts = async (artifacts) => {
    return Promise.all(artifacts.map(async (artifact) => {
      try {
        const plateNo = artifact.PlateNo;
        if (!plateNo) {
          return { ...artifact, imageURL: defaultImageURL };
        }
        const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg
`);
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
  };

  const handleRestartSearch = () => {
    fetchAllArtifacts();
    window.location.href = '/basic-search'; // Reset temporary data to data from vase.js
  };

  return (
    <div className="app">
      <img className="background-behind" src="assets/images/fixed-background.jpg" alt=""/>
      <Header />
      <div className="app__container">
        <div className="background--black-full">
          <div className="grid-container">
            <div className="tool-page-container">
              <div className="page-left-side">
                <h1 className='tool-header'>BASIC SEARCH TOOL</h1>
                <h3 className='tool-introduction'>Delve deeper into the collection of the Trendall Research Centre for Ancient Mediterranean Studies and immerse yourself in two million years of history across six continents.</h3> <br/>
                <h3 className='tool-introduction'>Online access to the collection allows you to explore nearly 4.5 million objects across more than 2 million records. High-resolution images can be enlarged and examined in detail, allowing you to appreciate the intricacies of ancient artifacts. This is just a glimpse of the thousands of fascinating discoveries awaiting you.</h3>
                <SwiperComponent slides={images}></SwiperComponent>
              </div>
              <div className="page-right-side">
                <h4 className="tool-title">Start your research with:</h4>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BasicSearch;
