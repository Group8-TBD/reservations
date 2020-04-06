const faker = require('faker');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const csvWriter = createCsvWriter({
  path: './fakeData/rooms.csv',
  header:[
    {id:'id', title: 'id'},
    {id:'room_location', title: 'room_location'},
    {id:'rating', title: 'rating'},
    {id:'rating_count', title: 'rating_count'},
    {id:'max_guests', title: 'max_guests'},
    {id:'tax', title: 'tax'},
    {id:'service_fee', title: 'service_fee'},
  ]
});

let rooms = [];
let count = 1000000;

const generateData = () => {
  for (var i = 1; i <= count; i++) {
    const room_location = faker.fake(`{{address.city}}`);
    const rating = Number((Math.random() * 1.5 + 3.5).toFixed(2));
    const rating_count = Math.floor(Math.random() * 480 + 20);
    const max_guests = faker.random.number({ min: 2, max: 15 });;
    const tax = .103 ;
    const service_fee = .09 ;

    let room = {
      id: i,
      room_location: room_location,
      rating: rating,
      rating_count: rating_count,
      max_guests: max_guests,
      tax: tax,
      service_fee: service_fee,
    };
    rooms.push(room);
  }
  return rooms;
}

var startTime = new Date().getTime();
csvWriter.writeRecords(generateData())       // returns a promise
  .then(() => {
    var endTime = new Date().getTime();
    console.log("Took: " + (endTime - startTime) + "ms");
    console.log('...Done writing csv');
  }).catch(() => {
    console.log('error writing csv');
  });