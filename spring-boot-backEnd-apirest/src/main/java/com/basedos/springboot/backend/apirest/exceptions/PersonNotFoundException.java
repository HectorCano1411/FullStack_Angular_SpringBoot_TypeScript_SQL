package com.basedos.springboot.backend.apirest.exceptions;

public class PersonNotFoundException extends RuntimeException {

    public PersonNotFoundException(String message) {
        super(message);
    }
}
