const express = require('express');
const connectDb = require('./db/dbConnection.js');
const postController = require('./controller/postController.js');
const autorController = require('./controller/autorController.js');
const comentController = require('./controller/comentController.js');
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

// Rotas do post
app.get('/api/posts', postController.getAllPosts);
app.get('/api/posts/:id', postController.getPostById);
app.post('/api/posts', postController.createPost);
app.put('/api/posts/:id', postController.updatePost);
app.delete('/api/posts/:id', postController.deletePost);

// Rotas do autor
app.get('/api/autor', autorController.getAllAutores);
app.get('/api/autor/:id', autorController.getAutorById);
app.post('/api/autor', autorController.createAutor);
app.put('/api/autor/:id', autorController.updateAutor);
app.delete('/api/autor/:id', autorController.deleteAutor);

// Rotas dos comentários
app.get('/api/comment', comentController.getAllComentarios);
app.get('/api/comment/:id', comentController.getComentarioById);
app.post('/api/comment', comentController.createComentario);
app.put('/api/comment/:id', comentController.updateComentario);
app.delete('/api/comment/:id', comentController.deleteComentario);

module.exports = app;
