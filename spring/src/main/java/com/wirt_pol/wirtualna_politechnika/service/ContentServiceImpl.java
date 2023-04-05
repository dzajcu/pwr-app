package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import com.wirt_pol.wirtualna_politechnika.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContentServiceImpl implements ContentService {
    @Autowired
    private ContentRepository contentRepository;

    @Override
    public Content createContent(Content content){return contentRepository.save(content);}

    @Override
    public List<Content> fetchContentList(){return(List<Content>) contentRepository.findAll();}

    @Override
    public Content fetchContentById(Long contentId){
        Optional<Content> optionalContent = contentRepository.findById(contentId);
        return  optionalContent.orElse(null);
    }

    @Override
    public void deleteContentById(Long contentId){contentRepository.deleteById(contentId);}
}
