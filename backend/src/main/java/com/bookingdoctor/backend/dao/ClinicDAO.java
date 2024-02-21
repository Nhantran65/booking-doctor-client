package com.bookingdoctor.backend.dao;

import lombok.Data;

@Data
public class ClinicDAO {

    private String name;

    private String description;

    private String address;

    private String phone;

    private String email;

    private String website;
}
