DROP DATABASE IF EXISTS TensionDB;

CREATE DATABASE TensionDB;

USE TensionDB;

-- All items below need to be re-written in js for Sequelize! We will be clearing the below after they are written.
-- The table is created for all users to have the first seven columns be required however every column after for the steps are null initially and will populate on an update that they have completed the step.
-- The step columns will need to have an update query that clears the steps and sets up for the next exercise.
CREATE TABLE userTable(
id INT NOT NULL AUTO_INCREMENT,
admin BOOLEAN DEFAULT false NOT NULL,
name VARCHAR(50) NOT NULL,
userName VARCHAR(25),
email VARCHAR(100) NOT NULL,
password VARCHAR(30) NOT NULL,
theme VARCHAR(20) DEFAULT "Black",
issue BOOLEAN DEFAULT false NOT NULL,
picture BLOB NOT NULL DEFAULT "https://mdbootstrap.com/img/Photos/Others/photo6.jpg",
about TEXT,
linkedin VARCHAR(50),
github VARCHAR(50),
instagram VARCHAR(50),
facebook VARCHAR(50),
twitter VARCHAR(50),
stepOne BOOLEAN,
stepTwo BOOLEAN,
stepThree BOOLEAN,
stepFour BOOLEAN,
stepFive BOOLEAN,
stepSix BOOLEAN,
stepSeven BOOLEAN,
stepEight BOOLEAN,
stepNine BOOLEAN,
stepTen BOOLEAN,
stepEleven BOOLEAN,
stepTwelve BOOLEAN,
PRIMARY KEY (id)
)

-- This table will be used to house the comments/issues that students have along the way in their steps.
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    text VARCHAR(140),
    name VARCHAR(50),
    stepNum INT,
    PRIMARY KEY (id)
)

CREATE TABLE moduleIndex (
    id INT NOT NULL AUTO_INCREMENT,
    moduleName VARCHAR(80),
    moduleTableName VARCHAR(40),
    moduleJSName VARCHAR(40)
)


-- Module 15
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 14
CREATE TABLE exerciseTwo(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 13
CREATE TABLE exerciseThree(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 12
CREATE TABLE exerciseFour(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 11
CREATE TABLE exerciseFive(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 10
CREATE TABLE exerciseSix(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 9
CREATE TABLE exerciseSeven(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 8
CREATE TABLE exerciseEight(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 7
CREATE TABLE exerciseNine(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 1
CREATE TABLE exerciseSix(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)


-- module 5
CREATE TABLE exerciseTen(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 4
CREATE TABLE exerciseEleven(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 3
CREATE TABLE exerciseTwelve(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 2

CREATE TABLE exerciseThirteen(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)
--module 1
CREATE TABLE exerciseFourteen(
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
Step_10 VARCHAR (200),
PRIMARY KEY (id)
)