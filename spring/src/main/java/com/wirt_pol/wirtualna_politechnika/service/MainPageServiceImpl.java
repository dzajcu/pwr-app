package com.wirt_pol.wirtualna_politechnika.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MainPageServiceImpl implements MainPageService {
    public String retrieveIpAddress() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject("https://ipinfo.io/ip", String.class);
        return response.trim();
    }

    ;

    public String retrieveCountryCode() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(
                "http://ip-api.com/json/" + retrieveIpAddress() + "?fields=countryCode",
                String.class);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(response);
            String countryCode = jsonNode.get("countryCode").asText();
            return countryCode;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error retrieving country code";
        }
    }

    ;
}
