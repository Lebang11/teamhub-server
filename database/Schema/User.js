const mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    username: mongoose.SchemaTypes.String,
    email: mongoose.SchemaTypes.String,
    password: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('users', UserSchema);