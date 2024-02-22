package com.bookingdoctor.backend.dao;

import com.bookingdoctor.backend.entity.UserEntity;
import lombok.Data;

@Data
public class StoryDAO {

    private int user_id;

    private String title;

    private String content;

    private String image;


}