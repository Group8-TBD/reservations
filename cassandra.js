CREATE KEYSPACE reservations WITH REPLICATION  = <’class’ : ‘SimpleStrategy’, ‘replication_factor’: 1>;

// USE reservations;
// -----> DESCRIBE KEYSPACES; or KEYSPACE test to look at the database
// ---->DESCRIBE TABLE users -- to see the table


CREATE TABLE rooms (
  id UUID PRIMARY KEY,
  room_title varchar(40),
  room_address varchar(200),
  price int,
  rating int,
  rating_count int,
  max_guests int,
  tax int,
  service_fee int,
);


CREATE TABLE reservations (
  id UUID PRIMARY KEY,
  checkin date ,
  checkout date,
  adults int,
  children int,
  infants int,
  total_cost int,
  tax int,
  service_charge int,
  room_id int,
  guest_id int,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (guest_id) REFERENCES guests(id),
);

CREATE TABLE guests (
  id UUID PRIMARY KEY,
  userName varchar(40) UNIQUE NOT NULL,
  createdAccountAt datetime,
  PRIMARY KEY (ID)
);