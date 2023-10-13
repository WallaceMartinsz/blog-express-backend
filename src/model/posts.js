const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  autor: { type: String, required: true },
  assunto: { type: String, required: true },
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  img: { type: String, required: true },
}, {
  versionKey: false,
});

const Schema = mongoose.model('Posts', schema);

module.exports = Schema;