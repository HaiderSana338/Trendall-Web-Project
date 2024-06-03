import axios from 'axios';

export const fetchPhotos = async () => {
    try {
        const response = await axios.get('https://54.252.229.57/api/artifacts');
        const artifacts = response.data;

        const defaultImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

        const photos = await Promise.all(artifacts.map(async (artifact) => {
            try {
                const plateNo = artifact.PlateNo;
                if (!plateNo) {
                    console.warn('PlateNo is empty for artifact:', artifact);
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

        return photos;
    } catch (error) {
        console.error('Error fetching artifacts:', error);
        return [];
    }
};
