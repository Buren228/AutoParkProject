drop table if exists buses_routes;
drop table if exists user_bus;
drop table if exists users_roles;
drop table if exists user;
drop table if exists roles;
drop table if exists buses;
drop table if exists routes;
drop table if exists passenger_traffic_hour;
drop table if exists stops;

create table user
(
    id           INT PRIMARY KEY AUTO_INCREMENT,
    first_name   VARCHAR(20)  NOT NULL,
    last_name    VARCHAR(35)  NOT NULL,
    birth_day    VARCHAR(35)  NOT NULL,
    sex          VARCHAR(1)   NOT NULL,
    phone_number VARCHAR(25)  NOT NULL,
    job          VARCHAR(100) NOT NULL,
    username     VARCHAR(35)  NOT NULL,
    password     VARCHAR(35)  NOT NULL,
    status       VARCHAR(1)   NOT NULL
);

create table roles
(
    id   INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE users_roles
(
    id      INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    INDEX user_id (user_id),
    INDEX role_id (role_id),
    CONSTRAINT `FK_Roles` FOREIGN KEY (role_id)
        REFERENCES roles (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `FK_user` FOREIGN KEY (user_id)
        REFERENCES user (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `relation_row_unique` (user_id, role_id),
    PRIMARY KEY (id)
);

create table buses
(
    bus_id       INT PRIMARY KEY AUTO_INCREMENT,
    number       VARCHAR(8)  NOT NULL,
    mark         VARCHAR(30) NOT NULL,
    release_date VARCHAR(30) NOT NULL,
    seats_count  INT         NOT NULL,
    status       VARCHAR(1)  NOT NULL
);

create table routes
(
    route_id                     INT PRIMARY KEY AUTO_INCREMENT,
    route_number                 INT    NOT NULL,
    average_number_of_passengers DOUBLE NOT NULL,
    average_length               DOUBLE NOT NULL
);

create table buses_routes
(
    id       INT AUTO_INCREMENT,
    bus_id   INT NOT NULL,
    route_id INT NOT NULL,
    INDEX route_id (route_id),
    INDEX bus_id (bus_id),
    CONSTRAINT `FK_Routes` FOREIGN KEY (route_id)
        REFERENCES routes (route_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `FK_buses1` FOREIGN KEY (bus_id)
        REFERENCES buses (bus_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `relation_row_unique` (route_id, bus_id),
    PRIMARY KEY (id)
);

create table user_bus
(
    id      INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    bus_id  INT NOT NULL,
    INDEX user_id (user_id),
    INDEX bus_id (bus_id),
    CONSTRAINT `FK_users` FOREIGN KEY (user_id)
        REFERENCES user (id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `FK_buses` FOREIGN KEY (bus_id)
        REFERENCES buses (bus_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `relation_row_unique` (user_id, bus_id),
    PRIMARY KEY (id)
);

create table passenger_traffic_hour
(
    hour_id       INT PRIMARY KEY AUTO_INCREMENT,
    hour          INT    NOT NULL,
    average_value DOUBLE NOT NULL
);

create table stops
(
    id                   INT PRIMARY KEY AUTO_INCREMENT,
    route_number         INT         NOT NULL,
    stop_name            VARCHAR(50) NOT NULL,
    show_order           INT,
    average_waiting_time INT         NOT NULL
);