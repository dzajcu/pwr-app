package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.DTO.ContentDTO;
import com.wirt_pol.wirtualna_politechnika.entity.Content;
import com.wirt_pol.wirtualna_politechnika.entity.User;
import com.wirt_pol.wirtualna_politechnika.exception.optionalContentNotFoundException;
import com.wirt_pol.wirtualna_politechnika.repository.ContentRepository;
import com.wirt_pol.wirtualna_politechnika.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ContentServiceImpl implements ContentService {
    private final ContentRepository contentRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<Content> createContent(Content content) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        content.setCreationTime(LocalDateTime.now());
        content.setAuthor(user);
        Content savedContent = contentRepository.save(content);
        user.getUserPosts().add(savedContent);
        return ResponseEntity.ok(savedContent);
    }

    @Override
    public List<ContentDTO> fetchContentByPage(int page) {
        int pageSize = 15;
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by("creationTime").descending());
        List<Content> contentList = contentRepository.findAll(pageable).getContent();
        List<ContentDTO> dtoList = new ArrayList<>();
        for (Content content : contentList) {
            ContentDTO dto = new ContentDTO(content.getDescription(),
                    content.getCreationTime(), content.getTags(), content.getAuthor().getUsername());
            dtoList.add(dto);
        }
        return dtoList;
    }

    @Override
    public List<ContentDTO> fetchContentList() {
        List<Content> contentList = (List<Content>) contentRepository.findAll();
        List<ContentDTO> dtoList = new ArrayList<>();
        for (Content content : contentList) {
            ContentDTO dto = new ContentDTO(content.getDescription(),
                    content.getCreationTime(), content.getTags(), content.getAuthor().getUsername());
            dtoList.add(dto);
        }
        return dtoList;
    }

    @Override
    public List<ContentDTO> fetchContentByTag(String prefix) {
        List<ContentDTO> contentList = fetchContentList();
        List<ContentDTO> filteredByTags = new ArrayList<>();
        for (ContentDTO content : contentList) {
            List<String> tags = content.getTags();
            for (String tag : tags) {
                if (tag.toLowerCase().startsWith(prefix.toLowerCase())) {
                    filteredByTags.add(content);
                    break;
                }
            }
        }
        return filteredByTags;
    }

    @Override
    public ContentDTO fetchContentById(Long contentId) {
        Optional<Content> optionalContent = contentRepository.findById(contentId);
        Content content = optionalContent.orElseThrow(() -> new optionalContentNotFoundException(contentId));
        return ContentDTO.fromContent(content);
    }

    @Override
    public String editContent(Content newContent, Long oldContentId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("Not found"));
        Content content = contentRepository.findById(oldContentId).orElseThrow(() -> new optionalContentNotFoundException(oldContentId));
        content.setTags(newContent.getTags());
        content.setAuthor(user);
        content.setDescription(newContent.getDescription());
        contentRepository.save(content);
        return "Updated succesfully";
    }

    @Override
    public void deleteContentById(Long contentId) {
        contentRepository.deleteById(contentId);
    }

    public List<String> getMostRepeatingTagsWithPrefix(String prefix) {
        List<Content> contentList = (List<Content>) contentRepository.findAll();
        Map<String, Integer> tagCountMap = new HashMap<>();

        for (Content content : contentList) {
            for (String tag : content.getTags()) {
                if (tag.contains(prefix)) {
                    tagCountMap.put(tag, tagCountMap.getOrDefault(tag, 0) + 1);
                }
            }
        }

        List<Map.Entry<String, Integer>> sortedTagsByCount = new ArrayList<>(tagCountMap.entrySet());
        sortedTagsByCount.sort(Map.Entry.comparingByValue(Comparator.reverseOrder()));

        List<String> mostRepeatingTags = sortedTagsByCount.stream()
                .limit(5)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        return mostRepeatingTags;
    }
}