package com.wirt_pol.wirtualna_politechnika.repository;

import com.wirt_pol.wirtualna_politechnika.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
