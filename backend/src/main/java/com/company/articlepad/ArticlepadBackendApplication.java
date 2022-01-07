package com.company.articlepad;

import com.company.articlepad.model.Article;
import com.company.articlepad.model.User;
import com.company.articlepad.repository.ArticleRepository;
import com.company.articlepad.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ArticlepadBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArticlepadBackendApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner mappingDemo(UserRepository userRepository,
//										 ArticleRepository articleRepository) {
//		return args -> {
//
//			// create a new book
////			Book book = new Book("Java 101", "John Doe", "123456");
//			User user = new User();
//			user.setFirstName("Anna");
//			user.setLastName("Marnie");
//			user.setEmail("annamarnie@gmail.com");
//
//			userRepository.save(user);
//
//			// create and save new article
//			articleRepository.save(new Article("Cosmos", "Introduction to cosmos", user));
//			articleRepository.save(new Article("Java", "One of the programming language", user));
//			articleRepository.save(new Article("Planes", "Catalog for planes", user));
//		};
//	}
}
