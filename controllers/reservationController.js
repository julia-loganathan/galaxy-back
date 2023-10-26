const Reservation = require('../models/reservationModel');

const createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* Obtenir toutes les réservations */
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des réservations.' });
  }
};

/* Obtenir une réservation par ID */
const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvée.' });
    }
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération de la réservation.' });
  }
};

/* Obtenir une réservation par userID */
const getReservationsByUser = async (req, res) => {
    try {
      const userId = req.params.userId; // les réservations de user (id utilisateur )
      const reservations = await Reservation.find({ user: userId });
      
      if (!reservations) {
        return res.status(404).json({ error: 'Aucune réservation trouvée pour cet utilisateur.' });
      }
      
      res.json(reservations);
    } catch (err) {
      res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des réservations de l\'utilisateur.' });
    }
  }

/* Mettre à jour une réservation par ID */
const updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvée.' });
    }
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour de la réservation.' });
  }
};

/* Supprimer une réservation par ID */
const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndRemove(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: 'Réservation non trouvée.' });
    }
    res.json({ message: 'Réservation supprimée avec succès.' });
  } catch (err) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de la réservation.' });
  }
};

module.exports = {
    createReservation,
    deleteReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    getReservationsByUser
};
