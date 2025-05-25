const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route for user registration
router.post('/register', async (req, res) => {
    // Extract name, email, and password from request body
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            // If user already exists, send error
            return res.status(400).json({ msg: 'User already exists'});
        }

        // Create new user
        user = new User({ name, email, password });
        await user.save()

        // Send 201 on successful user creation
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    // Extract email and password from request body
    const { email, password } = req.body;
    // console.log('Login attempt:', email, password); // Testing

    try {
        // Find user by email
        const user = await User.findOne({ email });
        // console.log('User found:', user); // Testing

        if (!user) {
            // console.log('No user found'); // Testing
            // If user not found, send error
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Check if password matches
        if (user.password !== password) {
            // console.log('Password mismatch'); // Testing
            // If password does not match, send error
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // console.log('Login successful'); // Testing
        // If credentials are valid, send success and user info (omit password)
        res.json({ msg: 'Login successful', user: { name: user.name, email: user.email }});
    } catch (err) {
        console.error('Server error:', err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;