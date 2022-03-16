package com.company.articlepad.service;

import com.company.articlepad.model.Article;
import com.company.articlepad.model.User;

import java.util.List;

public interface ArticleService {
    List<Article> getAllArticles();
    List<Article> getAllArticlesByUser(User user);


}
