
CREATE DATABASE airbnb;

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




