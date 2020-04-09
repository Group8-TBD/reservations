const faker = require('faker');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const dataGen = () => {
  writer.pipe(fs.createWriteStream(path.resolve(__dirname, '../fakeData/users.csv')));
  console.log('Starting users...');
  console.time('Users');

  for (let i = 0; i < 10000000; i++) {
    writer.write({
      id: i,
      guestname: `${faker.name.firstName()}`,
    });

    if (i % 10000000 === 0) {
      console.log(`${i / 10000000}% done...`)
    }
  }

  writer.end();
  console.timeEnd('Users');
}

dataGen();


















// const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//   path: 'db/fakeData/users2.csv',
//   header:[
//     {id:'id', title: 'id'},
//     {id:'guestname', title: 'guestname'},
//   ]
// });

// let guests = [];
// let count = 100000;
// //let count = 50;

// const generateData = () => {
//   for (var i = 1; i <= count; i++) {
//     const guestname = faker.name.firstName();

//     let guest = {
//       id: i,
//       guestname: guestname,
//     };
//     guests.push(guest);
//   }
//   return guests;
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