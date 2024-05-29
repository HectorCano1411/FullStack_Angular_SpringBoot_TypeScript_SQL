package com.basedos.springboot.backend.apirest.controllers;

import com.basedos.springboot.backend.apirest.exceptions.PersonNotFoundException;
import com.basedos.springboot.backend.apirest.models.Person;
import com.basedos.springboot.backend.apirest.models.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.getAllPersons();
        return new ResponseEntity<>(persons, HttpStatus.OK);
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        try {
            Person person = personService.getPersonById(id);
            return new ResponseEntity<>(person, HttpStatus.OK);
        } catch (PersonNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        try {
            Person createdPerson = personService.createPerson(person);
            return new ResponseEntity<>(createdPerson, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Long id, @RequestBody Person person) {
        try {
            Person updatedPerson = personService.updatePerson(id, person);
            return new ResponseEntity<>(updatedPerson, HttpStatus.OK);
        } catch (PersonNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
        try {
            personService.deletePerson(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (PersonNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
