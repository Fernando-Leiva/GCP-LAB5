const mysql = require("mysql");

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_IP_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATA_BASE,
});

module.exports = connection