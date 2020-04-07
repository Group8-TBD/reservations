CREATE KEYSPACE reservations WITH REPLICATION  = <’class’ : ‘SimpleStrategy’, ‘replication_factor’: 1>;

// USE reservations;
// -----> DESCRIBE KEYSPACES; or KEYSPACE test to look at the database
// ---->DESCRIBE TABLE users -- to see the table

CREATE TABLE room (
  room_id UUID,
  room_location varchar(20) NOT NULL,
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

  user_id UUID,
  userName varchar(20) NOT NULL,
  PRIMARY KEY (room_id, (checkin, checkout)),
);

