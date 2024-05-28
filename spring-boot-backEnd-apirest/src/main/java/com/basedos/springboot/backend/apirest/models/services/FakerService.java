package com.basedos.springboot.backend.apirest.models.services;


import com.basedos.springboot.backend.apirest.models.Person;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Service
public class FakerService {

    private final WebClient webClient;

    public FakerService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://fakerapi.it/api/v1").build();
    }

    public Flux<Person> getPersons(int quantity, String locale) {
        return this.webClient.get()
                .uri(uriBuilder -> uriBuilder.path("/persons")
                        .queryParam("_quantity", quantity)
                        .queryParam("_locale", locale)
                        .build())
                .retrieve()
                .bodyToFlux(Person.class);
    }
}
