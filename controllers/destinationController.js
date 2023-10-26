const Destination = require('../models/destination');

// ajt
exports.createDestination = async (req, res) => {
    try {
        const newDestination = new Destination(req.body);
        await newDestination.save();
        res.status(201).json(newDestination);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la destination' });
    }
};

// liste
exports.getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des destinations' });
    }
};

// detail
exports.getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ error: 'Destination non trouvée' });
        }
        res.json(destination);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la destination' });
    }
};
