const mongoose = require('mongoose');
const autorSchema = require('./autor.js');
const comentarioSchema = require('./comentario.js');

const schema = new mongoose.Schema({
  autor: {type: autorSchema, required: true },
  assunto: { type: String, required: true },
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  img: { type: String, required: true },
  coments: [comentarioSchema]
}, {
  versionKey: false,
});

const Schema = mongoose.model('Posts', schema);

module.exports = Schema;