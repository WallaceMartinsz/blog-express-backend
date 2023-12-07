const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  texto: { type: String, required: true }
},{
  versionKey: false,
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
