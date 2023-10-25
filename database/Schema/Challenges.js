const mongoose = require('mongoose');

ChallengesSchema = new mongoose.Schema({
    author: mongoose.SchemaTypes.String,
    authorID: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String,
    language: mongoose.SchemaTypes.String,
    description: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('challenges', ChallengesSchema);