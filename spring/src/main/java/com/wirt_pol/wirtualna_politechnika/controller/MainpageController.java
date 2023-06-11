package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.DTO.EventDTO;
import com.wirt_pol.wirtualna_politechnika.service.ApiService;
import com.wirt_pol.wirtualna_politechnika.service.MainPageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainpageController {
    private final MainPageService mainPageService;
    private final ApiService apiService;

    public MainpageController(MainPageService mainPageService, ApiService apiService) {
        this.mainPageService = mainPageService;
        this.apiService = apiService;
    }

    @GetMapping("/")
    public List<EventDTO> getEvents() {
        return apiService.getEventList();
    }
}
