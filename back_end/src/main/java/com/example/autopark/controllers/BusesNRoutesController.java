package com.example.autopark.controllers;

import com.example.autopark.classes.BusesNRoutes;
import com.example.autopark.repos.BusesNRoutesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/bnr")
public class BusesNRoutesController {
    @Autowired
    private BusesNRoutesRepository busesNRoutesRepository;

    @RequestMapping("/getAll")
    public BusesNRoutes[] getAll() {
        return busesNRoutesRepository.getAll();

    }
//http://localhost:8080/bnr/createNewCom
    @RequestMapping(value = "/cr", method = RequestMethod.POST)
    public BusesNRoutes createNewCom(@RequestBody BusesNRoutes busesNRoutes) {
        System.out.println(busesNRoutes);
        return busesNRoutesRepository.save(busesNRoutes);
    }
    @DeleteMapping("/deleteCom")
    public  BusesNRoutes deleteCom(@RequestBody BusesNRoutes busesNRoutes){
        busesNRoutesRepository.delete(busesNRoutes);
        return null;
    }
}
