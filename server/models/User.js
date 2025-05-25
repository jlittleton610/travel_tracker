// Skeleton for the User model using Mongoose

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    places: {
        type: [Object],
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);