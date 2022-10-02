package com.thekoon.kgc_information;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String mainController() {
        System.out.println("MainController.mainController");
        return "ability/ability";
    }
}
