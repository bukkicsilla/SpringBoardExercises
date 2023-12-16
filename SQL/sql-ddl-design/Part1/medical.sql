CREATE DATABASE medical;
CREATE TABLE medicalcenters (id SERIAL PRIMARY KEY, location TEXT);
CREATE TABLE doctors (id SERIAL PRIMARY KEY, name TEXT, job TEXT);
CREATE TABLE patients (id SERIAL PRIMARY KEY, name TEXT, insurance TEXT, birthday DATE);
CREATE TABLE visits (id SERIAL PRIMARY KEY, doctor_id INT REFERENCES doctors, patient_id INT REFERENCES patients, 
location_id INT REFERENCES medicalcenters, date DATE);
CREATE TABLE diseases (id SERIAL PRIMARY KEY, name TEXT, visit_id INT REFERENCES visits);

INSERT INTO medicalcenters (location) VALUES ('Bay Area'), ('Long Island'), ('Big Island, Hawaii');
INSERT INTO doctors (name, job) VALUES ('Katie', 'Pediatrician'), ('John', 'Plastic Surgery'), ('Mona', 'Psychologist');
INSERT INTO patients (name, insurance, birthday) VALUES ('Peter', 'Anthem Blue', '2015-05-25'), ('Diana', 'Blue Shield', '1987-11-11');
INSERT INTO visits (doctor_id, patient_id, location_id, date) VALUES 
(1, 1, 2, '2023-12-12'), (2, 2, 3, '2023-12-14');
INSERT INTO diseases (name, visit_id) VALUES ('cold', 1), ('depression', 2);