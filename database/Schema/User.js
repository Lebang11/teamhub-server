const mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    email: mongoose.SchemaTypes.String,
    password: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('users', UserSchema);