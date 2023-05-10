package com.wirt_pol.wirtualna_politechnika.exception;

public class userNotFoundException extends RuntimeException {
    public userNotFoundException(Long userId) {
        super("Could not find user: " + userId);
    }
}
