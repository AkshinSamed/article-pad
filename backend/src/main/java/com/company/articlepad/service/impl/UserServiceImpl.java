package com.company.articlepad.service.impl;

import com.company.articlepad.model.User;
import com.company.articlepad.repository.UserRepository;
import com.company.articlepad.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) {
        User user = userRepository.findUsersByEmailAndPassword(email, password);
        return user;
    }


}
