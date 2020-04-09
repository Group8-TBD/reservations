const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();


const dataGen = () => {
  writer.pipe(fs.createWriteStream(path.resolve(__dirname, '../fakeData/reservations.csv')));
  console.log('Starting reservations...');
  console.time('Reservations');
  const randomInt = (min, max) => {
    let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    if (randomInt < 0 ) {
      return `0${randomInt}`;
    } else {
      return randomInt
    }
  }
  // generate correctly-formatted date yyyy-mm-dd
  const randomMonth = () => {
  // console.log(Math.floor(Math.random()* 11)+1)
    let randomMonth = Math.floor(Math.random()* 11)+1;
    if ( randomMonth < 10 ) {
      return `0${randomMonth}`;
    } else {
      return randomMonth;
    }
  }
  for (let i = 0; i < 10; i++) {
    let month = randomMonth();
    randomCheckDates = () => {
    checkIN = `2020-`+ month + `-${randomInt(1, 15)}`;
    checkOut = `2020-`+ month + `-${randomInt(16, 28)}`;
      return {checkIN, checkOut}
    };
    let total_cost = faker.random.number({ min: 1000, max: 900});

    writer.write({
      id: i,
      checkin: randomCheckDates().checkIN,
      checkout: randomCheckDates().checkOut,
      adults: faker.random.number({ min: 1, max: 10 }),
      children: faker.random.number({ min: 0, max: 5 }),
      infants: faker.random.number({ min: 0, max: 5 }),
      total_cost: total_cost,
      tax: Math.floor(total_cost * 0.15),
      service_charge: Math.floor(total_cost * 0.18),
      room_id: faker.random.number({ min: 1, max: 500000 }),
      guest_id: faker.random.number({ min: 1, max: 500000 })

    });

    if (i % 10 === 0) {
      console.log(`${i / 10}% done...`)
    }
  }

  writer.end();
  console.timeEnd('Reservations');
}

dataGen();



// const faker = require('faker');
// const path = require('path');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//   path: 'db/fakeData/reservations.csv',
//   header:[
//     {id:'id', title: 'id'},
//     {id:'checkin', title: 'checkin'},
//     {id:'checkout', title: 'checkout'},
//     {id:'adults', title: 'adults'},
//     {id:'children', title: 'children'},
//     {id:'infants', title: 'infants'},
//     {id:'total_cost', title: 'total_cost'},
//     {id:'tax', title: 'tax'},
//     {id:'service_charge', title: 'service_charge'},
//     {id:'room_id', title: 'room_id'},
//     {id:'guest_id', title: 'guest_id'}
//   ]
// });

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


// // generate correctly-formatted date yyyy-mm-dd
// const randomMonth = () => {
//   // console.log(Math.floor(Math.random()* 11)+1)
//   let randomMonth = Math.floor(Math.random()* 11)+1;
//   if ( randomMonth < 10 ) {
//     return `0${randomMonth}`;
//   } else {
//     return randomMonth;
//   }
// }


// let reservations = [];
// //let count = 1000000;
// //let count = 500000;

// const generateData = () => {
//   for (var i = 1; i <= count; i++) {
//     let month = randomMonth();
//     const randomCheckDates = () => {
//     const checkIN = `2020-`+ month + `-${randomInt(10, 15)}`;
//     const checkOut = `2020-`+ month + `-${randomInt(16, 28)}`;
//       return {checkIN, checkOut}
// }

//     const checkin = randomCheckDates().checkIN;
//     const checkout = randomCheckDates().checkOut;

//     const adults = faker.random.number({ min: 1, max: 10 });
//     const children = faker.random.number({ min: 0, max: 5 });
//     const infants = faker.random.number({ min: 0, max: 5 });
//     const total_cost = faker.random.number({ min: 1000, max: 900});
//     const tax = Math.floor(total_cost * 0.15);
//     const service_charge = Math.floor(total_cost * 0.18);
//     const room_id = faker.random.number({ min: 1, max: 500000 }); //one room can have multiple reservations
//     const guest_id = faker.random.number({ min: 1, max: 500000 });  //one room can server multiple guests
//     // const room_id = 1;
//     // const user_id = 2;

//     let reservation = {
//       id: i,
//       checkin: checkin,
//       checkout: checkout,
//       adults: adults,
//       children: children,
//       infants: infants,
//       total_cost: total_cost,
//       tax: tax,
//       service_charge: service_charge,
//       room_id: room_id,
//       guest_id:guest_id
//     };
//     reservations.push(reservation);
//   }
//   return reservations;
// }

// var startTime = new Date().getTime();
// csvWriter.writeRecords(generateData())       // returns a promise
//   .then(() => {
//     var endTime = new Date().getTime();
//     console.log("Took: " + (endTime - startTime) + "ms");
//     console.log('...Done writing csv');
//   }).catch(() => {
//     console.log('error writing csv');
//   });




​
