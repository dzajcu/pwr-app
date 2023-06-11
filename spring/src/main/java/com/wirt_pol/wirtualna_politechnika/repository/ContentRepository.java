package com.wirt_pol.wirtualna_politechnika.repository;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContentRepository extends CrudRepository<Content, Long> {
    Page<Content> findAll(Pageable pageable);
    List<Content> findByTagsStartingWith(String prefix);
}
