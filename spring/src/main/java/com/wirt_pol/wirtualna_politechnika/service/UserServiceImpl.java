package com.wirt_pol.wirtualna_politechnika.service;
import java.util.Optional;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

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
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        }
        return null;
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
    public void deleteUserById(Long Id){
        userRepository.deleteById(Id);
    }
}
