const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    date: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;