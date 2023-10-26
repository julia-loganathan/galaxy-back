const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Créer une destination
router.post('/create', destinationController.createDestination);

// Obtenir la liste de toutes les destinations
router.get('/destination', destinationController.getAllDestinations);

// Obtenir les détails d'une destination par son ID
router.get('/:id', destinationController.getDestinationById);

// Route pour la racine de l'application
router.get('/', (req, res) => {
    res.send('Bienvenue sur Galaxy Tour!');
});
module.exports = router;
