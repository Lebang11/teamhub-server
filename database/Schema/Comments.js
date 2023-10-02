const mongoose = require('mongoose');

CommentsSchema = new mongoose.Schema({
    author: mongoose.SchemaTypes.String,
    text: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.String,
    blogid: mongoose.SchemaTypes.String,
});

module.exports = mongoose.model('comments', CommentsSchema);