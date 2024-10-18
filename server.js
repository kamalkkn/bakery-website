// Import the express module
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Serve static files (like HTML, CSS, and images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

