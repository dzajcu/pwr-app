package com.wirt_pol.wirtualna_politechnika.exception;

public class roleNotFoundException extends RuntimeException {
    public roleNotFoundException(Long roleId) {

        super("Could not find role: " + roleId);
    }
}
