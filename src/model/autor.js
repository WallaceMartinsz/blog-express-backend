const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = autorSchema;