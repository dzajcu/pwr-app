package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import com.wirt_pol.wirtualna_politechnika.service.RoleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class RoleController {
    @Autowired
    RoleService roleService;

    @PostMapping("/roles")
    public Role saveRole(@Valid @RequestBody Role role) {
        return roleService.saveRole(role);
    }

    @GetMapping("/roles")
    public List<Role> fetchRoleList() {
        return roleService.fetchRoleList();
    }

    @GetMapping("roles/{id}")
    public Role fetchRoleById(@PathVariable Long id) {
        return roleService.fetchRoleById(id);
    }

    @PutMapping("/roles/{id}")
    public Role updateRole(@RequestBody Role role, @PathVariable("id") Long roleId) {
        return roleService.updateRole(role, roleId);
    }
}
