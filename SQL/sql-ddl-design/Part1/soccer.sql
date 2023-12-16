CREATE DATABASE soccer;
CREATE TABLE seasons (id SERIAL PRIMARY KEY, start_date DATE, end_date DATE);
INSERT INTO seasons (start_date, end_date) VALUES ('2024-01-01', '2024-04-30'), ('2024-05-01', '2024-08-31'),
('2024-09-01', '2024-12-31');
CREATE TABLE referees (id SERIAL PRIMARY KEY, name TEXT);
INSERT INTO referees (name) VALUES ('ABC'), ('XYZ');
CREATE TABLE teams (id SERIAL PRIMARY KEY, name TEXT NOT NULL, city TEXT);
INSERT INTO teams (name, city) VALUES ('Great Green Lakes', 'Johnson City'), ('Red Giants', 'San Francisco'),
('Pine Canyon', 'Flagstaff'), ('Carowinds', 'Charlotte'), ('Madison Heights', 'Lynchburg'), ('Crazy Blackfoot', 'Missoula');
CREATE TABLE players (id SERIAL PRIMARY KEY, name TEXT NOT NULL, phone INT, team_id INT REFERENCES teams);
INSERT INTO players (name, phone, team_id) VALUES ('Bob', 555, 1), ('Luke', 123, 1), ('James', 345, 2), ('Tom', 777, 2),
('Anna', 888, 3 ), ('Barbara', 654, 3), ('Cecile', 444, 4), ('Dorothy', 555, 4), ('Eloise', 1248, 5), ('Fanny', 999, 5),
('Grace', 1010, 6), ('Isabel', 222, 6);
SELECT * FROM players join teams ON team_id = teams.id;
CREATE TABLE games (id SERIAL PRIMARY KEY, location TEXT, date DATE, cost FLOAT, time TIMESTAMP, 
team_id INT REFERENCES teams, referee_id INT REFERENCES referees, season_id INT REFERENCES seasons);
INSERT INTO games (location, date, cost, time, team_id, referee_id, season_id) VALUES 
('Johnson City', '2024-10-20', 150.99, '2024-10-20 11:00:00', 1, 1, 3), 
('Missoula', '2024-07-07', 200.67, '2024-07-07 10:30:00', 6, 2, 2),
('San Francisco', '2024-03-23', 250.00, '2024-03-23 12:30:30', 2, 1, 1);
CREATE TABLE goals (id SERIAL PRIMARY KEY, player_id INT REFERENCES players, game_id INT REFERENCES games);
INSERT INTO goals (player_id, game_id) VALUES (1,1), (2,1), (3,3), (4,3), (11,2), (12,2);
SELECT * FROM goals JOIN players ON goals.player_id = players.id JOIN games ON goals.game_id = games.id;
CREATE TABLE scores (id SERIAL PRIMARY KEY, score INT NOT NULL, result TEXT NOT NULL, 
team_id INT REFERENCES teams, game_id INT REFERENCES games);
INSERT INTO scores (score, result, team_id, game_id) VALUES (100, 'win', 1,1), (20, 'loss', 2,3), (50, 'draw', 6,2);
SELECT * FROM scores JOIN teams ON scores.team_id = teams.id JOIN games ON scores.game_id = games.id; 