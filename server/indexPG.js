// // create new server for k6

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const Postgres = require('../db/indexPG.js');

// const app = express();
// const port = 3111;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/../client/dist'));

// app.listen(port, () => console.log(`server is listening on port ${port}...`))

// // Get room information with given roomID
// app.get('/api/rooms/:roomID', (req, res) => {
//   Postgres.getReservation(req.params.roomID)
//     .then(data => res.status(200).send(data))
// });

// // Make a reservation
// app.post('/api/reservations', (req, res) => {
//   Postgres.postReservation(req.body)
//     .then(data => res.status(200).send(data))
// });

// Change a reservation with the reservation ID
// app.put('/api/reservations/:reservationID'), (req, res) => {
//   const id = req.params.reservationID;
//   const request = req.body;
//   Controller.updateReservation()

// });
