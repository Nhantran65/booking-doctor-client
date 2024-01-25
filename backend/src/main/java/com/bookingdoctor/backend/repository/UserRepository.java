package com.bookingdoctor.backend.repository;

import com.bookingdoctor.backend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findFirstByEmail(String email);
}
