CREATE DATABASE information_project;
USE information_project;

CREATE TABLE patient_info(
  pat_id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(55),
  last_name VARCHAR(55),
  age INT NOT NULL,
  gender VARCHAR(8),
  dob DATE NOT NULL, --make seperate sql file to update age based on DATEDIFF(exp1,exp2) using dob
  ailments VARCHAR(255),  --provide an update button to only update ailments
  FOREIGN KEY(pat_id) REFERENCES login_info(pat_id);
);

CREATE TABLE doctor_info(
  doc_id INT NOT NULL PRIMARY KEY,
  name VARCHAR(50),
  age INT NOT NULL,
  qualification VARCHAR(50),
  speciality VARCHAR(50)
);
CREATE TABLE login_info(
  --login_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(60) NOT NULL UNIQUE,
  pass VARCHAR(32) NOT NULL,
  pat_id INT AUTO_INCREMENT PRIMARY KEY,
);

CREATE TABLE bookings(
  booking_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pat_id INT NOT NULL,
  booked_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY(pat_id) REFERENCES patient_info(pat_id);
);

CREATE TABLE location(
  city VARCHAR(40) NOT NULL,

);

CREATE TABLE locality(
  local_name VARCHAR(40) NOT NULL,

);
CREATE TABLE symptoms(
  sym_id INT NOT NULL,
  sym_desc VARCHAR(255)
);
CREATE TABLE diseases_rem(
  dis_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(55),
  descr VARCHAR(255),
  remedy VARCHAR(255)
);
--symptoms batayega to disease aur disease se remedy

--index cols to retrieve data fast.