const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    etape: {
        type: String,
        required: true,
    },
    durée: {
        type: String,
        required: true,
    },
    prix_per_jour: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
    }
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
