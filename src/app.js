const express = require('express');
const connectDb = require('./db/dbConnection.js');
const postController = require('./controller/postController.js');

const app = express();

app.use(express.json()); 

connectDb();

app.get('/api/posts', postController.getAllPosts);
app.get('/api/posts/:id', postController.getPostById);
app.post('/api/posts', postController.createPost);
app.put('/api/posts/:id', postController.updatePost);
app.delete('/api/posts/:id', postController.deletePost);


module.exports = app;