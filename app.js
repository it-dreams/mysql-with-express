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

// Create Table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert Post 1
app.get('/insertpost1', (req, res) => {
    let post = { title: 'post 1', body: 'This is a first post' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert Post 2
app.get('/insertpost2', (req, res) => {
    let post = { title: 'post two', body: 'This is a first post' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select all Posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('fetched posts...');
    });
});

// Select single Post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('fetched single post...');
    });
});

// Updated Post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete Post
app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})