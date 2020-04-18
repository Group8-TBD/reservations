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
const getReservation = (roomId) => {
  return pool.query(`select * from rooms where rooms.id = ${roomId}`)
    .then(data => data)
    .catch(err => console.log(err.stack))
}



module.exports = { pool, getReservation };


// AWS connection config
// const pool = new Pool({
//   user: "postgres",
//   host: "172.31.41.174", //private ID
//   database: "ec2airbnb",
//   port: 5432,
// })