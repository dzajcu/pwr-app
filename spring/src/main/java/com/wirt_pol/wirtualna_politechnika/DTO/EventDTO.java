package com.wirt_pol.wirtualna_politechnika.DTO;

import com.wirt_pol.wirtualna_politechnika.entity.Event;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDTO {
    private String eventName;
    private String eventStartTime;
    private String eventStartDate;
    private String eventImageUrl;

    private String chooseImageUrl(Event event) {
        List<Event.Image> imageList = event.getImages();
        for (Event.Image image : imageList) {
            if (Integer.parseInt(image.getHeight()) == 1024
                    && Integer.parseInt(image.getWidth()) == 512)
                return image.getUrl();
        }
        return imageList.get(0).getUrl();
    }

    public EventDTO toEntity(Event event) {
        this.setEventName(event.getName());
        this.setEventStartDate(event.getDates().getStart().getLocalDate());
        this.setEventStartTime(event.getDates().getStart().getLocalTime());
        this.setEventImageUrl(chooseImageUrl(event));
        return this;
    }
}


