package com.wirt_pol.wirtualna_politechnika.DTO;

import com.wirt_pol.wirtualna_politechnika.entity.User;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    @NotNull(message = "Username box cannot be left empty")
    @Size(min = 3, max = 25, message = "Username must have 3 to 25 letters")
    private String userName;

    @NotNull(message = "Password box cannot be left empty")
    @Size(min = 6, max = 25, message = "Password must have 6 to 25 letters")
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
