const mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    name : mongoose.SchemaTypes.String,
    email: mongoose.SchemaTypes.String
});

module.exports = mongoose.model('users', UserSchema);