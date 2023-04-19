package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ContentService {
    Content createContent(Content content);
    List<Content> fetchContentList();
    Content fetchContentById(Long contentId);

    //Sprawdzić update ze zmianą tagów
    //Content updateContent(Content content, Long contentId);

    void deleteContentById(Long contentId);
}
