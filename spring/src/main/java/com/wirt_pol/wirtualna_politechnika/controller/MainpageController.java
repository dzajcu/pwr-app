package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.service.MainPageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainpageController {
    private final MainPageService mainPageService;

    public MainpageController(MainPageService mainPageService) {
        this.mainPageService = mainPageService;
    }

    @GetMapping("/")
    public String getExternalIP() {
        return mainPageService.retrieveCountryCode();
    }
}
