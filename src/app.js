const express = require('express');
const connectDb = require('./db/dbConnection.js');
const postController = require('./controller/postController.js');
const cors = require('cors');

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

connectDb();

app.get('/api/posts', postController.getAllPosts);
app.get('/api/posts/:id', postController.getPostById);
app.post('/api/posts', postController.createPost);
app.put('/api/posts/:id', postController.updatePost);
app.delete('/api/posts/:id', postController.deletePost);

module.exports = app;
