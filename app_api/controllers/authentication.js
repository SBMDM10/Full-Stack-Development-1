const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

const register = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    try{
        await user.save();
        res.status(200).json({ message: 'Saved' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    try {
        const user = await new Promise((resolve, reject) => {
            passport.authenticate('local', (err, user, info) => {
                if (err) return reject(err);  // Reject on error
                if (!user) return reject(info); // Reject if user not found or invalid
                resolve(user); // Resolve with the user if found
            })(req, res);  // Execute passport authenticate
        });

        // If user is found, generate JWT and send response
        const token = user.generateJwt();
        return res.status(200).json({ token });

    } catch (err) {
        // Error handling: either passport failed or user authentication failed
        return res.status(401).json({ message: 'Authentication failed', error: err.message || err });
    }
};

module.exports = {
register,
login
};