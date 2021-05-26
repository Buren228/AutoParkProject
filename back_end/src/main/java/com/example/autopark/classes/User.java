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
@Entity(name = "user")
@Table(name = "user")

public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @JsonIgnore
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "user_bus",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "bus_id")}
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

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Transient
    private String confirmedPassword;

    @Column(name = "status")
    private String status;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @JsonProperty
    public List<Integer> getBusesId() {
        return buses.stream().map(Bus::getBus_id).collect(Collectors.toList());
    }

    @JsonProperty
    public List<Integer> getRoleId() {
        return roles.stream().map(Role::getId).collect(Collectors.toList());
    }
}