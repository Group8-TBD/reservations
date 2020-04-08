CREATE KEYSPACE IF NOT EXISTS Airbnb WITH replication = {'class': 'SimpleStrategy', 'replication_factor':1};

USE Airbnb;

CREATE TABLE reservations (
  room_id uuid,
  price int,
  rating decimal,
  rating_count int,
  max_guests int,
  room_tax decimal,
  service_fee decimal,
  checkin date,
  checkout date,
  adults int,
  children int,
  infants int,
  total_cost int,
  total_tax int,
  service_charge int,
  userName varchar,
  PRIMARY KEY (room_id, checkin, checkout)
);


-- COPY airbnb.reservations (room_id, price, rating, rating_count, max_guests, room_tax, service_fee, checkin, checkout, adults, children, infants, total_cost, total_tax, service_charge, userName) FROM '/Users/hui/reservations/db/fakeData/cass20.csv' WITH DELIMITER=',' AND HEADER=TRUE;

-- COPY airbnb.reservations (room_id, room_location, price, rating, rating_count, max_guests, room_tax, service_fee, adults, children, infants, total_cost, total_tax, service_charge, user_id, userName) FROM '/Users/hui/reservations/db/fakeData/cassandraRoom.csv' WITH DELIMITER=',' AND HEADER=TRUE;