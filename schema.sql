DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant;

USE restaurant;

CREATE TABLE reserved (
    name VARCHAR(30) NOT NULL,
    phone INT(32) NOT NULL,
    email VARCHAR(30) NOT NULL,
    userid VARCHAR(30) NOT NULL
);

