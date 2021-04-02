package com.example.autopark.controllers;

import com.example.autopark.classes.Routes;
import com.example.autopark.repos.RoutesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/routes")
public class RoutesController {
    @Autowired
    private RoutesRepository routesRepository;

    @RequestMapping("/getAll")
    public Routes[] getAll() {
        return routesRepository.getAll();

    }
}
