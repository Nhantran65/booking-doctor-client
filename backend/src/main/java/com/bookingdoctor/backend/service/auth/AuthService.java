package com.bookingdoctor.backend.service.auth;

import com.bookingdoctor.backend.dao.SignupDAO;
import com.bookingdoctor.backend.dao.UserDAO;

public interface AuthService {
    UserDAO createUser(SignupDAO signupDAO);
}
