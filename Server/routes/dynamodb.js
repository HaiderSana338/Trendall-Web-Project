const AWS = require('aws-sdk');
const config = require('../config');

// Configure AWS SDK using environment variables
AWS.config.update({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region
});

// Create DynamoDB DocumentClient
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = docClient;
