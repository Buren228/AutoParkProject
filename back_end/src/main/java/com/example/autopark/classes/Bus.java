package com.example.autopark.classes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Data
@Entity(name="buses")
@Table(name="buses")
public class Bus {

    @JsonIgnore
    @ManyToMany(mappedBy = "buses")
    private Set<Employee> employee = new HashSet<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "buses1")
    private Set<Routes> routes = new HashSet<>();

    @Id
    @GeneratedValue
    @Column(name = "bus_id")
    private int bus_id;
    @Column(name = "number")
    private String number;
    @Column(name = "mark")
    private String mark;
    @Column(name = "release_date")
    private String release_date;
    @Column(name = "seats_count")
    private int seats_count;
    @Column(name = "status")
    private String status;

//    public String toJSON() {
//        List<Integer> user_id=employee.stream().map(Employee::getUser_id).collect(Collectors.toList());
//        String user_ids="\"user_id\":[";
//        for (int i = 0; i < user_id.size(); i++) {
//            if(user_ids.length()>0)
//            {
//                user_ids+=",";
//            }
//            user_ids+=user_id.get(i);
//        }
//        user_ids+="]";
//        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd.MM.yyyy HH:mm:ss");
//        String result = "";
//        result = "{"
//                + "\"bus_id\":"+bus_id+","
//                + "\"number\":\""+number+"\","
//                + "\"mark\":\""+mark+"\","
//                + "\"release_date\":\""+((release_date != null)?sdf.format(release_date):"")+"\","
//                + "\"status\":\""+status+"\","
//                + user_ids+","
//                + "}";
//
//        return (result.replace("\"null\"", "\"\"").replace("&quot;", "\\\""));
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bus bus = (Bus) o;
        return bus_id == bus.bus_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(bus_id);
    }

    @JsonProperty
    public List<Integer> getEmployeeId()
    {
        return employee.stream().map(Employee::getId).collect(Collectors.toList());
    }
    @JsonProperty
    public List<Integer> getRouteId()
    {
        return routes.stream().map(Routes::getRoute_id).collect(Collectors.toList());
    }
}


