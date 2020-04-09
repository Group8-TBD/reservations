
\COPY reservations (id, checkin, checkout, adults, children, infants, total_cost, tax, service_charge, room_id, guest_id) FROM '/Users/hui/reservations/reservations.csv' DELIMITER ',' CSV HEADER;

\COPY rooms (id, price, rating, rating_count, max_guests, tax, service_fee) FROM '/Users/hui/reservations/db/fakeData/room.csv' DELIMITER ',' CSV HEADER;

\COPY guests (id, guestname) FROM '/Users/hui/reservations/db/fakeData/users.csv' DELIMITER ',' CSV HEADER;