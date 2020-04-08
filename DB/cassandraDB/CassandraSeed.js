const faker = require('faker');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');


const csvWriter = createCsvWriter({
  path: 'db/fakeData/cass20.csv',
  header:[
    {id:'room_id', title: 'room_id'},
    // {id:'room_location', title: 'room_location'},
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

    // {id:'user_id', title: 'user_id'},
    {id:'userName', title: 'userName'}
  ]
});

// 2000 per count, 5000 batches in total = 10 M data
let count = 500000;
let rooms = [];
//let count = 10;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


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
// console.log(randomMonth())
// let month = randomMonth();
// const randomCheckDates = () => {
//   const checkIN = `2020-`+ month + `-${randomInt(1, 15)}`;
//   const checkOut = `2020-`+ month + `-${randomInt(16, 30)}`;
//   return {checkIN, checkOut}
// }
//console.log(`${randomMonth()}-` + `${randomInt(1, 15)}`)
//console.log(randomCheckDates().checkIN);
//console.log(randomCheckDates().checkOut);

//console.log(randomMonth());
//console.log(`2020-`+ month + `-${randomCheckIN()}`)
// console.log(`2020-` + month + `-${randomCheckOUT()}`)

// var dateA = new Date(2020,6,1,0,0,0);
// var dateB = new Date(2020,6,2,0,0,0);
// for(var myDate = dateA; myDate <= dateB; myDate = new Date(myDate.getTime() + 1000 * 60 * 60 * 24))
// {
//     // var formatedDate = myDate.getMonth()+1;
//     // formatedDate += "-" + myDate.getDate() + "-" + myDate.getFullYear();
//     var formatedDate = myDate.getFullYear()+ "-" + myDate.getMonth() + "-" + myDate.getDate()+Math.floor(Math.random()* 25);
//     console.log(formatedDate);
//     console.log(Math.floor(Math.random()* 25))
// }



const generateData = () => {
  for (var i = 1; i <= count; i++) {
    const room_id = faker.random.uuid();
    // const room_location = faker.fake(`{{address.city}}`);
    const price = Math.floor(Math.random() * 375 + 25);
    const rating = Number((Math.random() * 1.5 + 3.5).toFixed(2));
    const rating_count = Math.floor(Math.random() * 480 + 20);
    const max_guests = faker.random.number({ min: 2, max: 15 });;
    const room_tax = 0.13 ;
    const service_fee = 0.1;

    let month = randomMonth();
    const randomCheckDates = () => {
    const checkIN = `2020-`+ month + `-${randomInt(10, 15)}`;
    const checkOut = `2020-`+ month + `-${randomInt(16, 28)}`;
      return {checkIN, checkOut}
}
    // const checkin = faker.date.between('2020-04-10', '2020-05-20').toString().slice(4, 15);
    // const checkout = faker.date.between(checkin, '2020-05-25').toString().slice(4, 15);
    const checkin = randomCheckDates().checkIN;
    const checkout = randomCheckDates().checkOut;
    const adults = faker.random.number({ min: 1, max: 10 });
    const children = faker.random.number({ min: 0, max: 5 });
    const infants = faker.random.number({ min: 0, max: 5 });
    const total_cost = faker.random.number({ min: 1000, max: 900});
    const total_tax = Math.floor(total_cost * 0.15);
    const service_charge = Math.floor(total_cost * 0.18);

    // const user_id = randomInt(1, 10000000);
    const userName = faker.name.firstName();

    let room = {
      room_id: room_id,
      // room_location: room_location,
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

      // user_id: user_id,
      userName: userName
    };
    rooms.push(room);
    // console.log(checkin);
    // console.log(checkout);
  }
  return rooms;
}


var startTime = new Date().getTime();
csvWriter.writeRecords(generateData())
  .then(() => {
    var endTime = new Date().getTime();
    console.log("Took: " + (endTime - startTime) + "ms");
    console.log('...Done writing csv');
  }).catch(() => {
    console.log('error writing csv');
  });


// const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// write files by chuncks
// 2000 per count, 5000 batches in total = 10 M data
// let batches = 0;
// const writefiles = () => {
//   if (batches < 5000) {
//     batches += 1;
//     const data = generateData();
//     csvWriter.writeRecords(data)
//       .then(() => {
//         bar.increment();
//         writeRecord();
//       })
//       .catch((error) => console.log('error'));
//   } else {
//     bar.stop();
//     console.timeEnd('Time to generate 10 M data');
//     console.log('Congratulations! successfully generated 10M data');
//     process.exit();
//   }
// };

// console.time('Time to generate 10 M data');
// bar.start(5000, 0);
// writefiles();