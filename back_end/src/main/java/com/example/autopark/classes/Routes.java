package com.example.autopark.classes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@Entity(name="routes")
@Table(name="routes")
public class Routes {

    @JsonIgnore
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "buses_routes",
            joinColumns = { @JoinColumn(name = "route_id") },
            inverseJoinColumns = { @JoinColumn(name = "bus_id") }
    )
    Set<Bus> buses1 = new HashSet<>();


    @Id
    @GeneratedValue
    @Column(name = "route_id")
    private int route_id;
    @Column(name = "route_number")
    private int route_number;
    @Column(name = "average_number_of_passengers")
    private double average_number_of_passengers;
    @Column(name = "average_length")
    private double average_length;
    @Column(name = "min_count_of_buses")
    private int min_count_of_buses;
//    @Column(name = "id")
//    private int id;
//    @Column(name = "average_waiting_time")
//    private String average_waiting_time;
//    @Column(name = "show_order")
//    private String show_order;
//    @Column(name = "stop_name")
//    private String stop_name;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Routes routes = (Routes) o;
        return Objects.equals(route_id, routes.route_id);
    }

    @JsonProperty
    public List<Integer> getBusesId()
    {
        return buses1.stream().map(Bus::getBus_id).collect(Collectors.toList());
    }

}