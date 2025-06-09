const mongoose = require('mongoose');

// Define the schema for a place
const PlaceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the place
    name: { type: String, required: true }, // Name of the place
    category: { type: String, required: true }, // Category (restaurant, trail, etc.)
    address: { type: String, required: true }, // Address of the place
    createdAt: { type: Date, default: Date.now } // Timestamp
});

// Export so can be used in routes
module.exports = mongoose.model('Place', PlaceSchema);