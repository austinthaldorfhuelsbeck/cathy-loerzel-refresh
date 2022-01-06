// Import Dependencies
const dotenv = require('dotenv');

// Utilize environment variables
dotenv.config();

// Import app and define port to run server
const app = require('./app')
const { PORT = 5000 } = process.env;

// Define and run listener
const listener = () => console.log(`Server running on Port ${PORT}!`);
app.listen(PORT, listener);
