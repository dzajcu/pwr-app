package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import com.wirt_pol.wirtualna_politechnika.exception.roleNotFoundException;
import com.wirt_pol.wirtualna_politechnika.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public List<Role> fetchRoleList() {
        return (List<Role>) roleRepository.findAll();
    }

    ;

    @Override
    public Role fetchRoleById(Long roleId) {
        Optional<Role> optionalRole = roleRepository.findById(roleId);
        return optionalRole.orElseThrow(() -> new roleNotFoundException(roleId));
    }

    @Override
    public Role updateRole(Role role, Long roleId) {
        Role roleDB = roleRepository.findById(roleId).get();
        if (Objects.nonNull(role.getRole()) && !"".equalsIgnoreCase(
                role.getRole())) {
            roleDB.setRole(role.getRole());
        }
        return roleRepository.save(roleDB);
    }

    @Override
    public void deleteRoleById(Long roleId) {
        roleRepository.deleteById(roleId);
    }

    ;
}