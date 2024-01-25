package com.bookingdoctor.backend.service;

import com.bookingdoctor.backend.entity.StatusEntity;
import com.bookingdoctor.backend.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StatusService {
    private StatusRepository statusRepository;

    @Autowired
    public StatusService( StatusRepository statusRepository){ this.statusRepository = statusRepository;}

    public Optional<StatusEntity> getStatus(int id){ return statusRepository.findById(id);};

    public List<StatusEntity> getAll(){
        return statusRepository.findAll();
    }

    public StatusEntity addStatus( StatusEntity statusEntity ){
        return statusRepository.save(statusEntity);
    }

    public void deleteStatus(int id){
        statusRepository.deleteById(id);
    }

    public StatusEntity updateStatus(StatusEntity newStatus, int id){
        Optional<StatusEntity> optionalStatusEntity = statusRepository.findById(id);

        if(optionalStatusEntity.isPresent()){
            StatusEntity statusEntity = optionalStatusEntity.get();

            // Update the fields that should be updated
            statusEntity.setName(newStatus.getName());

            // Save new tag to database
            return statusRepository.save(statusEntity);
        }
        else {
            return null;
        }
    }
}
