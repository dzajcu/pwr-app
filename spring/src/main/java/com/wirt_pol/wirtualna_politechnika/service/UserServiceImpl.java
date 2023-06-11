package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.exception.roleNotFoundException;
import com.wirt_pol.wirtualna_politechnika.exception.userNotFoundException;
import com.wirt_pol.wirtualna_politechnika.repository.RoleRepository;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> fetchUserList() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User fetchUserById(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.orElseThrow(() -> new userNotFoundException(userId));
    }

    //Sprawdzenie czy 2 podane stringi są różne od siebie i czy 2 string nie jest pusty
    public boolean stringNotEmptyOrEqual(String str1, String str2) {
        return !(str1.equalsIgnoreCase(str2) && str2.equals(""));
    }

    //Funkcja zmiany nazwy użytkownika dla nowej nazwy użytkownika jeśli została ona zmieniona
    public void changeUnIfNotEmpty(User oldUser, User newUser) {
        String oldUsername = oldUser.getUsername(), newUserName = newUser.getUsername();
        if (stringNotEmptyOrEqual(oldUsername, newUserName)) {
            oldUser.setUsername(newUserName);
        }
    }

    //Funkcja zmiany maila użytkownika dla nowego maila jeśli został zmieniony
    public void changeMailIfNotEmpty(User oldUser, User newUser) {
        String oldMail = oldUser.getEmail(), newMail = newUser.getEmail();
        if (stringNotEmptyOrEqual(oldMail, newMail))
            oldUser.setEmail(newMail);
    }

    //Funckja zmieniająca hasło użytkownika jeśli to zostało zmienione
    public void changePasswIfNotEmpty(User oldUser, User newUser) {
        String oldPassw = oldUser.getPassword(), newPassw = newUser.getPassword();
        if (stringNotEmptyOrEqual(oldPassw, newPassw))
            oldUser.setPassword(newPassw);
    }

    //Aktualizowanie danych użytkownika
    @Override
    public User updateUser(User user, Long userId) {

        User usDB = userRepository.findById(userId).get();
        changeUnIfNotEmpty(usDB, user);
        changeMailIfNotEmpty(usDB, user);
        changePasswIfNotEmpty(usDB, user);
        return userRepository.save(usDB);

    }

    @Override
    public String deleteUserById(Long Id) {
        if (userRepository.existsById(Id)) {
            userRepository.deleteById(Id);
            return "Deleted successfully";
        }
        return "User not found";
    }

    @Override
    public ResponseEntity<?> assignRoleToUser(String userName, String roleName) {
        User user = userRepository.findByUsername(userName).orElseThrow(() -> new userNotFoundException(0L));
        Role role = roleRepository.findByRole(roleName).orElseThrow(() -> new roleNotFoundException(0L));
        assert user != null;
        user.setRole(role);
        role.getUsersList().add(user);
        userRepository.save(user);
        roleRepository.save(role);
        return ResponseEntity.ok().build();
    }

    @Override
    public Optional<User> fetchUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}