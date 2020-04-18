const newRelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('../server/controllers/CRUD-reservation.js');
const db = require('../db/indexPG.js');
const morgan = require('morgan');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
// console.log(cpus); // total 8

const app = express();
//const port = 3111;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

//app.listen(port, () => console.log(`server is listening on port ${port}...`))

// original
//app.get('/api/properties', Controller.getProperty);

// set up node.js cluster
// rewrite HTTP GET requests in promise, instead of callback
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
      // Create a worker
      cluster.fork();
  }
} else {
  // Workers share the TCP connection in this server
  app.get('/api/reservations/:roomId', (req, res, next) => {
    db.getReservation(req.params.roomId)
      .then(data => res.status(200).send(data))
      .catch(next);
  });

  // All workers use this port
  app.listen(3111);
}





// Get reservation
//app.get('/api/reservations/:roomId', Controller.getReservation);

// Post reservation
app.post('/api/reservations', Controller.postReservation);

// Update reservation
app.patch('/api/reservations/:reservationId', Controller.updateReservation);

// Delete reservation
app.delete('/api/reservations/:reservationId', Controller.deleteReservation);




