package com.wirt_pol.wirtualna_politechnika.service;

import com.wirt_pol.wirtualna_politechnika.DTO.EventDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ApiService {
    List<EventDTO> getEventList();
}
