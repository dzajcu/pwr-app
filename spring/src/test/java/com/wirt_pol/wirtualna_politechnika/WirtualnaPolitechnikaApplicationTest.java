package com.wirt_pol.wirtualna_politechnika;

import com.wirt_pol.wirtualna_politechnika.entity.Role;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.service.RoleService;
import com.wirt_pol.wirtualna_politechnika.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
@Profile("test")
public class WirtualnaPolitechnikaApplicationTest {

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
   @Test
    public void testSaveUser(){
       User user = new User().builder()
               .username("xXSlayer69PLXx")
               .email("mich4l.m4tczak@gmail.com")
               .password("MichalMatczak123")
               .build();
       User savedUser = userService.saveUser(user);
       assertNotNull(savedUser.getId());
       assertEquals(savedUser.getUsername(), user.getUsername());
       assertEquals(savedUser.getPassword(), user.getPassword());
       assertEquals(savedUser.getEmail(), user.getEmail());

   }
   @Test
    public void testUserFetchList(){
       List<User> userList = userService.fetchUserList();
       assertNotNull(userList);
   }

    @Test
    public void testFetchById(){
        User user = new User().builder()
                .username("CBum")
                .email("Ben.Dover@gmail.com")
                .password("Jim225")
                .build();
        User savedUser = userService.saveUser(user);

        Long userId = savedUser.getId();
        User fetchedUser = userService.fetchUserById(userId);

        assertNotNull(fetchedUser);
        assertEquals(user.getUsername(), fetchedUser.getUsername());
        assertEquals(user.getEmail(), fetchedUser.getEmail());
        assertEquals(user.getPassword(), fetchedUser.getPassword());
    }
    @Test
    public void testDeleteUserById(){
        User user = new User().builder()
                .username("RonnieColeman")
                .email("lighweight@gmail.com")
                .password("YeahBuddy")
                .build();

        User savedUser = userService.saveUser(user);

        Long userId = savedUser.getId();
        String result = userService.deleteUserById(userId);

        assertEquals("Deleted successfully", result);
    }
    @Test
    public void testUpdateUser(){
       User oldUser = new User().builder()
               .username("MikehOearn")
               .email("mike.hoearn@gmail.com")
               .password("BabyHurtMe")
               .build();
       User savedOldUser = userService.saveUser(oldUser);
       Long oldUserId = savedOldUser.getId();

       User updatedUser = new User().builder()
               .username("MikeOhearn")
               .email("mike.ohearn@gmail.com")
               .password("BabyDontHurtMe")
               .build();
       User savedUpdatedUser = userService.updateUser(updatedUser, oldUserId);
       assertEquals(oldUserId, savedUpdatedUser.getId());
       assertEquals(updatedUser.getUsername(), savedUpdatedUser.getUsername());
       assertEquals(updatedUser.getEmail(), savedUpdatedUser.getEmail());
       assertEquals(updatedUser.getPassword(), savedUpdatedUser.getPassword());
    }

    @Test
    public void testAssignRoleToUser(){
        User user = new User();
        user.setUsername("Zyzz");
        user.setEmail("Aziz.Segiejewicz@gmail.com");
        user.setPassword("Hardstyle");

        User savedUser = userService.saveUser(user);

        Long userId = savedUser.getId();

        Role role = Role.builder()
                .role("JIMBRO")
                .build();

        Role savedRole = roleService.saveRole(role);
        Long roleId = savedRole.getId();

        ResponseEntity<?> response = userService.assignRoleToUser(userId.toString(), roleId.toString());

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    }
