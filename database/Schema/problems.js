const mongoose = require('mongoose');

ProblemsSchema = new mongoose.Schema({
    author: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String,
    language: mongoose.SchemaTypes.String,
    text: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.Date
});

module.exports = mongoose.model('problems', ProblemsSchema);