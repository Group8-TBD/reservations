const Model = require('../models/CRUD-reservation.js');


// Get
const getReservation = (req, res) => {
  //console.log(req.params.id)
  const { roomId } = req.params;
  Model.getReservation(roomId, (err, results) => {
    if (err) {
      console.log('get err from controllers', err) ;
    } else {
      res.status(200);
      res.send(results);
    }
  });
};

// Post
const postReservation = (req, res) => {
  const { reservationId, checkIn, checkOut, adults, children, infants,cost, tax, service_charge, roomId } = req.body;
  Model.postReservation(reservationId, checkIn, checkOut, adults, children, infants,cost, tax, service_charge, roomId, (err, results) => {
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
  const reservationId = req.params.id;
  const request = req.body;
  Model.updateReservation(reservationId, request, (err, results) => {
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
  const reservationId = req.params;
  Model.deleteReservation(reservationId, (err, results) => {
    if (err) {
      console.log('delete err from controller', err);
    } else {
      res.send(reservation);
    }
  })
}

module.exports = { getReservation, postReservation, updateReservation, deleteReservation };



// const getProperty = (req, res) => {
//   Model.getOneProperty(req, (err, data) => {
//     if (err) {
//       console.log('err in controller getProperty', err);
//       res.sendStatus(400);
//     } else {
//       res.status(202);
//       res.send(data);
//     }
//   });
// };
