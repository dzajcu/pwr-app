package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RoleService {
    Role saveRole(Role role);

    List<Role> fetchRoleList();

    Role fetchRoleById(Long roleId);

    Role updateRole(Role role, Long roleId);

    void deleteRoleById(Long roleId);

}
