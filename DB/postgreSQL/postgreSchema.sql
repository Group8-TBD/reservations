CREATE DATABASE Airbnb;

CREATE TABLE "reservations" (
  "id" serial PRIMARY KEY,
  "checkin" date,
  "checkout" date,
  "adults" INTEGER,
  "children" INTEGER,
  "infants" INTEGER,
  "total_cost" FLOAT NOT NULL,
  "tax" FLOAT NOT NULL,
  "service_charge" FLOAT NOT NULL,
  "room_id" INTEGER NOT NULL,
  "guest_id" INTEGER NOT NULL
);

CREATE TABLE "rooms" (
  "id" serial PRIMARY KEY,
  "price" INTEGER NOT NULL,
  "rating" FLOAT NOT NULL,
  "rating_count" INTEGER NOT NULL,
  "max_guests" INTEGER NOT NULL,
  "tax" FLOAT NOT NUll,
  "service_fee" FLOAT
);

CREATE TABLE "guests" (
  "id" serial PRIMARY KEY,
  "guestname" VARCHAR(20) NOT NULL
);


ALTER TABLE "reservations" ADD FOREIGN KEY ("room_id") REFERENCES "rooms" ("id");
ALTER TABLE "reservations" ADD FOREIGN KEY ("guest_id") REFERENCES "guests" ("id");



\COPY reservations (id, checkin, checkout, adults, children, infants, total_cost, tax, service_charge, room_id, guest_id) FROM '/Users/hui/reservations/db/fakeData/reservations.csv' DELIMITER ',' CSV HEADER;

\COPY rooms (id, price, rating, rating_count, max_guests, tax, service_fee) FROM '/Users/hui/reservations/db/fakeData/room.csv' DELIMITER ',' CSV HEADER;

\COPY guests (id, guestname) FROM '/Users/hui/reservations/db/fakeData/users.csv' DELIMITER ',' CSV HEADER;

