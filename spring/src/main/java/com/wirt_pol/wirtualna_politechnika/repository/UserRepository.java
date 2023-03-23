package com.wirt_pol.wirtualna_politechnika.repository;

import com.wirt_pol.wirtualna_politechnika.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{

}
