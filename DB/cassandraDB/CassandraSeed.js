const faker = require('faker');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;




const csvWriter = createCsvWriter({
  path: 'db/fakeData/cassandraRoom.csv',
  header:[
    {id:'room_id', title: 'room_id'},
    {id:'room_location', title: 'room_location'},
    {id:'price', title: 'price'},
    {id:'rating', title: 'rating'},
    {id:'rating_count', title: 'rating_count'},
    {id:'max_guests', title: 'max_guests'},
    {id:'room_tax', title: 'room_tax'},
    {id:'service_fee', title: 'service_fee'},

    {id:'checkin', title: 'checkin'},
    {id:'checkout', title: 'checkout'},
    {id:'adults', title: 'adults'},
    {id:'children', title: 'children'},
    {id:'infants', title: 'infants'},
    {id:'total_cost', title: 'total_cost'},
    {id:'total_tax', title: 'total_tax'},
    {id:'service_charge', title: 'service_charge'},

    {id:'user_id', title: 'user_id'},
    {id:'userName', title: 'userName'},

  ]
});

let rooms = [];
let count = 1000000;
//let count = 10;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateData = () => {
  for (var i = 1; i <= count; i++) {
    const room_id = faker.random.uuid();
    const room_location = faker.fake(`{{address.city}}`);
    const price = Math.floor(Math.random() * 375 + 25);
    const rating = Number((Math.random() * 1.5 + 3.5).toFixed(2));
    const rating_count = Math.floor(Math.random() * 480 + 20);
    const max_guests = faker.random.number({ min: 2, max: 15 });;
    const room_tax = 0.13 ;
    const service_fee = 0.1;

    const checkin = faker.date.between('2020-04-10', '2020-05-20').toString().slice(4, 15);
    const checkout = faker.date.between(checkin, '2020-05-25').toString().slice(4, 15);
    const adults = faker.random.number({ min: 1, max: 10 });
    const children = faker.random.number({ min: 0, max: 5 });
    const infants = faker.random.number({ min: 0, max: 5 });
    const total_cost = faker.random.number({ min: 1000, max: 900});
    const total_tax = Math.floor(total_cost * 0.15);
    const service_charge = Math.floor(total_cost * 0.18);

    const user_id = randomInt(1, 10000000);
    const userName = faker.name.firstName();

    let room = {
      room_id: room_id,
      room_location: room_location,
      price: price,
      rating: rating,
      rating_count: rating_count,
      max_guests: max_guests,
      room_tax: room_tax,
      service_fee: service_fee,

      checkin: checkin,
      checkout: checkout,
      adults: adults,
      children: children,
      infants: infants,
      total_cost: total_cost,
      total_tax: total_tax,
      service_charge: service_charge,

      user_id: user_id,
      userName: userName
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