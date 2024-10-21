const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'db', // Change 'mysql' to 'db'
    user: process.env.MYSQL_USER || 'user',
    password: process.env.MYSQL_PASSWORD || 'user_password',
    database: process.env.MYSQL_DATABASE || 'bakery_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

