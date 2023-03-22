package com.wirt_pol.wirtualna_politechnika;

import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;



@DataJpaTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository UserRepositoryTest;

    @Test
    public void SaveUserTest(){
        User user = User.builder()
                .username("AdamMalamysz")
                .email("AdamMalamysz@gmail.com")
                .password("RekordSkoczni139")
                .build();
        UserRepositoryTest.save(user);
        Assertions.assertThat(user.getId());
    }
}
