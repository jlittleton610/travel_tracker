// Skeleton for places routes

const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

// Route to add a new place
router.post('/', async (req, res) => {
    // Get user, name, category, and address from request body
    const { user, name, category, address } = req.body;
    try{
        // Create and save new place
        const place = new Place({ user, name, category, address });
        await place.save();
        res.status(201).json({ msg: 'Place added', place });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

// Route to get all places for a user
router.get('/:userId', async (req, res) => {
    try {
        // Find all places for userId
        const places = await Place.find({ user: req.params.userId });
        res.json(places);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error' });
    }

});

module.exports = router;