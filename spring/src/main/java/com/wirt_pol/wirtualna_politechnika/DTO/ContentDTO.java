package com.wirt_pol.wirtualna_politechnika.DTO;

import com.wirt_pol.wirtualna_politechnika.entity.Content;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentDTO {
    private String description;
    private LocalDateTime creationTime;
    private List<String> tags;
    private String author;

    public static ContentDTO fromContent(Content content){
        ContentDTO dto = new ContentDTO();
        dto.setDescription(content.getDescription());
        dto.setCreationTime(content.getCreationTime());
        dto.setTags(content.getTags());
        dto.setAuthor(content.getAuthor().getUsername());
        return dto;
    }
}
