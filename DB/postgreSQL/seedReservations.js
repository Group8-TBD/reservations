const faker = require('faker');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'db/fakeData/reservations.csv',
  header:[
    {id:'id', title: 'id'},
    {id:'checkin', title: 'checkin'},
    {id:'checkout', title: 'checkout'},
    {id:'adults', title: 'adults'},
    {id:'children', title: 'children'},
    {id:'infants', title: 'infants'},
    {id:'total_cost', title: 'total_cost'},
    {id:'tax', title: 'tax'},
    {id:'service_charge', title: 'service_charge'}
  ]
});

let reservations = [];
let count = 1000000;
// let count = 10;

const generateData = () => {
  for (var i = 1; i <= count; i++) {
    const checkin = faker.date.between('2020-04-10', '2020-05-20').toString().slice(4, 15);
    const checkout = faker.date.between(checkin, '2020-05-25').toString().slice(4, 15);
    const adults = faker.random.number({ min: 1, max: 10 });
    const children = faker.random.number({ min: 0, max: 5 });
    const infants = faker.random.number({ min: 0, max: 5 });
    const total_cost = faker.random.number({ min: 1000, max: 900});
    const tax = Math.floor(total_cost * 0.15);
    const service_charge = Math.floor(total_cost * 0.18);

    let reservation = {
      id: i,
      checkin: checkin,
      checkout: checkout,
      adults: adults,
      children: children,
      infants: infants,
      total_cost: total_cost,
      tax: tax,
      service_charge: service_charge
    };
    reservations.push(reservation);
  }
  return reservations;
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
