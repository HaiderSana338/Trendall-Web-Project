const express = require('express');
const routes = require('./routes/artifactRoutes');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const allowedOrigins = [
  'http://localhost:3000', // Your local development environment
  'https://main.d21bk4jiynxpjp.amplifyapp.com', // Your Amplify app domain
  'http://54.253.29.51:3000',
  'https://www.trendallwebsite.com/',
];

const corsOptions = {
  origin: function (origin, callback) {
      // Check if the incoming request's origin is in the allowedOrigins array
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  }
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

app.use(morgan('dev'));

// Define routes
app.use('/api', routes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




