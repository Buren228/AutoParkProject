package com.example.autopark.controllers;

import com.example.autopark.classes.User;
//import com.example.autopark.services.SecurityService;
//import com.example.autopark.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AuthController {

//    @Autowired
//    private UserService userService;
//
//    @Autowired
//    private SecurityService securityService;

    @RequestMapping(value = "/auth", method = RequestMethod.GET)
    public String auth(Model model){
        model.addAttribute("userForm",new User());

        return "auth";
    }

}
