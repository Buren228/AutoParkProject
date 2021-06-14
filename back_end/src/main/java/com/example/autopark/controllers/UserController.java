package com.example.autopark.controllers;

import com.example.autopark.classes.User;
import com.example.autopark.repos.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/user")
@Slf4j
public class UserController {
    @Autowired
    private UserRepository userRepository;

//    @RequestMapping("/{first_name}/{last_name}")
//    public User getUserByName(@PathVariable("first_name") String first_name, @PathVariable("last_name") String last_name) {
//        return userRepository.getByName(first_name, last_name);
//    }

    @RequestMapping("getById/{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userRepository.getById(id);
    }

    @RequestMapping("/getAll")
    public User[] getAll() {
        return userRepository.getAll();
    }

    @PostMapping("/createNewUser")
    public User createNewUser(@RequestBody User user) {
        System.out.println(user);
        return userRepository.save(user);
}
    @DeleteMapping("/deleteUser")
    public User deleteUser(@RequestBody User user){
         userRepository.delete(user);
         return null;
    }

}

