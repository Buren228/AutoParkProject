package com.example.autopark.classes;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name="passenger_traffic_hour")
@Table(name="passenger_traffic_hour")
public class RouteTraffic {
    @Id
    @GeneratedValue
    @Column(name = "hour_id")
    private int hour_id;
    @Column(name = "hour")
    private int hour;
    @Column(name = "average_value")
    private double average_value;
}
