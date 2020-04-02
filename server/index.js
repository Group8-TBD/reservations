const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('../server/controllers/CRUD-reservation.js');
const morgan = require('morgan');

const app = express();
const port = 3111;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`server is listening on port ${port}...`))

// original
app.get('/api/properties', Controller.getProperty);





// Get reservation
app.get('/api/properties/:propertyID', Controller.getReservation);

// Post reservation
app.post('/api/reservation/id/:reservationID', Controller.postReservation);

// Update reservation
app.patch('/api/reservation/id/:reservationID/update', Controller.updateReservation);

// Delete reservation
app.delete('/api/reservation/id/:reservationID/delete', Controller.deleteReservation);




