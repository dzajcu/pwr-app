package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.DTO.ContentDTO;
import com.wirt_pol.wirtualna_politechnika.entity.Content;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ContentService {
    ResponseEntity<Content> createContent(Content content);

    List<ContentDTO> fetchContentByTag(String prefix);

    List<ContentDTO> fetchContentByPage(int startRow);

    List<ContentDTO> fetchContentList();

    ContentDTO fetchContentById(Long contentId);

    String editContent(Content content, Long contentId);

    List<String> getMostRepeatingTagsWithPrefix(String prefix);

    void deleteContentById(Long contentId);
}
