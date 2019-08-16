CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT;
    burger_name VARCHAR;
    devoured BOOLEAN default false;
    PRIMARY KEY (id);
);