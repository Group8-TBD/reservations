DROP DATABASE IF EXISTS Airbnb;

CREATE DATABASE Airbnb;

USE reservations;

CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  checkin date ,
  checkout date,
  adults smallint,
  children smallint,
  infants smallint,
  total_cost decimal(10, 2) NOT NULL,
  tax decimal(10, 2) NOT NULL,
  service_charge decimal(10, 2) NOT NULL,
  room_id int NOT NULL,
  guest_id int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (guest_id) REFERENCES guests(id),
);


CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  room_location varchar(40) NOT NULL,
  price decimal(10, 2) NOT NULL,
  rating decimal(10, 2) NOT NULL,
  rating_count int NOT NULL,
  max_guests smallint NOT NULL,
  tax decimal(10, 2) NOT NUll,
  service_fee decimal(10, 2),
  PRIMARY KEY (ID)
);

CREATE TABLE guests (
  id int NOT NULL AUTO_INCREMENT,
  userName varchar(20) UNIQUE NOT NULL,
  PRIMARY KEY (ID)
);


\COPY reservations (id, checkin, checkout, adults, children, infants, total_cost, tax, service_charge) FROM '/Users/hui/reservations/db/fakeData/reservations.csv' DELIMITER ',' CSV HEADER;

\COPY rooms (id, room_location, price, rating, rating_count, max_guests, tax, service_fee) FROM '/Users/hui/reservations/db/fakeData/rooms.csv' DELIMITER ',' CSV HEADER;

\COPY guests (id, userName) FROM '/Users/hui/reservations/db/fakeData/users.csv' DELIMITER ',' CSV HEADER;