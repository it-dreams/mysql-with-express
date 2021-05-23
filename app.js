const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create Connection
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password: '',
    database: 'education_blog'
});

// DB Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected...');
})


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})