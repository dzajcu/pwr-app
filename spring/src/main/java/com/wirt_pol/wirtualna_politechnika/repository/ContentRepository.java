package com.wirt_pol.wirtualna_politechnika.repository;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends CrudRepository<Content, Long> {
}
