const db = require('../../db/index.js');

const getOneProperty = (value, callback) => {
  let randomId = Math.floor(Math.random() * 100)
  const qString = `SELECT * FROM properties WHERE id = '${randomId}'`;
  db.query(qString, callback)
};

// GET reservation
const getReservation = (propertyID, callback) => {
  const qString = `select * from properties where id = '${propertyID}'`;
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// POST reservation
const postReservation = (reservationID, checkIn, checkOut, adults, children, infants,cost, tax, service_charge, propertyID, callback) => {
  const qString = `insert into reservation (id, checkin, checkout, adults, children, infants, cost, tax, service_charge, property_id) VALUES (${reservationID}, ${checkIn}, ${checkOut}, ${adults}, ${children}, ${infants}, ${cost}, ${tax}, ${service_charge}, ${propertyID})`;
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// UPDATE reservation
const updateReservation = (reservationID, request, callback) => {
  const qString = `update reservation SET checkin=${checkIn}, checkout=${checkOut}, adults=${adults}, children=${children}, infants=${infants}, cost=${cost}, tax=${tax}, service_charge=${service_charge} where property_id=${propertyID}`
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

// DELETE reservation
const deleteReservation = (reservationID, callback) => {
  const qString = `delete from reservation reservation where id=${reservationID}`;
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports = { getOneProperty, getReservation, postReservation, updateReservation, deleteReservation };