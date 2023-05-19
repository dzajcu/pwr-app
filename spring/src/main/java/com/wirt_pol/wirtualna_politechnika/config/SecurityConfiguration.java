package com.wirt_pol.wirtualna_politechnika.config;
import com.wirt_pol.wirtualna_politechnika.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.wirt_pol.wirtualna_politechnika.entity.Role;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter JwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;
    private final RoleRepository roleRepository;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        Role adminRole = new Role();
        adminRole.setRole("Admin");
        Role userRole = new Role();
        userRole.setRole("User");
        roleRepository.save(adminRole);
        roleRepository.save(userRole);

        http
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers("/user/auth/**", "/")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(JwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
