package com.company.articlepad.service.impl;

import com.company.articlepad.model.Article;
import com.company.articlepad.model.User;
import com.company.articlepad.repository.ArticleRepository;
import com.company.articlepad.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @Override
    public List<Article> getAllArticlesByUser(User user) {
        return user.getArticleList();
    }


}
