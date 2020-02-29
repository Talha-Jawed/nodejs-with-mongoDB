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

var imageUpload = mongoose.Schema({
    imageName: {
        type: String,
        required: true
    },
    cloudImage: {
        type: String,
        required: true
    },
    imageId: {
        type: String
    }
});


const User = mongoose.model('user', userSchema);
const UserData = mongoose.model('userData', userDataSchema);
const SignUp = mongoose.model('userSignUp', userSignUp);
const ImageUpload = mongoose.model('imageUpload', imageUpload);


module.exports = {
    User,
    UserData,
    SignUp,
    ImageUpload
}