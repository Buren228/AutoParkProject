//package com.example.autopark.controllers;
//
//import com.AutoParkProject.AutoPark.Repos.EmployeeBusRepository;
//import com.AutoParkProject.AutoPark.Repos.EmployeeRepository;
//import com.AutoParkProject.AutoPark.clases.EmployeeBus;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.transaction.Transactional;
//
//@RestController
//@RequestMapping("/empBus")
//public class EmployeeBusController {
//
//    @Autowired
//    private EmployeeBusRepository employeeBusRepository;
//
//    @RequestMapping("/getEmpBusById/{id}")
//    public EmployeeBus getEmployeeBusById(@PathVariable("id") Integer id ) {
////        System.out.println(id);
////        System.out.println(employeeBusRepository.getById(id));
//        return employeeBusRepository.getById(id);
//    }
//}
