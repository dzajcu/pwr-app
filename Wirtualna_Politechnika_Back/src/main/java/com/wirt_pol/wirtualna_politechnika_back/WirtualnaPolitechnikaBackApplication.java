package com.wirt_pol.wirtualna_politechnika_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WirtualnaPolitechnikaBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(WirtualnaPolitechnikaBackApplication.class, args);
    }
    @RequestMapping ("/")
    public String hello_world(){
        return "Hello World!";
    }
}
