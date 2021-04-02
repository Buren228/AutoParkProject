package com.example.autopark.classes;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "buses_routes")
@Table(name = "buses_routes")

public class BusesNRoutes {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "bus_id")
    private Integer bus_id;

    @Column(name = "route_id")
    private Integer route_id;

}
