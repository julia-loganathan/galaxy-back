const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/', reservationController.createReservation);
router.get('/', reservationController.getAllReservations);
router.get('/:id', reservationController.getReservationById);
router.get('/user/:userId', reservationController.getReservationsByUser);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
