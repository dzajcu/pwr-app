package com.wirt_pol.wirtualna_politechnika.service;
import com.wirt_pol.wirtualna_politechnika.entity.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> fetchUserList();
    User updateUser(User user, Long userId);
    void deleteUserById(Long UserId);

}
