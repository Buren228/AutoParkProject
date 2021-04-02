package com.example.autopark.classes;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name="stops")
@Table(name="stops")
public class Stops {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;
    @Column(name = "route_number")
    private int route_number;
    @Column(name = "stop_name")
    private String stop_name;
    @Column(name = "show_order")
    private int show_order; //todo поменять на int  в базе и здесь
    @Column(name = "average_waiting_time")
    private int average_waiting_time;

//    public String toJSON() {
//        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd.MM.yyyy HH:mm:ss");
//        String result = "";
//        result = "{"
//                + "\"id\":"+id+","
//                + "\"route_number\":"+route_number+","
//                + "\"stop_name\":\""+stop_name+"\","
//                + "\"show_order\":"+show_order+","
//                + "\"average_waiting_time\":"+average_waiting_time+","
//                + "}";
//        return (result.replace("\"null\"", "\"\"").replace("&quot;", "\\\""));
//    }
}
