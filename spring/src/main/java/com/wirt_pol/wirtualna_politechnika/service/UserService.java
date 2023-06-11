package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    User saveUser(User user);

    List<User> fetchUserList();

    User fetchUserById(Long userId);

    User updateUser(User user, Long userId);

    String deleteUserById(Long UserId);

    ResponseEntity<?> assignRoleToUser(String userName, String roleName);

    Optional<User> fetchUserByUsername(String username);
    //User login(String username, String password);
}
