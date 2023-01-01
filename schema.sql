DROP DATABASE IF EXISTS todolist;
CREATE DATABASE IF NOT EXISTS todolist; 
USE todolist;
CREATE TABLE IF NOT EXISTS list(
    id INT AUTO_INCREMENT,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    image varchar(255) NOT NULL,
    createdAt varchar(60) NOT NULL,
    PRIMARY KEY(id)
);