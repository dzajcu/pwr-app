package com.wirt_pol.wirtualna_politechnika.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table (name = "users")
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    @Column (name = "username",nullable = false)
    private String username;
    @Column (name = "email", nullable = false)
    private String email;
    @Column(name = "password",nullable = false)
    private String password;

}
