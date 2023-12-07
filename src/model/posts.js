const mongoose = require('mongoose');
const autorSchema = require('./autor.js');
const comentarioSchema = require('./comentario.js');

const postSchema = new mongoose.Schema({
  autor: { type: mongoose.Schema.Types.ObjectId, ref: autorSchema , required: true },
  assunto: { type: String, required: true },
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  img: { type: String, required: true },
  coments: [{ type: mongoose.Schema.Types.ObjectId, ref: comentarioSchema }]
}, {
  versionKey: false,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
