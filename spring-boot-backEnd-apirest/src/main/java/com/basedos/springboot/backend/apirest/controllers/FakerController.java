package com.basedos.springboot.backend.apirest.controllers;

import com.basedos.springboot.backend.apirest.models.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class FakerController {

    @Autowired
    private com.basedos.springboot.backend.apirest.models.services.FakerService fakerService;

    @GetMapping("/api/faker/persons")
    public Flux<Person> getPersons(@RequestParam int quantity, @RequestParam(defaultValue = "es_ES") String locale) {
        if (quantity < 1 || quantity > 1000) {
            return Flux.error(new IllegalArgumentException("Quantity must be between 1 and 1000"));
        }
        return fakerService.getPersons(quantity, locale);
    }
}
