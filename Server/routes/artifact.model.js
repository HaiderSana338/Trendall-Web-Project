// artifacts.model.js
const { DynamoDBClient, PutCommand, GetCommand, DeleteCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const docClient = require('./dynamodb'); // Import DynamoDB document client

// Define the artifact model
const Artifact = {
  ReferenceNo: { type: 'string', required: true },
  AdditionalNotes: { type: 'string' },
  ArtifactType: { type: 'string', required: true },
  BibliographicReferences: { type: 'string' },
  Diameter: { type: 'string' },
  Height: { type: 'number' },
  ImageryDescription: { type: 'string' },
  InventoryID: { type: 'string', required: true },
  Provenience: { type: 'string', required: true },
  PlateNo: { type: 'number' },
  Artist: {type: 'string'},
  Technique: {type: 'string'},
  Inscription: {type: 'string'}
};
  
  module.exports = Artifact;
  
  