package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Content;

import java.util.List;

public interface ContentService {
    Content createContent(Content content);
    List<Content> fetchContentList();
    Content fetchContentById(Long contentId);

    //Sprawdzić update ze zmianą tagów
    //Content updateContent(Content content, Long contentId);

    void deleteContentById(Long contentId);
}
