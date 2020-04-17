require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: "hui",
  host: process.env.DB_HOST,
  database: "airbnb",
  port: 5432,
})

pool.connect((err) => {
  if (err) {
    console.error('Connection Error', err);
  } else {
    console.log('Connected to Postgres DB');
  }
});


// create new config and server routes for k6

// GET information with a given room id
// const getReservation = (roomID) => {
//   return pool.query(`selection * from rooms where rooms.id = ${roomID}`)
//     .then(roomData => )
// }



module.exports = pool;