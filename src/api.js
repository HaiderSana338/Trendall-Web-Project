import axios from 'axios';

const backendUrl = 'https://54.252.229.57/api';

const searchArtifactsByReferenceNo = async (referenceNo) => {
  try {
    const response = await axios.get(`${backendUrl}/api/artifacts/search/${referenceNo}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artifacts by ReferenceNo:', error);
    return [];
  }
};

const searchArtifactsByArtifactType = async (artifactType) => {
  try {
    const response = await axios.get(`${backendUrl}/api/artifacts/ArtifactType/${artifactType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artifacts by ArtifactType:', error);
    return [];
  }
};

const searchArtifactsByInventoryID = async (inventoryID) => {
  try {
    const response = await axios.get(`${backendUrl}/api/artifacts/InventoryID/${inventoryID}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artifacts by InventoryID:', error);
    return [];
  }
};

const searchArtifactsByProvenience = async (provenience) => {
  try {
    const response = await axios.get(`${backendUrl}/api/artifacts/Provenience/${provenience}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artifacts by Provenience:', error);
    return [];
  }
};
