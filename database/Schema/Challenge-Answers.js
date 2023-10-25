const mongoose = require('mongoose');

ChallengeAnswersSchema = new mongoose.Schema({
    authorID: mongoose.SchemaTypes.String,
    author: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String,
    date: mongoose.SchemaTypes.String,
    filename: mongoose.SchemaTypes.String,
    challengeID: mongoose.SchemaTypes.String,
});

module.exports = mongoose.model('challenge_answers', ChallengeAnswersSchema);