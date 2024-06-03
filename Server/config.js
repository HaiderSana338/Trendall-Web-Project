// config.js

module.exports = {
    // AWS configuration
    aws: {
      region: 'ap-southeast-2', // Replace 'your-aws-region' with your AWS region
      accessKeyId: 'aws_access_Key', // Replace 'your-access-key-id' with your AWS access key ID
      secretAccessKey: 'aws_secret_Key', // Replace 'your-secret-access-key' with your AWS secret access key
      tableName: 'ArtifactTable', // Name of your DynamoDB table
    },
    
    // Server configuration
    server: {
      port: process.env.PORT || 5001, // Port for the server to listen on
    },
    
    // Other configuration settings...
  };
  






  
