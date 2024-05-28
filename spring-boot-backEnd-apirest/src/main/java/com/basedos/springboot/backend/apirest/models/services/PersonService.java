package com.basedos.springboot.backend.apirest.models.services;

import com.basedos.springboot.backend.apirest.models.Person;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PersonService {

    private final Map<Long, Person> personMap = new HashMap<>();
    private Long nextId = 1L;

    public List<Person> getAllPersons() {
        return new ArrayList<>(personMap.values());
    }

    public Person getPersonById(Long id) {
        return personMap.get(id);
    }

    public Person createPerson(Person person) {
        Long id = nextId++;
        person.setId(id);
        personMap.put(id, person);
        return person;
    }

    public Person updatePerson(Long id, Person updatedPerson) {
        if (!personMap.containsKey(id)) {
            return null; // Opcional: Puedes lanzar una excepción aquí si lo prefieres
        }
        updatedPerson.setId(id);
        personMap.put(id, updatedPerson);
        return updatedPerson;
    }

    public void deletePerson(Long id) {
        personMap.remove(id);
    }
}
