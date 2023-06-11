package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.DTO.EventDTO;
import com.wirt_pol.wirtualna_politechnika.service.ApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainpageController {
    private final ApiService apiService;

    public MainpageController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/")
    public List<EventDTO> getEvents() {
        return apiService.getEventList();
    }
}
