const mongoose = require('mongoose');

ProblemsSchema = new mongoose.Schema({
    author: mongoose.SchemaTypes.String,
    authorID: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String,
    language: mongoose.SchemaTypes.String,
    text: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.String,
    filename: mongoose.SchemaTypes.String,
    answerCount: mongoose.SchemaTypes.Number
});

module.exports = mongoose.model('problems', ProblemsSchema);