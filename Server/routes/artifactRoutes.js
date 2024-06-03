const express = require('express');
const router = express.Router();
const artifactHandlers = require('./artifacthandlers');

// Routes for artifacts
router.put('/artifacts', artifactHandlers.addArtifact);
router.get('/artifacts', artifactHandlers.getAllArtifacts);
router.get('/artifacts/:ReferenceNo', artifactHandlers.getArtifactByReferenceNo);
router.delete('/artifacts/:ReferenceNo', artifactHandlers.deleteArtifactByReferenceNo);

// Route to search for artifacts
router.get('/artifacts/search', artifactHandlers.searchArtifacts);
router.get('/artifacts/search/:ReferenceNo', artifactHandlers.searchArtifactsByReferenceNo);
// Route to search artifacts by ArtifactType
router.get('/artifacts/ArtifactType/:ArtifactType', artifactHandlers.searchArtifactsByArtifactType);
router.get('/artifacts/ArtifactType/${searchQuery}', artifactHandlers.searchArtifactsByArtifactType);

// Route to search artifacts by Provenience
router.get('/artifacts/Provenience/:Provenience', artifactHandlers.searchArtifactsByProvenience);
router.get('/artifacts/Provenience/${searchQuery}', artifactHandlers.searchArtifactsByProvenience);

// Route to search artifacts by InventoryID
router.get('/artifacts/InventoryID/:InventoryID', artifactHandlers.searchArtifactsByInventoryID);
router.get('/artifacts/InventoryID/${searchQuery}', artifactHandlers.searchArtifactsByInventoryID);

router.get('/suggestions', artifactHandlers.fetchSuggestions);

module.exports = router;



