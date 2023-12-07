const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true }
},{
  versionKey: false,
});

const Autor = mongoose.model('Autor', autorSchema);

module.exports = Autor;
