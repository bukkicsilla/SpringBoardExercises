-- from the terminal run:
-- psql < outer_space_better.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE galaxies
(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL
);
CREATE TABLE suns
(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL   
);
CREATE TABLE moons
(
   id SERIAL PRIMARY KEY,
   name TEXT
);
CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  sun_id INT REFERENCES suns,
  galaxy_id INT REFERENCES galaxies,
  moon_id INT REFERENCES moons
);


INSERT INTO galaxies (name) VALUES ('Milky Way');
INSERT INTO suns (name) VALUES ('The Sun'), ('Proxima Centauri'), ('Gliese 876');
INSERT INTO moons (name) VALUES ('The Moon'), ('Phobos'), ('Deimos'), ('Naiad'), ('Thalassa'), ('Despina'), ('Galatea'), ('Larissa'), ('S/2004 N 1'), ('Proteus'), ('Triton'), ('Nereid'), ('Halimede'), ('Sao'), ('Laomedeia'), ('Psamathe'), ('Neso'), ('');

INSERT INTO planets
  (name, orbital_period_in_years, sun_id, galaxy_id, moon_id)
VALUES
  ('Earth', 1.00, 1, 1, 1),
  ('Mars', 1.88,  1, 1, 2),
  ('Mars', 1.88,  1, 1, 3),
  ('Venus', 0.62, 1, 1, 18),
  ('Neptune', 164.8, 1, 1, 4),
  ('Neptune', 164.8, 1, 1, 5),
  ('Neptune', 164.8, 1, 1, 6),
  ('Neptune', 164.8, 1, 1, 7),
  ('Neptune', 164.8, 1, 1, 8),
  ('Neptune', 164.8, 1, 1, 9),
  ('Neptune', 164.8, 1, 1, 10),
  ('Neptune', 164.8, 1, 1, 11),
  ('Neptune', 164.8, 1, 1, 12),
  ('Neptune', 164.8, 1, 1, 13),
  ('Neptune', 164.8, 1, 1, 14),
  ('Neptune', 164.8, 1, 1, 15),
  ('Neptune', 164.8, 1, 1, 16),
  ('Neptune', 164.8, 1, 1, 17), 
  ('Proxima Centauri b', 0.03, 2, 1, 18),
  ('Gliese 876 b', 0.23, 3, 1, 18);

SELECT moons.name, planets.name FROM moons JOIN planets ON planets.moon_id = moons.id WHERE planets.name = 'Neptune';