package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import java.util.List;
import com.wirt_pol.wirtualna_politechnika.service.RoleService;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class RoleController {
    @Autowired
    RoleService roleService;

    @PostMapping("/roles")
    public Role saveRole(@Valid @RequestBody Role role) {return roleService.saveRole(role);}
    @GetMapping ("/roles")
    public List<Role> fetchRoleList(){return roleService.fetchRoleList();}
    @GetMapping("roles/{id}")
    public Role fetchRoleById(@PathVariable Long id){
        return roleService.fetchRoleById(id);
    }
    @PutMapping("/roles/{id}")
    public Role updateRole(@RequestBody Role role, @PathVariable("id") Long roleId){
        return roleService.updateRole(role, roleId);
    }
}
