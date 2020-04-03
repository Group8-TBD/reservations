# Project Name

> Airbnb Reservation System Design

## Related Projects
  - https://github.com/Group8-TBD/moreHomes
  - https://github.com/Group8-TBD/Reviews
  - https://github.com/Group8-TBD/photos-server

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [API](#API)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## API

______________________________________________________

**Purpose** : Retrieve property info & reservation info of a rental property
- GET `/api/rooms/:roomID`
- Success Response:
  - Status: `200 OK`
  - Content (sample):
```
Property info:
{
  id: 92,
  price: 348,
  rating: 3.75,
  ratings_count: 112,
  max_guests: 4,
  tax: 0.1,
  service_fee: 0.09,
};
Reservation info:
{
  id: 2,
  checkin: 2020-01-03,
  checkout: 2020-01-13,
  adults: 2,
  children: 0,
  infants: 1,
  cost: 789,
  tax: 90,
  service_charge: 130,
  property_id: 68,
  }
};
```
- Sample Call: `axios.get('/api/rooms/1')`
______________________________________________________

**Purpose** : Make a reservation to a rental property
- POST `/api/reservations`
- Data Params `{reservationID, checkin, checkout, adults, children, infants, cost, tax, service_charge, roomID, guestID }`
- Success Response:
  - Status: `201 OK` (resources created)
  - Content: `{success: 'Successfully made a reservation!'}`
- Sample Call: `axios.post('/api/reservations')`
______________________________________________________

**Purpose** : Update a reservation to a rental property
- Patch `/api/reservations/:reservationID`
- Data Params `{reservationID, checkin, checkout, adults, children, infants, cost, tax, service_charge, roomID, guestID}`
- Success Response:
  - Status: `200 OK`
  - Content: `{success: 'Successfully updated your reservation!'}`
- Sample Call: `axios.patch('/api/reservations/1')`

______________________________________________________

**Purpose** : Delete a reservation to a rental property
- DELETE `/api/reservations/:reservationID`
- Success Response:
  - Status: `200 OK`
  - Content: `{success: 'Successfully deleted your reservation!'}`
- Sample Call: `axios.delete('/api/reservations/1')`


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```





/*
update, delete url
get request:info of the room, /api/room/roomID
post request

POST:
update add property. /api/room/
on this property api/property /:id/researvation/:id

update:
property

delete:
delete room & reservation

*/