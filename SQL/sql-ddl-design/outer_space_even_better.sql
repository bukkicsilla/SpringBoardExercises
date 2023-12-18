-- from the terminal run:
-- psql < outer_space_even_better.sql

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
   name TEXT NOT NULL,   
   galaxy_id INT REFERENCES galaxies
);
CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  sun_id INT REFERENCES suns
);
CREATE TABLE moons
(
   id SERIAL PRIMARY KEY,
   name TEXT,
   planet_id INT REFERENCES planets
);
INSERT INTO galaxies (name) VALUES ('Milky Way');
INSERT INTO suns (name, galaxy_id) VALUES ('The Sun', 1), ('Proxima Centauri', 1), ('Gliese 876', 1);
INSERT INTO planets
    (name, orbital_period_in_years, sun_id)
VALUES
    ('Earth', 1.00, 1),
    ('Mars', 1.88,  1),
    ('Venus', 0.62, 1),
    ('Neptune', 164.8, 1),
    ('Proxima Centauri b', 0.03, 2),
    ('Gliese 876 b', 0.23, 3);
INSERT INTO moons (name, planet_id) VALUES ('The Moon', 1), ('Phobos', 2), ('Deimos', 2), ('Naiad', 4), 
('Thalassa', 4), ('Despina', 4), ('Galatea', 4), ('Larissa', 4), ('S/2004 N 1', 4), ('Proteus', 4), 
('Triton', 4), ('Nereid', 4), ('Halimede', 4), ('Sao', 4), ('Laomedeia', 4), ('Psamathe', 4), ('Neso', 4);

SELECT moons.name, planets.name FROM moons JOIN planets ON moons.planet_id = planets.id WHERE planets.name = 'Neptune';
