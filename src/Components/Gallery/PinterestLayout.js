import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import axios from 'axios';
import './PinterestLayout.css';

function PinterestLayout() {
    const [vases, setVases] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State to track loading status
    const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

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
                        console.warn('PlateNo is empty for artifact:', artifact);
                        return null;
                    }
                    const imageResponse = await fetch(`https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg`);
                    if (!imageResponse.ok) {
                        throw new Error('Network response for image was not ok');
                    }
                    const imageURL = imageResponse.url;
                    return { ...artifact, imageURL };
                } catch (error) {
                    console.error('Error fetching image:', error);
                    return null;
                }
            }));
            // Filter out artifacts with null image URLs
            const validArtifacts = artifactsWithImages.filter(artifact => artifact !== null);
            setVases(validArtifacts);
        } catch (error) {
            console.error('Error fetching artifacts:', error);
        } finally {
            setIsLoading(false); // Set loading to false after fetching data
        }
    };

    return (
        <div style={styles.pin_container}>
            {isLoading ? (
                <div className="loader"></div>
                
            ) : (
                vases.map((vase, index) => (
                    <Card key={index} size={getSize(index)} image={vase.imageURL} link={`/vase-detail/${vase.ReferenceNo}`} />
                ))
            )}
        </div>
    )
}

// Function to determine the size of the card based on the index
function getSize(index) {
    if (index % 3 === 0) return "small";
    else if (index % 3 === 1) return "medium";
    else return "large";
}

const styles = {
    pin_container: {
        padding: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        margin: '40px auto',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
}

export default PinterestLayout;
