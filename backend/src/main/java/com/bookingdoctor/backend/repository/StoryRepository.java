package com.bookingdoctor.backend.repository;

import com.bookingdoctor.backend.entity.StoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryRepository extends JpaRepository<StoryEntity, Integer> {

}