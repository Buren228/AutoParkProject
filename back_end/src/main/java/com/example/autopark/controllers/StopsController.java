package com.example.autopark.controllers;

import com.example.autopark.classes.Stops;
import com.example.autopark.repos.StopsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/stops")
public class StopsController {
    @Autowired
    private StopsRepository stopsRepository;

    @RequestMapping("/{route_number}")
    public Stops[] getRouteByNumber(@PathVariable("route_number") Integer route_number ) {
        return stopsRepository.getRouteByNumber(route_number);
    }

    @RequestMapping("/getAllRoutes")
    public Stops[] getAllRoutes() {
        return stopsRepository.getAllRoutes();
    }

    @PostMapping("/createNewStop")
    public Stops createNewStop(@RequestBody Stops stops) {
        System.out.println(stops);
        return stopsRepository.save(stops);
    }
    @DeleteMapping("/deleteStop")
    public Stops deleteStop(@RequestBody Stops stops){
        stopsRepository.delete(stops);
        return null;
    }

}