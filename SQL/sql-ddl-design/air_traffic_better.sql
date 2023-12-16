-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passengers
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);


CREATE TABLE flights
(
  id SERIAL PRIMARY KEY,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline TEXT NOT NULL,
  from_city TEXT NOT NULL,
  from_country TEXT NOT NULL,
  to_city TEXT NOT NULL,
  to_country TEXT NOT NULL
);


CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  passenger_id INT REFERENCES passengers(id),
  flight_id INT REFERENCES flights(id),
  seat TEXT NOT NULL
);

INSERT INTO passengers (first_name, last_name) VALUES ('July', 'Jones'), ('Katie', 'Knight'), 
('Lea', 'Lloyd'), ('Maya', 'Morgan'), ('Noemi', 'Nolan'), ('Olivia', 'Olson');

INSERT INTO flights (departure, arrival, airline, from_city, from_country, to_city, to_country) VALUES
('2023-12-15 14:57:00', '2023-12-15 17:27:00', 'Southwest', 'San Francisco', 'USA', 'Phoenix', 'USA'),
('2023-12-15 03:05:00', '2023-12-15 18:14:00', 'British Airways', 'London', 'England', 'Los Angeles', 'USA'),
('2023-12-15 17:25:00', '2023-12-16 06:10:00', 'Air France', 'Boston', 'USA', 'Paris', 'France'),
('2023-12-16 07:25:00', '2023-12-16 08:30:00', 'Jetstar', 'Changi', 'Singapore', 'Jakarta', 'Indonesia'),
('2023-12-15 22:05:00', '2023-12-16 18:37:00', 'Singapore Airlines', 'London', 'England', 'Changi', 'Singapore'),
('2023-12-15 22:45:00', '2023-12-16 01:36:00', 'Ryanair', 'Budapest', 'Hungary', 'Dublin', 'Irland');

INSERT INTO tickets (passenger_id, flight_id, seat) VALUES
(1, 1, '15A'), (2, 2, '34C'), (3, 3, '30D'), (4, 4, '6B'), (5, 5, '27E'), (6, 6, '11B');


SELECT first_name, last_name, seat, airline, from_city, from_country, departure, to_city, to_country, arrival  
FROM tickets as t JOIN passengers as p ON p.id = t.passenger_id JOIN flights as f ON f.id = t.flight_id;

--INSERT INTO tickets
--  (first_name, last_name, seat, departure, arrival, airline, from_city, from_country, to_city, to_country)
--VALUES
--  ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 'Washington DC', 'United States', 'Seattle', 'United States'),
--  ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom'),
--  ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
--  ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
--  ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco'),
--  ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 'Dubai', 'UAE', 'Beijing', 'China'),
--  ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 'New York', 'United States', 'Charlotte', 'United States'),
--  ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
--  ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States'),
--  ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');
