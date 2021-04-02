package com.example.autopark.controllers;

import com.example.autopark.classes.RouteTraffic;
import com.example.autopark.repos.RouteTrafficRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/routeTraffic")
public class RouteTrafficController {
    @Autowired
    private RouteTrafficRepository routeTrafficRepository;

    @RequestMapping("/getAll")
    public RouteTraffic[] getAll() {
        return routeTrafficRepository.getAll();
    }
}
