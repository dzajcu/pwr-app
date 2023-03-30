package com.wirt_pol.wirtualna_politechnika.service;
import java.nio.file.ProviderNotFoundException;
import java.util.Optional;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.repository.RoleRepository;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Override
    public List<User> fetchUserList(){
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User fetchUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.orElse(null);
    }

    @Override
    public User updateUser(User user, Long userId){
        User usDB = userRepository.findById(userId).get();
        if (Objects.nonNull(user.getUsername())
                && !"".equalsIgnoreCase(
                user.getUsername())) {
            usDB.setUsername(
                    user.getUsername());
        }

        if (Objects.nonNull(
                user.getUsername())
                && !"".equalsIgnoreCase(
                user.getEmail())) {
            usDB.setEmail(
                    user.getEmail());
        }

        if (Objects.nonNull(user.getPassword())
                && !"".equalsIgnoreCase(
                user.getPassword())) {
            usDB.setPassword(
                    user.getPassword());
        }

        return userRepository.save(usDB);

    }

    @Override
    public void deleteUserById(Long Id){userRepository.deleteById(Id);}

    @Override
    public void assignRoleToUser(Long userId, Long roleId){
        User user = userRepository.findById(userId).orElse(null);
        Role role = roleRepository.findById(roleId).orElse(null);
        assert user != null;
        user.setRole(role);
        role.getUsersList().add(user);
        userRepository.save(user);
        roleRepository.save(role);
    }
}
