const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  texto: { type: String, required: true },
});

module.exports = comentarioSchema;