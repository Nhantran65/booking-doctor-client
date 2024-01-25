package com.bookingdoctor.backend.controller;

import com.bookingdoctor.backend.entity.StatusEntity;
import com.bookingdoctor.backend.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/status")
@RestController
public class StatusController {

    private StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService){
        this.statusService = statusService;
    }

    @GetMapping("")
    public StatusEntity getStatus(@RequestParam int id){
        Optional<StatusEntity> optionalStatusEntity = statusService.getStatus(id);
        return (StatusEntity) optionalStatusEntity.orElse(null);
    }

    @GetMapping("/all")
    public List<StatusEntity> getAllStatuses(){
        return statusService.getAll();
    }

    @PostMapping("/add")
    public void addStatus(@RequestBody StatusEntity newStatus){
        statusService.addStatus(newStatus);
    }

    @PutMapping("/update")
    public void updateStatus(@RequestBody StatusEntity newStatus, int id){
        statusService.updateStatus(newStatus,id);
    }

    @DeleteMapping("delete")
    public void deleteStatus(@RequestParam int id){
        statusService.deleteStatus(id);
    }

}
