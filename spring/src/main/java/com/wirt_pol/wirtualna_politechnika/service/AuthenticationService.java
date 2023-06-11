package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.*;
import com.wirt_pol.wirtualna_politechnika.exception.userNotFoundException;
import com.wirt_pol.wirtualna_politechnika.repository.RoleRepository;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RoleRepository roleRepository;

    public AuthenticationResponse register(RegisterRequest registerRequest) {
        Role role = roleRepository.findByRole("User").orElseThrow(() -> new IllegalArgumentException("Role not found"));
        var user = User.builder()
                .username(registerRequest.getUserName())
                .email(registerRequest.getEMail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(role)
                .userPosts(null)
                .build();
        userRepository.save(user);
        role.getUsersList().add(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUserName(),
                        authenticationRequest.getPassword()
                )
        );
        var user = userRepository.findByUsername(authenticationRequest.getUserName())
                .orElseThrow(() -> new userNotFoundException(0L));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
