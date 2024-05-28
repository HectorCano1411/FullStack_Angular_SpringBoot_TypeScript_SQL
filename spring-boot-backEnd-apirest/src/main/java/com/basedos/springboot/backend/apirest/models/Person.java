package com.basedos.springboot.backend.apirest.models;

import lombok.Data;

@Data
public class Person {
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private String birthday;
    private String gender;
    private Address address;
    private String website;
    private String image;

    @Data
    public static class Address {
        private Long id;
        private String street;
        private String streetName;
        private String buildingNumber;
        private String city;
        private String zipcode;
        private String country;
        private String county_code;
        private Double latitude;
        private Double longitude;
    }
}
