package com.wirt_pol.wirtualna_politechnika.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wirt_pol.wirtualna_politechnika.DTO.EventDTO;
import com.wirt_pol.wirtualna_politechnika.entity.Event;
import com.wirt_pol.wirtualna_politechnika.entity.EventResponse;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Service
public class ApiServiceImpl implements ApiService {
    private final MainPageService mainPageService;

    public ApiServiceImpl(MainPageService mainPageService) {
        this.mainPageService = mainPageService;
    }

    public List<EventDTO> getEventList() {
        String numberOfEvents = "5";
        String apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=" +
                numberOfEvents + "&countryCode=" +
                mainPageService.retrieveCountryCode() + "&apikey=NAadmUZtZTgog8uApYTESIU2c3lPcldp";

        try {
            ObjectMapper mapper = new ObjectMapper();
            EventResponse eventResponse = mapper.readValue(new URL(apiUrl), EventResponse.class);
            List<EventDTO> eventDtos = new ArrayList<>();
            List<Event> events = eventResponse.get_embedded().getEvents();
            for (Event event : events) {
                EventDTO dto = new EventDTO();
                dto.toEntity(event);
                eventDtos.add(dto);
            }
            return eventDtos;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
