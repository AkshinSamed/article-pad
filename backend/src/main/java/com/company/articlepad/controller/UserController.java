package com.company.articlepad.controller;

import com.company.articlepad.model.Article;
import com.company.articlepad.model.User;
import com.company.articlepad.repository.UserRepository;
import com.company.articlepad.service.impl.ArticleServiceImpl;
import com.company.articlepad.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArticleServiceImpl articleService;

    @GetMapping("users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

//    @GetMapping("users/{email}/{password}")
//    public User getUser(){
//        return new User();
//    }

    @GetMapping("users/{email}/{password}")
    public List<Article> getUserArticles(@PathVariable String email,
                                         @PathVariable String password){
        User user = userService.getUserByEmailAndPassword(email, password);
        if(user == null){
            throw new NullPointerException();
        }
        return user.getArticleList();
    }

}
