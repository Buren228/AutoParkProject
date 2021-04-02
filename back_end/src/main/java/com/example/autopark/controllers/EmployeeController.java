package com.example.autopark.controllers;

import com.example.autopark.classes.Employee;
import com.example.autopark.repos.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping("/{first_name}/{last_name}")
    public Employee getEmployeeByName(@PathVariable("first_name") String first_name, @PathVariable("last_name") String last_name) {
        return employeeRepository.getByName(first_name, last_name);
    }

    @RequestMapping("/getAll")
    public Employee[] getAll() {
        return employeeRepository.getAll();
    }

    @PostMapping("/createNewEmployee")
    public Employee createNewEmployee(@RequestBody Employee employee) {
        System.out.println(employee);
        return employeeRepository.save(employee);
}
    @DeleteMapping("/deleteEmployee")
    public  Employee deleteEmployee(@RequestBody Employee employee){
         employeeRepository.delete(employee);
         return null;
    }

}

