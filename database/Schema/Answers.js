const mongoose = require('mongoose');

AnswersSchema = new mongoose.Schema({
    authorID: mongoose.SchemaTypes.String,
    author: mongoose.SchemaTypes.String,
    text: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.String,
    filename: mongoose.SchemaTypes.String,
    blogid: mongoose.SchemaTypes.String,
});

module.exports = mongoose.model('answers', AnswersSchema);