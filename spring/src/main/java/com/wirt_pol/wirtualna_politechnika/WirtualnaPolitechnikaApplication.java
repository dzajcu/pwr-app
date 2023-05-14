package com.wirt_pol.wirtualna_politechnika;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class WirtualnaPolitechnikaApplication {

    public static void main(String[] args) {
        SpringApplication.run(WirtualnaPolitechnikaApplication.class, args);

    }
    @RestController
    class HelloWorldController {
        @GetMapping("/")
        public String hello() {
            return "HelloWorld";
        }
    }
}
