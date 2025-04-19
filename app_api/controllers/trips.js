const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

if(!q)
{ // Database returned no data
    return res
            .status(404)
            .json(err);
} else  { // Return resulting trip list
    return res
        .status(200)
        .json(q);
    }

};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // No filter, return all records
        .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

if(!q)
{ // Database returned no data
    return res
            .status(404)
            .json(err);
} else  { // Return resulting trip list
    return res
        .status(200)
        .json(q);
    }

};

// POST: /trips/:tripCode - updates a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    try {
        const user = getUser(req);
        if(!user) {
            return res.status(401).json({message: "Unauthorized" });
        }
        const q = await Model.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        // If create is successful
        return res.status(201).json(q);
    
    }   catch (err) {
        // If validation or database error
        return res.status(400).json(err);
    }
};

// PUT: /trips/:tripCode - Updates a trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
    try {
        const user = getUser(req);
        if(!user) {
            return res.status(401).json({message: "Unauthorized" });
        }
        const q = await Model.findOneAndUpdate({'code':req.params.tripCode},
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

        // If update is successful
        return res.status(201).json(q);
    
    }   catch (err) {
        // If validation or database error
        return res.status(400).json(err);
    }
};


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};