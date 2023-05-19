package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.exception.optionalContentNotFoundException;
import com.wirt_pol.wirtualna_politechnika.repository.ContentRepository;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.wirt_pol.wirtualna_politechnika.service.JwtService;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ContentServiceImpl implements ContentService {
    private final ContentRepository contentRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<Content> createContent(Content content){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(()->new UsernameNotFoundException("Not found"));
        content.setCreationTime(LocalDateTime.now());
        content.setAuthor(user);
        Content savedContent = contentRepository.save(content);
        user.getUserPosts().add(savedContent);
        return ResponseEntity.ok(savedContent);
    }

    @Override
    public List<Content> fetchContentList(){return(List<Content>) contentRepository.findAll();}

    @Override
    public Content fetchContentById(Long contentId){
        Optional<Content> optionalContent = contentRepository.findById(contentId);
        return  optionalContent.orElseThrow(() -> new optionalContentNotFoundException(contentId));
    }

    @Override
    public void deleteContentById(Long contentId){contentRepository.deleteById(contentId);}
}
