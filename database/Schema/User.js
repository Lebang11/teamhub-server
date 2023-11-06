const mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    username: mongoose.SchemaTypes.String,
    email: mongoose.SchemaTypes.String,
    password: mongoose.SchemaTypes.String,
    imagename: mongoose.SchemaTypes.String,
    about: mongoose.SchemaTypes.String,
    github: mongoose.SchemaTypes.String,
    discord: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('users', UserSchema);