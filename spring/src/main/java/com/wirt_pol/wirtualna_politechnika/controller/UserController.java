package com.wirt_pol.wirtualna_politechnika.controller;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;

@CrossOrigin

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/users")
    public User saveUser(@Valid @RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> fetchUserList(){
        return userService.fetchUserList();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> fetchUserById(@PathVariable Long id) {
        User user = userService.fetchUserById(id);
        if (user != null)
            return ResponseEntity.ok(user);
        else
            return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{id}")
    public User updateUser(@RequestBody User user, @PathVariable("id") Long userId){
        return userService.updateUser(user, userId);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable("id") Long userId){
        userService.deleteUserById(userId);
        return "Deleted Successfully";
    }

    @PutMapping("/users/{userId}/roles/{roleId}")
    public ResponseEntity<?> assignRoleToUser(@PathVariable Long userId, @PathVariable Long roleId){
        userService.assignRoleToUser(userId, roleId);
        return ResponseEntity.ok().build();
    }

}
