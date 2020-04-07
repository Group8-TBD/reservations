const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'db/fakeData/users.csv',
  header:[
    {id:'id', title: 'id'},
    {id:'userName', title: 'userName'},
  ]
});

let users = [];
let count = 1000000;
// let count = 10;

const generateData = () => {
  for (var i = 1; i <= count; i++) {
    const userName = faker.name.firstName();

    let user = {
      id: i,
      userName: userName,
    };
    users.push(user);
  }
  return users;
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