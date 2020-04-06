CREATE KEYSPACE reservations WITH REPLICATION  = <’class’ : ‘SimpleStrategy’, ‘replication_factor’: 1>;

// USE reservations;
// -----> DESCRIBE KEYSPACES; or KEYSPACE test to look at the database
// ---->DESCRIBE TABLE users -- to see the table

CREATE TABLE reservations (
  id UUID,
  checkin date,
  checkout date,
  adults int,
  children int,
  infants int,
  total_cost int,
  tax int,
  service_charge int,
  PRIMARY KEY (id, (checkin, checkout))
);

CREATE TABLE rooms (
  id UUID,
  room_title varchar(20) NOT NULL,
  room_address varchar(100) NOT NULL,
  price int NOT NULL,
  rating int NOT NULL,
  rating_count int NOT NULL,
  max_guests int NOT NULL,
  tax int NOT NULL,
  service_fee int,
  PRIMARY KEY (id, (room_address, price))
);

CREATE TABLE guests (
  id UUID PRIMARY KEY,
  userName varchar(20) NOT NULL,
  createdAccountAt TIMESTAMP,
);


CREATE TABLE room (

  room_id UUID,
  room_title varchar(20) NOT NULL,
  price int NOT NULL,
  rating int NOT NULL,
  rating_count int NOT NULL,
  max_guests int NOT NULL,
  tax int NOT NULL,
  service_fee int,

  checkin date,
  checkout date,
  adults int,
  children int,
  infants int,
  total_cost int,
  tax int,
  service_charge int,

  guest_id UUID PRIMARY KEY,
  userName varchar(20) NOT NULL,
  createdAccountAt TIMESTAMP,

  PRIMARY KEY (room_id, (checkin, checkout)),
);

