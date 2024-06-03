import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/HomeScreen/Header";
import Footer from "../Components/HomeScreen/Footer";
import axios from 'axios';
import ImageMagnifier from "./ImageMagnifier"; // Import the ImageMagnifier component
import "./ArtifactDetail.css"; // Import CSS file for styles

function ArtifactDetail() {
  const isLoggedIn = useSelector(state => state.auth.loggedIn);
  const { referenceNo } = useParams(); // Get referenceNo from the URL
  const [artifact, setArtifact] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    // Fetch artifact details from the backend
    const fetchArtifactDetails = async () => {
      try {
        const response = await axios.get(`https://54.252.229.57/api/artifacts/${referenceNo}`);
        const artifactData = response.data;
        setArtifact(artifactData);
        
        // Fetch image
        const plateNo = artifactData.PlateNo;
        if (plateNo) {
          const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg`);
          if (imageResponse.ok) {
            const url = imageResponse.url;
            setImageUrl(url);
          } else {
            setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
          }
        }
      } catch (error) {
        console.error("Error fetching artifact details:", error);
      }
    };

    fetchArtifactDetails();
  }, [referenceNo]);

  const handleDownloadImage = async () => {
    if (isLoggedIn && imageUrl) {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `artifact_${referenceNo}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    } else {
      alert("Sign In or Create an account to Download Image");
    }
  };

  const handleImageClick = () => {
    setShowModal(true); // Open modal when image is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal when close button is clicked
  };

  // Check if artifact exists
  if (!artifact) {
    return <div>Artifact not found!</div>;
  }

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <div className="background--black-full">
          <div className="grid-container">
            <div className="white-text">
              <h2 className="artifact-detail-heading">Artifact Detail</h2>
              <div className="container__link navigation-section__link" onClick={handleBack}>
                <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
                Return to search results
              </div>
              <div className="artifact-detail">
                <div className="artifact-detail__image">
                  <img 
                    src={imageUrl} 
                    alt={`Vase ${artifact.ReferenceNo}`} 
                    className="artifact-main-image" 
                    onClick={handleImageClick} // Add onClick event to open modal
                  />
                </div>
                <div className="artifact-detail__content">
                  <p className="artifact-detail__content-p"><strong>Reference No.:</strong> {artifact.ReferenceNo}</p>
                  <p className="artifact-detail__content-p"><strong>Artifact Type:</strong> {artifact.ArtifactType}</p>
                  <p className="artifact-detail__content-p"><strong>Inventory ID:</strong> {artifact.InventoryID}</p>
                  <p className="artifact-detail__content-p"><strong>Provenience:</strong> {artifact.Provenience}</p>
                  <p className="artifact-detail__content-p"><strong>Height:</strong> {artifact.Height}</p>
                  <p className="artifact-detail__content-p"><strong>Diameter:</strong> {artifact.Diameter}</p>
                  <p className="artifact-detail__content-p"><strong>Bibliographic References:</strong> {artifact.BibliographicReferences}</p>
                  <p className="artifact-detail__content-p"><strong>Imagery Description:</strong> {artifact.ImageryDescription}</p>
                  <p className="artifact-detail__content-p"><strong>Additional Notes:</strong> {artifact.AdditionalNotes}</p>
                  <p className="artifact-detail__content-p"><strong>Artist:</strong> {artifact.Artist}</p>
                  <p className="artifact-detail__content-p"><strong>Technique:</strong> {artifact.Technique}</p>
                  <p className="artifact-detail__content-p"><strong>Inscription:</strong> {artifact.Inscription}</p>
                  <button onClick={handleDownloadImage} className="download-image-button">Download Image</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for displaying large image */}
      {showModal && (
        <div className="modal-artifact-image">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <div className="modal-artifact-image__content">
            <ImageMagnifier imgUrl={imageUrl} /> {/* Use ImageMagnifier component */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtifactDetail;
