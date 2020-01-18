const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    age: String,
    status: { type: Object },
    date: Number
});

var userDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    age: String,
    status: { type: Object },
    date: Number
});

const User = mongoose.model('user', userSchema);
const UserData = mongoose.model('userData', userDataSchema);

module.exports = {
    User,
    UserData
}