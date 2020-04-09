const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const TOTAL_RESERVATIONS_TO_GENERATE = 1e7;
const LOG_INTERVAL = 1e5;


const writeUsers = fs.createWriteStream('reservations.csv');
writeUsers.write('id,checkin, checkout, adults, chilren, infants, total_cost, tax, service_charge, room_id, guest_id\n', 'utf8');


const generateDay = (min, max) => {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  if (randomInt < 10 ) {
    return `0${randomInt}`;
  } else {
    return randomInt
  }
}
const randomMonth = () => {
// console.log(Math.floor(Math.random()* 11)+1)
  let randomMonth = Math.floor(Math.random()* 11)+1;
  if ( randomMonth < 10 ) {
    return `0${randomMonth}`;
  } else {
    return randomMonth;
  }
}

const generateReservationDates = () => {
  const month = randomMonth();
  const checkIn = `2020-`+ month + `-${generateDay(1, 15)}`;
  const checkOut = `2020-`+ month + `-${generateDay(16, 28)}`;
  return {checkIn, checkOut};
};


function writeTenMillionUsers(writer, encoding, callback) {
  let i = TOTAL_RESERVATIONS_TO_GENERATE;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let total_cost = faker.random.number({ min: 1000, max: 900});
      const reservationDates = generateReservationDates();
      const checkin = reservationDates.checkIn;
      const checkout = reservationDates.checkOut;
      const adults = faker.random.number({ min: 1, max: 10 });
      const children = faker.random.number({ min: 0, max: 5 });
      const infants = faker.random.number({ min: 0, max: 5 });

      const tax = Math.floor(total_cost * 0.15);
      const service_charge = Math.floor(total_cost * 0.18);
      const room_id = faker.random.number({ min: 1, max: 500000 });
      const guest_id = faker.random.number({ min: 1, max: 500000 });

      const data = `${id},${checkin},${checkout}, ${adults}, ${children}, ${infants}, ${total_cost}, ${tax}, ${service_charge}, ${room_id}, ${guest_id}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});


// const dataGen = () => {
//   writer.pipe(fs.createWriteStream(path.resolve(__dirname, '../fakeData/reservations.csv')));
//   console.log('Starting reservations...');
//   console.time('Reservations');


//   for (let i = 0; i < TOTAL_RESERVATIONS_TO_GENERATE; i++) {
//     // generate correctly-formatted date yyyy-mm-dd
//     let total_cost = faker.random.number({ min: 1000, max: 900});
//     const reservationDates = generateReservationDates();
//     writer.write({
//       id: i,
//       checkin: reservationDates.checkIn,
//       checkout: reservationDates.checkOut,
//       adults: faker.random.number({ min: 1, max: 10 }),
//       children: faker.random.number({ min: 0, max: 5 }),
//       infants: faker.random.number({ min: 0, max: 5 }),
//       total_cost: total_cost,
//       tax: Math.floor(total_cost * 0.15),
//       service_charge: Math.floor(total_cost * 0.18),
//       room_id: faker.random.number({ min: 1, max: 500000 }),
//       guest_id: faker.random.number({ min: 1, max: 500000 })

//     });

//     if (i % LOG_INTERVAL === 0) {
//       console.log(`${i / TOTAL_RESERVATIONS_TO_GENERATE}% done...`)
//     }
//   }

//   writer.end();
//   console.timeEnd('Reservations');
// }

// dataGen();
