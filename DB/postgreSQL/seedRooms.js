const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();


const dataGen = () => {
  writer.pipe(fs.createWriteStream(path.resolve(__dirname, '../fakeData/room.csv')));
  console.log('Starting rooms...');
  console.time('Rooms');

  for (let i = 0; i < 10000000; i++) {
    writer.write({
      id: i,
      price: Math.floor(Math.random() * 375 + 25),
      rating: Number((Math.random() * 1.5 + 3.5).toFixed(2)),
      rating_count: Math.floor(Math.random() * 480 + 20),
      max_guests: faker.random.number({ min: 2, max: 15 }),
      tax: 0.13,
      service_fee: 0.1
    });

    if (i % 10000000 === 0) {
      console.log(`${i / 10000000}% done...`)
    }
  }

  writer.end();
  console.timeEnd('Rooms');
}

dataGen();







// const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//   path: 'db/fakeData/room2.csv',
//   header:[
//     {id:'id', title: 'id'},
//     {id:'price', title: 'price'},
//     {id:'rating', title: 'rating'},
//     {id:'rating_count', title: 'rating_count'},
//     {id:'max_guests', title: 'max_guests'},
//     {id:'tax', title: 'tax'},
//     {id:'service_fee', title: 'service_fee'},
//   ]
// });

// let rooms = [];
// //let count = 10000000;
// let count = 50;

// const generateData = () => {
//   for (var i = 1; i <= count; i++) {
//     // const room_location = faker.fake(`{{address.city}}`);
//     const price = Math.floor(Math.random() * 375 + 25);
//     const rating = Number((Math.random() * 1.5 + 3.5).toFixed(2));
//     const rating_count = Math.floor(Math.random() * 480 + 20);
//     const max_guests = faker.random.number({ min: 2, max: 15 });;
//     const tax = 0.13 ;
//     const service_fee = 0.1 ;

//     let room = {
//       id: i,
//       // room_location: room_location,
//       price: price,
//       rating: rating,
//       rating_count: rating_count,
//       max_guests: max_guests,
//       tax: tax,
//       service_fee: service_fee,
//     };
//     rooms.push(room);
//   }
//   return rooms;
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