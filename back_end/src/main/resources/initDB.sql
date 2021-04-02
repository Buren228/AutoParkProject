drop table if exists buses_routes;
drop table if exists driver_bus;
drop table if exists employee;
drop table if exists buses;
drop table if exists routes;
drop table if exists passenger_traffic_hour;
drop table if exists stops;

create table employee
(user_id INT PRIMARY KEY AUTO_INCREMENT,
 first_name varchar(20) not null,
 last_name VARCHAR(35) not null,
 birth_day VARCHAR(35) not null,
 sex varchar(1) not null,
 phone_number VARCHAR(25) not null,
 job varchar(100) not null ,
 login VARCHAR(35),
 password VARCHAR(35),
 status varchar(1) not null
);

create table buses
(bus_id INT PRIMARY KEY AUTO_INCREMENT,
 number varchar(8) not null,
 mark varchar(30) not null,
 release_date varchar(30) not null,
 seats_count int not null,
 status varchar(1) not null
);

create table routes
(route_id INT PRIMARY KEY AUTO_INCREMENT,
 route_number int not null,
 average_number_of_passengers double not null,
 average_length double not null
);

create table buses_routes
(id INT AUTO_INCREMENT,
 bus_id INT not null,
 route_id INT not null,
 INDEX route_id (route_id),
 INDEX bus_id (bus_id),
 CONSTRAINT `FK_Routes` FOREIGN KEY (route_id)
     REFERENCES routes (route_id) ON DELETE RESTRICT ON UPDATE CASCADE,
 CONSTRAINT `FK_buses1` FOREIGN KEY (bus_id)
     REFERENCES buses(bus_id) ON DELETE RESTRICT ON UPDATE CASCADE,
 UNIQUE KEY `relation_row_unique` (route_id,bus_id),
 PRIMARY KEY(id)
);

create table driver_bus
(
    id INT AUTO_INCREMENT,
    user_id INT not null,
    bus_id INT not null,
    INDEX user_id (user_id),
    INDEX bus_id (bus_id),
    CONSTRAINT `FK_employee` FOREIGN KEY (user_id)
        REFERENCES employee (user_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `FK_buses` FOREIGN KEY (bus_id)
        REFERENCES buses(bus_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `relation_row_unique` (user_id,bus_id),
    PRIMARY KEY(id)
);

create table passenger_traffic_hour
(
    hour_id INT PRIMARY KEY AUTO_INCREMENT,
    hour int not null,
    average_value double not null);

create table stops
(id INT PRIMARY KEY AUTO_INCREMENT,
 route_number int not null,
 stop_name varchar(50) not null,
 show_order int,
 average_waiting_time int not null
);