package com.bookingdoctor.backend.repository;

import com.bookingdoctor.backend.entity.ClinicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicRepository extends JpaRepository<ClinicEntity, Integer> {

}
