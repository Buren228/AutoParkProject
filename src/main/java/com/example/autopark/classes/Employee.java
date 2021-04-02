package com.example.autopark.classes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;


import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Data
@Entity(name="employee")
@Table(name="employee")

public class Employee {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Integer user_id;

    @JsonIgnore
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "driver_bus",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "bus_id") }
    )
    Set<Bus> buses = new HashSet<>();

    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "birth_day")
    private String birth_day;
    @Column(name = "sex")
    private String sex;
    @Column(name = "phone_number")
    private String phone_number;
    @Column(name = "job")
    private String job;
    @Column(name = "status")
    private String status;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(user_id, employee.user_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user_id);
    }

    @JsonProperty
    public List<Integer> getBusesId()
    {
        return buses.stream().map(Bus::getBus_id).collect(Collectors.toList());
    }
}