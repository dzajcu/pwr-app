package com.wirt_pol.wirtualna_politechnika.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class optionalContentNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(optionalContentNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String optionalContentNotFoundHandler(optionalContentNotFoundException ex){

        return ex.getMessage();
    }
}
