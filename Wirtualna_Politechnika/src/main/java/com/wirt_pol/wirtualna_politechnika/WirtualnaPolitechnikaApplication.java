package com.wirt_pol.wirtualna_politechnika;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WirtualnaPolitechnikaApplication {

    public static void main(String[] args) {
        SpringApplication.run(WirtualnaPolitechnikaApplication.class, args);
    }
    @GetMapping("/")
    public String hello_world(){
        return "Hello World!";
    }

}
