package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.DTO.ContentDTO;
import com.wirt_pol.wirtualna_politechnika.entity.Content;
import com.wirt_pol.wirtualna_politechnika.service.ContentService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController

public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping("/content")
    public List<ContentDTO> fetchContentList(){
        return contentService.fetchContentList();
    }

    @GetMapping("/content/id/{id}")
    public ContentDTO fetchContentById(@PathVariable Long id){
        return contentService.fetchContentById(id);
    }
    @GetMapping("/content/page/{id}")
    public List<ContentDTO> fetchContentByPage(@PathVariable int id){
        return contentService.fetchContentByPage(id);
    }
    @GetMapping("/content/tag/{tag}")
    public List<ContentDTO> fetchContentByTag(@PathVariable String tag){
        return contentService.fetchContentByTag(tag);
    }
    @PostMapping("/content")
    public ResponseEntity<Content> createContent(@Valid @RequestBody Content content){
        return contentService.createContent(content);
    }
    @DeleteMapping("/user/{id}")
    public void deleteContentById(@PathVariable("id") Long contentId){
        contentService.deleteContentById(contentId);
    }
}
//TODO Zedytowac fetchowanie contentu tak aby wyswietlal sie user
//TODO PutMapping dla contentu
//TODO Zwracanie contentu po tagach