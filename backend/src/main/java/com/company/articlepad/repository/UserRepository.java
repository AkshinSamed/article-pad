package com.company.articlepad.repository;

import com.company.articlepad.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUsersByEmailAndPassword(String email, String password);
}
