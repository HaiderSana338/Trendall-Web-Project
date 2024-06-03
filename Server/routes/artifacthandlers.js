const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const axios = require('axios');
const docClient = require('./dynamodb');
const config = require('../config');
const { DynamoDBClient, ScanCommand, GetCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const client = new DynamoDBClient({ region: config.aws.region }); // Replace "your-region" with your AWS region

// Initialize AWS S3 SDK
const s3 = new AWS.S3();

const tableName = "ArtifactTable";

// Handler function to add an artifact
const addArtifact = async (req, res) => {
  try {
    const { ReferenceNo, ArtifactType, InventoryID, Provenience, Height, Diameter, BibliographicReferences, ImageryDescription, AdditionalNotes } = req.body;

    await docClient.put({
      TableName: tableName,
      Item: {
        ReferenceNo,
        ArtifactType,
        InventoryID,
        Provenience,
        Height,
        Diameter,
        BibliographicReferences,
        ImageryDescription,
        AdditionalNotes,
      },
    }).promise();

    res.status(201).json({ message: 'Artifact added successfully' });
  } catch (error) {
    console.error('Error adding artifact:', error);
    res.status(500).json({ error: 'An error occurred while adding the artifact' });
  }
};

// Handler function to retrieve all artifacts
const getAllArtifacts = async (req, res) => {
  try {
    const { Items } = await docClient.scan({ TableName: tableName }).promise();
    res.json(Items);
  } catch (error) {
    console.error('Error retrieving artifacts:', error);
    res.status(500).json({ error: 'An error occurred while retrieving artifacts' });
  }
};

const getArtifactByReferenceNo = async (req, res) => {
  const { ReferenceNo } = req.params;
  try {
    const { Item } = await docClient.get({ TableName: tableName, Key: { ReferenceNo } }).promise();
    if (!Item) {
      res.status(404).json({ error: 'Artifact not found' });
    } else {
      res.json(Item);
    }
  } catch (error) {
    console.error('Error retrieving artifact:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the artifact' });
  }
};



// Handler function to delete an artifact by ReferenceNo
const deleteArtifactByReferenceNo = async (req, res) => {
  const { ReferenceNo } = req.params;
  try {
    await docClient.delete({ TableName: tableName, Key: { ReferenceNo } }).promise();
    res.json({ message: `Artifact with ReferenceNo ${ReferenceNo} deleted successfully` });
  } catch (error) {
    console.error('Error deleting artifact:', error);
    res.status(500).json({ error: 'An error occurred while deleting the artifact' });
  }
};

// Handler function to search artifacts
const searchArtifacts = async (req, res) => {
  const { ReferenceNo, ArtifactType, InventoryID, Provenience } = req.query;
  try {
    let params = {
      TableName: tableName,
      FilterExpression: 'contains(ReferenceNo, :ReferenceNo) and contains(ArtifactType, :ArtifactType) and contains(InventoryID, :InventoryID) and contains(Provenience, :Provenience)',
      ExpressionAttributeValues: {
        ':ReferenceNo': ReferenceNo || '',
        ':ArtifactType': ArtifactType || '',
        ':InventoryID': InventoryID || '',
        ':Provenience': Provenience || ''
      }
    };

    // Remove empty attribute values
    Object.keys(params.ExpressionAttributeValues).forEach(key => {
      if (!params.ExpressionAttributeValues[key]) {
        delete params.ExpressionAttributeValues[key];
      }
    });

    const { Items } = await docClient.scan(params).promise();

    // Fetch image URLs and add them to artifacts
    const artifactsWithImages = await Promise.all(Items.map(async (artifact) => {
      try {
        const plateNo = artifact.PlateNo;
        const imageURL = `https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg
`;
        const imageResponse = await axios.get(imageURL, { responseType: 'arraybuffer' });
        if (imageResponse.status !== 200) {
          throw new Error('Network response for image was not ok');
        }
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');
        const imageBase64 = `data:image/jpeg;base64,${imageBuffer}`;
        // Add image URL to artifact object
        return { ...artifact, imageURL: imageBase64 };
      } catch (error) {
        console.error('Error fetching image:', error);
        // If fetching image fails, return artifact without image URL
        return artifact;
      }
    }));

    res.json(artifactsWithImages);
  } catch (error) {
    console.error('Error searching artifacts:', error);
    res.status(500).json({ error: 'An error occurred while searching artifacts' });
  }
};




// Handler function to search artifacts by ReferenceNo
const searchArtifactsByReferenceNo = async (req, res) => {
  const { ReferenceNo } = req.params;
  try {
    const params = {
      TableName: tableName,
      FilterExpression: 'contains(ReferenceNo, :ReferenceNo)',
      ExpressionAttributeValues: {
        ':ReferenceNo': ReferenceNo || ''
      }
    };

    // Check if ReferenceNo is empty and remove it from ExpressionAttributeValues if so
    if (!params.ExpressionAttributeValues[':ReferenceNo']) {
      delete params.ExpressionAttributeValues[':ReferenceNo'];
    }

    const { Items } = await docClient.scan(params).promise();

    // Map over the items and include image URL for each artifact
    const artifactsWithImages = await Promise.all(Items.map(async (artifact) => {
      try {
        const plateNo = artifact.PlateNo.N; // Extract PlateNo from the artifact
        if (!plateNo) {
          console.warn('PlateNo is empty for ReferenceNo:', ReferenceNo);
          return artifact; // Return artifact without image URL
        }
        const imageURL = `https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg
`; // Construct S3 image URL
        const imageResponse = await axios.get(imageURL, { responseType: 'arraybuffer' });
        if (imageResponse.status !== 200) {
          throw new Error('Network response for image was not ok');
        }
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');
        const imageBase64 = `data:image/jpeg;base64,${imageBuffer}`;
        return {
          ...artifact,
          ImageURL: imageBase64 // Include image URL in the artifact object
        };
      } catch (error) {
        console.error('Error fetching image:', error);
        // If fetching image fails, return artifact without image URL
        return artifact;
      }
    }));

    res.json(artifactsWithImages); // Return artifacts with image URLs in the response
  } catch (error) {
    console.error('Error searching artifacts by ReferenceNo:', error);
    res.status(500).json({ error: 'An error occurred while searching artifacts by ReferenceNo' });
  }
};


// Handler function to search artifacts by ArtifactType
const searchArtifactsByArtifactType = async (req, res) => {
  const { ArtifactType } = req.params;
  try {
    const params = {
      TableName: tableName,
      FilterExpression: 'contains(ArtifactType, :ArtifactType)',
      ExpressionAttributeValues: {
        ':ArtifactType': ArtifactType || ''
      }
    };

    // Check if ArtifactType is empty and remove it from ExpressionAttributeValues if so
    if (!params.ExpressionAttributeValues[':ArtifactType']) {
      delete params.ExpressionAttributeValues[':ArtifactType'];
    }

    const { Items } = await docClient.scan(params).promise();

    // Map over the items and include image URL for each artifact
    const artifactsWithImages = await Promise.all(Items.map(async (artifact) => {
      try {
        const plateNo = artifact.PlateNo.N; // Extract PlateNo from the artifact
        if (!plateNo) {
          console.warn('PlateNo is empty for ArtifactType:', ArtifactType);
          return artifact; // Return artifact without image URL
        }
        const imageURL = `https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg
`; // Construct S3 image URL
        const imageResponse = await axios.get(imageURL, { responseType: 'arraybuffer' });
        if (imageResponse.status !== 200) {
          throw new Error('Network response for image was not ok');
        }
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');
        const imageBase64 = `data:image/jpeg;base64,${imageBuffer}`;
        return {
          ...artifact,
          ImageURL: imageBase64 // Include image URL in the artifact object
        };
      } catch (error) {
        console.error('Error fetching image:', error);
        // If fetching image fails, return artifact without image URL
        return artifact;
      }
    }));

    res.json(artifactsWithImages); // Return artifacts with image URLs in the response
  } catch (error) {
    console.error('Error searching artifacts by ArtifactType:', error);
    res.status(500).json({ error: 'An error occurred while searching artifacts by ArtifactType' });
  }
};



// Handler function to search artifacts by Provenience
const searchArtifactsByProvenience = async (req, res) => {
  const { Provenience } = req.params;
  try {
    const params = {
      TableName: tableName,
      FilterExpression: 'contains(Provenience, :Provenience)',
      ExpressionAttributeValues: {
        ':Provenience': Provenience || ''
      }
    };

    // Check if Provenience is empty and remove it from ExpressionAttributeValues if so
    if (!params.ExpressionAttributeValues[':Provenience']) {
      delete params.ExpressionAttributeValues[':Provenience'];
    }

    const { Items } = await docClient.scan(params).promise();

    // Map over the items and include image URL for each artifact
    const artifactsWithImages = await Promise.all(Items.map(async (artifact) => {
      try {
        const plateNo = artifact.PlateNo.N; // Extract PlateNo from the artifact
        if (!plateNo) {
          console.warn('PlateNo is empty for Provenience:', Provenience);
          return artifact; // Return artifact without image URL
        }
        const imageURL = `https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg
`; // Construct S3 image URL
        const imageResponse = await axios.get(imageURL, { responseType: 'arraybuffer' });
        if (imageResponse.status !== 200) {
          throw new Error('Network response for image was not ok');
        }
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');
        const imageBase64 = `data:image/jpeg;base64,${imageBuffer}`;
        return {
          ...artifact,
          ImageURL: imageBase64 // Include image URL in the artifact object
        };
      } catch (error) {
        console.error('Error fetching image:', error);
        // If fetching image fails, return artifact without image URL
        return artifact;
      }
    }));

    res.json(artifactsWithImages); // Return artifacts with image URLs in the response
  } catch (error) {
    console.error('Error searching artifacts by Provenience:', error);
    res.status(500).json({ error: 'An error occurred while searching artifacts by Provenience' });
  }
};

const searchArtifactsByInventoryID = async (req, res) => {
  const { InventoryID } = req.params;
  try {
    let params = {
      TableName: tableName,
    };

    if (InventoryID) {
      if (InventoryID.length === 1) {
        // If InventoryID is one character, perform begins_with query
        params.FilterExpression = 'begins_with(InventoryID, :InventoryID)';
        params.ExpressionAttributeValues = {
          ':InventoryID': InventoryID.toUpperCase(), // Convert to uppercase to ensure case-insensitive search
        };
      } else params.FilterExpression = 'InventoryID = :InventoryID';
      params.ExpressionAttributeValues = {
        ':InventoryID': InventoryID,
      };
    } 
     else {
      // Handle case where InventoryID is missing
      return res.status(400).json({ error: 'InventoryID is missing' });
    }
    const { Items } = await docClient.scan(params).promise();

    

    // Map over the items and include image URL for each artifact
    const artifactsWithImages = await Promise.all(Items.map(async (artifact) => {
      try {
        const plateNo = artifact.PlateNo.S; // Assuming PlateNo is stored as a String (S)
        if (!plateNo) {
          console.warn('PlateNo is empty for InventoryID:', InventoryID);
          return artifact; // Return artifact without image URL
        }
        const imageURL = `https://trendallcentre.s3.ap-southeast-2.amazonaws.com/Plates/${plateNo}.jpg
`; // Construct S3 image URL
        const imageResponse = await axios.get(imageURL, { responseType: 'arraybuffer' });
        if (imageResponse.status !== 200) {
          throw new Error('Network response for image was not ok');
        }
        const imageBuffer = Buffer.from(imageResponse.data, 'binary').toString('base64');
        const imageBase64 = `data:image/jpeg;base64,${imageBuffer}`;
        return {
          ...artifact,
          ImageURL: imageBase64 // Include image URL in the artifact object
        };
      } catch (error) {
        console.error('Error fetching image:', error);
        // If fetching image fails, return artifact without image URL
        return artifact;
      }
    }));

    res.json(artifactsWithImages); // Return artifacts with image URLs in the response
  } catch (error) {
    console.error('Error searching artifacts by InventoryID:', error);
    res.status(500).json({ error: 'An error occurred while searching artifacts by InventoryID' });
  }
};


const fetchSuggestions = async (req, res) => {
  const { q } = req.query; // Query parameter containing user input
  try {
    // Query DynamoDB for artifacts containing the user input in any relevant fields
    const params = {
      TableName: tableName,
      FilterExpression: 'contains(ArtifactType, :query) or contains(Provenience, :query) or contains(InventoryID, :query)',
      ExpressionAttributeValues: {
        ':query': q.toLowerCase() // Convert user input to lowercase for case-insensitive search
      }
    };

    const { Items } = await docClient.scan(params).promise();

    // Extract unique values from matching artifacts and format them as suggestions
    const suggestions = Array.from(new Set(Items.map(item => item.ArtifactType.S.toLowerCase())))
      .concat(Array.from(new Set(Items.map(item => item.Provenience.S.toLowerCase()))))
      .concat(Array.from(new Set(Items.map(item => item.InventoryID.S.toLowerCase()))));

    res.json(suggestions);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'An error occurred while fetching suggestions' });
  }
};



module.exports = {
  addArtifact,
  getAllArtifacts,
  getArtifactByReferenceNo,
  deleteArtifactByReferenceNo,
  searchArtifacts,
  searchArtifactsByReferenceNo,
  searchArtifactsByArtifactType,
  searchArtifactsByProvenience,
  searchArtifactsByInventoryID,
  fetchSuggestions 
};



