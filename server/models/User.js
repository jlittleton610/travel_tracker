// Skeleton for the User model using Mongoose

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // Define fields for the user (e.g., name, email, password, saved places)
});

module.exports = mongoose.model('User', UserSchema);