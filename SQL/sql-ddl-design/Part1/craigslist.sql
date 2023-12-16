CREATE DATABASE craigslist;
CREATE TABLE Categories (name TEXT);
CREATE TABLE Regions (name TEXT);
ALTER TABLE Regions ADD id SERIAL PRIMARY KEY;
ALTER TABLE Categories ADD id SERIAL PRIMARY KEY;
CREATE TABLE Users (id SERIAL PRIMARY KEY, name VARCHAR(20) UNIQUE NOT NULL, 
    password VARCHAR(20) NOT NULL, pref_region_id INTEGER REFERENCES Regions);
CREATE TABLE Posts (id SERIAL PRIMARY KEY, title TEXT, text TEXT, location TEXT, 
    user_id INT REFERENCES Users, region_id INT REFERENCES Regions, category_id INT REFERENCES Categories);

INSERT INTO Regions (name) VALUES ('San Francisco'), ('Seattle'), ('Atlanta');
INSERT INTO Categories (name) VALUES ('home'), ('vehicle');
INSERT INTO Users (name, password, pref_region_id) VALUES ('Lua', 'lua', 2), ('Tom', 'tom', 1), ('Echo', 'echo', 3);
SELECT * FROM users JOIN regions ON regions.id =  pref_region_id;
INSERT INTO Posts (title, text, location, user_id, region_id, category_id)
VALUES ('Family Home', 'A beautiful home in the Bay Area', 'Bay Area', 2, 1, 1), 
('Toyota Camry', 'A silver 2021 Toyota Camry is for sale', 'Seattle Area',  1, 2, 2);

