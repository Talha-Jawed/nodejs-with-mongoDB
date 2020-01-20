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

var userSignUp = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    password: String,
});

const User = mongoose.model('user', userSchema);
const UserData = mongoose.model('userData', userDataSchema);
const SignUp = mongoose.model('userSignUp', userSignUp);


module.exports = {
    User,
    UserData,
    SignUp
}