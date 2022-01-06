// Import Dependencies
const express = require('express');
const cors = require('cors');
// Import Route handlers
const blogsRoute = require('./routes/blogsRoute');
const eventsRoute = require('./routes/eventsRoute');
const testimonialsRoute = require('./routes/testimonialsRoute');
// Import Error handlers
const notFound = require('./errors/notFound');
const errorHandler = require('./errors/errorHandler');

// Define app
const app = express();

// Middleware for CORS and Express
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Route handlers
app.use('/blogs', blogsRoute);
app.use('/events', eventsRoute);
app.use('/testimonials', testimonialsRoute);

// Eroor handlers
app.use(notFound);
app.use(errorHandler);

// Export module
module.exports = app;