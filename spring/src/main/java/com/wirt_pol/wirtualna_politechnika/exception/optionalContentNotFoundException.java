package com.wirt_pol.wirtualna_politechnika.exception;

public class optionalContentNotFoundException extends RuntimeException {
    public optionalContentNotFoundException(Long contentId) {
        super("Could not find content: " + contentId);
    }
}
