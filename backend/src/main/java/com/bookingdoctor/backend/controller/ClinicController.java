package com.bookingdoctor.backend.controller;

import com.bookingdoctor.backend.dao.ClinicDAO;
import com.bookingdoctor.backend.entity.ClinicEntity;
import com.bookingdoctor.backend.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/clinic")
@RestController
public class ClinicController {

    private ClinicService clinicService;

    @Autowired
    public ClinicController(ClinicService clinicService){
        this.clinicService = clinicService;
    }

    @GetMapping("")
    public ClinicEntity getClinic(@RequestParam int id){
        Optional<ClinicEntity> clinic = clinicService.getClinic(id);
        return (ClinicEntity) clinic.orElse(null);
    }

    @GetMapping("/all")
    public List<ClinicEntity> getAllClinics(){
        return clinicService.getAll();
    }

    @PostMapping("/add")
    public void addClinic(@RequestBody ClinicDAO clinic){
        clinicService.addClinic(clinic);
    }

    @PutMapping("/update")
    public void updateClinic(@RequestBody ClinicDAO clinic, @RequestParam int id){
        clinicService.updateClinic(clinic,id);
    }

    @DeleteMapping("/delete")
    public void deleteClinic(@RequestParam int id){
        clinicService.deleteClinic(id);
    }


}
