import React from "react";
import Card from "../card";
import { ArticleWrapper } from "./style";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <ArticleWrapper className="row">
      <div className="col-md-8">
        {leftArticles.map((article) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </div>
      <div className="col-md-4">
        {rightArticles.map((article) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </div>
    </ArticleWrapper>
  );
};

export default Articles;
