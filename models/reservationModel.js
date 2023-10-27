const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  voyage: {
    type: Number,
    ref: 'Voyage',
    required: true
  },
  dateReservation: {
    type: Date,
    default: Date.now
  },
  nombrePlaces: {
    type: Number,
    required: true
  },
  dateDebutVoyage: {
    type: Date,
    required: true
  },
  annuleParAdmin: {
    type: Boolean,
    default: false
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;