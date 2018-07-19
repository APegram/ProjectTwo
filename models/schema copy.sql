DROP DATABASE IF EXISTS TensionDB;

CREATE DATABASE TensionDB;

USE TensionDB;

CREATE TABLE user_Table(
name VARCHAR(30),
id INT NOT NULL AUTO_INCREMENT,
admin BOOLEAN DEFAULT false NOT NULL,
password VARCHAR(30) NOT NULL,
completed BOOLEAN DEFAULT false NOT NULL,
PRIMARY KEY (id)
)

CREATE TABLE exerciseOne(
id INT NOT NULL AUTO_INCREMENT,
Title VARCHAR(50),
description VARCHAR(100),
countDown INT(100) NOT NULL,
Step_1 VARCHAR (200),
Step_2 VARCHAR (200),
Step_3 VARCHAR (200),
Step_4 VARCHAR (200),
Step_5 VARCHAR (200),
Step_6 VARCHAR (200),
Step_7 VARCHAR (200),
Step_8 VARCHAR (200),
Step_9 VARCHAR (200),
Step_10 VARCHAR (200)
PRIMARY KEY (id)
)

CREATE TABLE comments(
id INT NOT NULL AUTO_INCREMENT,
student_text BLOB,
Students VARCHAR(30),
step INT(30),
PRIMARY KEY (id)
)
