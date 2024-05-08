const mongoose = require('mongoose');

GamersSchema = new mongoose.Schema({
    name: mongoose.SchemaTypes.String,
    steamName: mongoose.SchemaTypes.String,
    psnName: mongoose.SchemaTypes.String,
    xboxName: mongoose.SchemaTypes.String,
    epicName: mongoose.SchemaTypes.String,
    eaName: mongoose.SchemaTypes.String,
    games: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('gamers', GamersSchema);