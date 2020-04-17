//const db = require('../../db/index.js');
const pool = require('../../db/indexPG.js');
const faker = require('faker');

// GET reservation
const getReservation = (id, callback) => {
  const qString = `select * from public.reservations where id = ${id}`;
  pool.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// POST reservation
const postReservation = (reservationId, checkIn, checkOut, adults, children, infants,cost, tax, service_charge, roomId, callback) => {
  const qString = `insert into reservations (id, checkin, checkout, adults, children, infants, cost, tax, service_charge, property_id) VALUES (${reservationId}, ${checkIn}, ${checkOut}, ${adults}, ${children}, ${infants}, ${cost}, ${tax}, ${service_charge}, ${roomId})`;
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// UPDATE reservation
const updateReservation = (reservationId, request, callback) => {
  const qString = `update reservation SET checkin=${checkIn}, checkout=${checkOut}, adults=${adults}, children=${children}, infants=${infants}, cost=${cost}, tax=${tax}, service_charge=${service_charge} where property_id=${roomId}`
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

// DELETE reservation
const deleteReservation = (reservationId, callback) => {
  const qString = `delete from reservation reservation where id=${reservationId}`;
  db.query(qString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports = {getReservation, postReservation, updateReservation, deleteReservation };


// const getOneProperty = (value, callback) => {
//   let randomId = Math.floor(Math.random() * 100)
//   const qString = `SELECT * FROM properties WHERE id = '${randomId}'`;
//   db.query(qString, callback)
// };