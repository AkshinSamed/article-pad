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
//			user.setFirstName("Adam");
//			user.setLastName("Henry");
//			user.setEmail("adamhenry@gmail.com");
//			user.setPassword("Fly_1107!@");
//
//			userRepository.save(user);
//
//			// create and save new article
//			articleRepository.save(new Article("Physics", "Introduction to physics", user));
//			articleRepository.save(new Article("Spring Framework", "Essantials for Spring and Spring Boot", user));
//		};
//	}
}
