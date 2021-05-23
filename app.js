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

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE education_blog';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    })
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})