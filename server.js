require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");

// route imports
const userRoutes = require('./routes/user')
const destinationRoutes = require('./routes/destinationRoutes');
const userReservation = require('./routes/reservation')

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/reservations', userReservation)
app.use('/user', userRoutes)
app.use('/api/destinations', destinationRoutes);


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })