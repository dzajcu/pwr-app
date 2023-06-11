package com.wirt_pol.wirtualna_politechnika.service;

import org.springframework.stereotype.Service;

@Service
public interface MainPageService {
    String retrieveIpAddress();

    String retrieveCountryCode();
}
