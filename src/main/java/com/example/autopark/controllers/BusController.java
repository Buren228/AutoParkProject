package com.example.autopark.controllers;

import com.example.autopark.classes.Bus;
import com.example.autopark.repos.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/buses")
public class BusController {
    @Autowired
    private BusRepository busRepository;

    @RequestMapping("/{number}")
    public Bus getBusByNumber(@PathVariable("number") String number ) {
        System.out.println(number);
        Bus bus = busRepository.getByNumber(number);
        return bus;
    }
    @RequestMapping("/getAll")
    public Bus[] getAll() {
        return busRepository.getAll();
    }

    @PostMapping("/createNewBus")
    public Bus createNewBus(@RequestBody Bus bus) {
        System.out.println(bus);
        return busRepository.save(bus);
    }
    @DeleteMapping("/deleteBus")
    public  Bus deleteEmployee(@RequestBody Bus bus){
        busRepository.delete(bus);
        return null;
    }
}
