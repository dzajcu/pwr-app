package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import com.wirt_pol.wirtualna_politechnika.service.ContentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController

public class ContentController {
    @Autowired
    ContentService contentService;

    @GetMapping("/content")
    public List<Content> fetchContentList(){return contentService.fetchContentList();}

    @GetMapping("/content/{id}")
    public ResponseEntity<Content> fetchContentById(@PathVariable Long id){
        Content content = contentService.fetchContentById(id);
        if(content!=null)
            return ResponseEntity.ok(content);
        else
            return ResponseEntity.notFound().build();
    }
    @PostMapping("/content")
    public Content createContent(@Valid @RequestBody Content content){
        return contentService.createContent(content);
    }
    @DeleteMapping("/user/{id}")
    public void deleteContentById(@PathVariable("id") Long contentId){
        contentService.deleteContentById(contentId);
    }
}
