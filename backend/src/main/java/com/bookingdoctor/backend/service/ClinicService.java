package com.bookingdoctor.backend.service;

import com.bookingdoctor.backend.dao.ClinicDAO;
import com.bookingdoctor.backend.entity.ClinicEntity;
import com.bookingdoctor.backend.repository.ClinicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ClinicService {

    private ClinicRepository clinicRepository;

    @Autowired
    public ClinicService(ClinicRepository clinicRepository){
        this.clinicRepository = clinicRepository;
    }

    public Optional<ClinicEntity> getClinic(int id){
        return clinicRepository.findById(id);
    }

    public List<ClinicEntity> getAll(){
        return clinicRepository.findAll();
    }

    public ClinicEntity addClinic(ClinicDAO clinic){
        ClinicEntity newClinic = new ClinicEntity();

        newClinic.setName(clinic.getName());
        newClinic.setDescription(clinic.getDescription());
        newClinic.setAddress(clinic.getAddress());
        newClinic.setWebsite(clinic.getWebsite());
        newClinic.setEstablished(new Date());

        return clinicRepository.save(newClinic);
    }

    public void deleteClinic(int id){
        clinicRepository.deleteById(id);
    }

    public ClinicEntity updateClinic(ClinicDAO clinicUpdate, int id){
        Optional<ClinicEntity> optionalClinicEntity = clinicRepository.findById(id);

        if(optionalClinicEntity.isPresent()){
            ClinicEntity clinic = optionalClinicEntity.get();

            clinic.setName(clinicUpdate.getName());
            clinic.setAddress(clinicUpdate.getAddress());
            clinic.setDescription(clinicUpdate.getDescription());
            clinic.setEmail(clinicUpdate.getEmail());
            clinic.setWebsite(clinicUpdate.getWebsite());
            clinic.setPhone(clinicUpdate.getPhone());

            return clinicRepository.save(clinic);
        }
        else {
            return null;
        }
    }
}
