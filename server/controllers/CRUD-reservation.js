const Model = require('../models/CRUD-reservation.js');

const getProperty = (req, res) => {
  Model.getOneProperty(req, (err, data) => {
    if (err) {
      console.log('err in controller getProperty', err);
      res.sendStatus(400);
    } else {
      res.status(202);
      res.send(data);
    }
  });
};


// Get
const getReservation = (req, res) => {
  const {propertyID} = req.params;
  Model.getReservation(propertyID, (err, results) => {
    if (err) {
      console.log('get err from controllers', err) ;
    } else {
      // what kind of results should I handle
      res.status(202);
      res.send(results);
    }
  });
};

// Post
const postReservation = (req, res) => {
  const { reservationID, checkIn, checkOut, adults, children, infants,cost, tax, service_charge, propertyID } = req.body;
  Model.postReservation(reservationID, checkIn, checkOut, adults, children, infants,cost, tax, service_charge, propertyID, (err, results) => {
    if (err) {
      console.log('post err from controllers', err);
    } else {
      res.status(202);
      res.send(results);
    }
  })
}

// Update
const updateReservation = (req, res) => {
  const reservationID = req.params.id;
  const request = req.body;
  Model.updateReservation(reservationID, request, (err, results) => {
    if (err) {
      console.log('update err from controllers', err);
    } else {
      res.status(202);
      res.send(results);
    }
  })
}

// Delete
const deleteReservation = (req, res) => {
  const reservationID = req.params;
  Model.deleteReservation(reservationID, (err, results) => {
    if (err) {
      console.log('delete err from controller', err);
    } else {
      res.send(reservation);
    }
  })
}

module.exports = { getProperty, getReservation, postReservation, updateReservation, deleteReservation };