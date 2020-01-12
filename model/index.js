const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    age: String,
    date: Number
});

const User = mongoose.model('user', userSchema);

module.exports = User;