CREATE DATABASE IF NOT EXISTSloginRegister;
CREATE TABLE IF NOT EXISTS users(
    name varchar(255),
    email varchar(255),
    password varchar(255),
);