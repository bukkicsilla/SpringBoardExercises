-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE artists
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);


CREATE TABLE producers
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);


CREATE TABLE albums
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);


CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album_id INT REFERENCES albums(id)
);


CREATE TABLE song_artists
(
  song_id INT REFERENCES songs(id),
  artist_id INT REFERENCES artists(id),
  PRIMARY KEY (song_id, artist_id)
);


CREATE TABLE song_producers
(
  song_id INT REFERENCES songs(id),
  producer_id INT REFERENCES producers(id),
  PRIMARY KEY (song_id, producer_id)
);

INSERT INTO artists (name) VALUES ('Hanson'), ('Queen'), ('Mariah Cary'), ('Boys II Men'), 
('Lady Gaga'), ('Bradley Cooper'), ('Nickelback'), ('Jay Z'), ('Alicia Keys'), ('Katy Perry'),
('Juicy J'), ('Maroon 5'), ('Christina Aguilera'), ('Avril Lavigne'), ('Destiny ""s Child');

INSERT INTO producers (name) VALUES ('Dust Brothers'), ('Stephen Lironi'), ('Roy Thomas Baker'), ('Walter Afanasieff'),
('Benjamin Rice'), ('Rick Parashar'), ('Al Shux'), ('Max Martin'), ('Cirkut'), ('Shellback'), ('Benny Blanco'),
('The Matrix'), ('Darkchild');

INSERT INTO albums (title) VALUES ('Middle of Nowhere'), ('A Night at the Opera'), ('Daydream'),
('A Stat Is Born'), ('Silver Side Up'), ('The Blueprint 3'), ('Prism'), ('Hands All Over'),
('Let Go'), ('The Writing "" s on the Wall');

INSERT INTO songs (title, duration_in_seconds, release_date, album_id) VALUES ('MMMBop', 238, '04-15-1997', 1), 
('Bohemian Rhapsody', 355, '10-31-1975', 2), ('One Sweet Day', 282, '11-14-1995', 3), ('Shallow', 216, '09-27-2018', 4),
('How You Remind Me', 223, '08-21-2001', 5), ('New York State of Mind', 276, '10-20-2009', 6), 
('Dark Horse', 215, '12-17-2013', 7), ('Moves Like Jagger', 201, '06-21-2011', 8), 
('Complicated', 244, '05-14-2002', 9), ('Say My Name', 240, '11-07-1999', 10);

SELECT s.title, s.duration_in_seconds, s.release_date, a.title FROM songs as s JOIN albums as a ON s.album_id = a.id;

INSERT INTO song_artists (song_id, artist_id) VALUES (1, 1), (2, 2), (3, 3), (3, 4), (4, 5), (4, 6),
(5, 7), (6, 8), (6, 9), (7, 10), (7, 11), (8, 12), (8, 13), (9, 14), (10, 15);

INSERT INTO song_producers (song_id, producer_id) VALUES (1, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6),
(6, 7), (7, 8), (7, 9), (8, 10), (8, 11), (9, 12), (10, 13);

--INSERT INTO songs
--  (title, duration_in_seconds, release_date, artists, album, producers)
--VALUES
--  ('MMMBop', 238, '04-15-1997', '{"Hanson"}', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
--  ('Bohemian Rhapsody', 355, '10-31-1975', '{"Queen"}', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
--  ('One Sweet Day', 282, '11-14-1995', '{"Mariah Cary", "Boyz II Men"}', 'Daydream', '{"Walter Afanasieff"}'),
--  ('Shallow', 216, '09-27-2018', '{"Lady Gaga", "Bradley Cooper"}', 'A Star Is Born', '{"Benjamin Rice"}'),
--  ('How You Remind Me', 223, '08-21-2001', '{"Nickelback"}', 'Silver Side Up', '{"Rick Parashar"}'),
--  ('New York State of Mind', 276, '10-20-2009', '{"Jay Z", "Alicia Keys"}', 'The Blueprint 3', '{"Al Shux"}'),
--  ('Dark Horse', 215, '12-17-2013', '{"Katy Perry", "Juicy J"}', 'Prism', '{"Max Martin", "Cirkut"}'),
--  ('Moves Like Jagger', 201, '06-21-2011', '{"Maroon 5", "Christina Aguilera"}', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
--  ('Complicated', 244, '05-14-2002', '{"Avril Lavigne"}', 'Let Go', '{"The Matrix"}'),
--  ('Say My Name', 240, '11-07-1999', '{"Destiny''s Child"}', 'The Writing''s on the Wall', '{"Darkchild"}');
