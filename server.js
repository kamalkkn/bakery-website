// Import the necessary modules
const express = require('express');
const path = require('path');
const mysql = require('mysql2');

// Initialize the Express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Serve static files (like HTML, CSS, and images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'db', // Change 'mysql' to 'db'
    user: process.env.MYSQL_USER || 'user', // Use environment variables for better flexibility
    password: process.env.MYSQL_PASSWORD || 'user_password', // Use environment variables
    database: process.env.MYSQL_DATABASE || 'bakery_db' // Use environment variables
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to get products from the database
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add your routes here

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

