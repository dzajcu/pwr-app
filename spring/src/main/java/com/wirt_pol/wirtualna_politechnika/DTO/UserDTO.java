package com.wirt_pol.wirtualna_politechnika.DTO;


import com.wirt_pol.wirtualna_politechnika.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Bean;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String userName;
    private String password;

    public static UserDTO fromEntity(User user) {
        UserDTO dto = new UserDTO();
        dto.setPassword(user.getPassword());
        dto.setUserName(user.getUsername());
        return dto;
    }

    public User toEntity() {
        User user = new User();
        user.setUsername(this.userName);
        user.setPassword(this.password);
        return user;
    }
}
