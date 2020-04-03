DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnbReservation;

USE reservations;

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  room_title varchar(40),
  room_address varchar(100),
  price decimal(10, 2) NOT NULL,
  rating decimal(10, 2) NOT NULL,
  rating_count int NOT NULL,
  max_guests smallint NOT NULL,
  tax decimal(10, 2) NOT NUll,
  service_fee decimal(10, 2),
  PRIMARY KEY (ID)
);

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
  room_id int,
  guest_id int,
  PRIMARY KEY (ID),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (guest_id) REFERENCES guests(id),
);

CREATE TABLE guests (
  id SERIAL NOT NULL AUTO_INCREMENT,
  userName varchar(40) UNIQUE NOT NULL,
  createdAccountAt datetime,
  PRIMARY KEY (ID)
);