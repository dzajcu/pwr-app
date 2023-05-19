package com.wirt_pol.wirtualna_politechnika;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import com.wirt_pol.wirtualna_politechnika.repository.RoleRepository;
import com.wirt_pol.wirtualna_politechnika.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class WirtualnaPolitechnikaApplication {

    public static void main(String[] args) {
        SpringApplication.run(WirtualnaPolitechnikaApplication.class, args);
    }
    @RestController
    class HelloWorldController {
        @GetMapping("/")
        public ResponseEntity<String> sayHello(){
            return ResponseEntity.ok("Hello");
        }
    }
}
