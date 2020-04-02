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
- GET `/api/reservation/property/:propertyID`
- Success Response:
  - Status: `202 OK`
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
  checkin: 2020-01-03, 2020-03-03...........,
  checkout: 2020-01-03, 2020-03-03...........,
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
- Sample Call: `axios.get('/api/reservation/1')`
______________________________________________________

**Purpose** : Make a reservation to a rental property
- POST `/api/reservation/:reservationID`
- Data Params `{reservationID, checkin, checkout, adults, children, infants, cost, tax, service_charge, propertyID }`
- Success Response:
  - Status: `202 OK`
  - Content: `{success: 'Successfully made a reservation!'}`
- Sample Call: `axios.post('/api/reservation/1')`
______________________________________________________

**Purpose** : Update a reservation to a rental property
- Patch `/api/reservation/:reservationID/update`
- Data Params `{reservationID, checkin, checkout, adults, children, infants, cost, tax, service_charge, propertyID}`
- Success Response:
  - Status: `202 OK`
  - Content: `{success: 'Successfully updated your reservation!'}`
- Sample Call: `axios.patch('/api/reservation/1/update')`

______________________________________________________

**Purpose** : Delete a reservation to a rental property
- DELETE `/api/reservation/:reservationID/delete`
- Success Response:
  - Status: `202 OK`
  - Content: `{success: 'Successfully deleted your reservation!'}`
- Sample Call: `axios.delete('/api/reservation/1/delete')`


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

