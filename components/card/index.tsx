import React from "react";
import Link from "next/link";
import Image from "../image";
import Moment from "react-moment";
import {
  CardWrapper,
  CardUpper,
  CardLower,
  ArticleDetails,
  ArticleCategory,
  ArticleDate,
  ArticleAuthor,
  ArticleTitle,
  ArticleDescription,
} from "./style";

export default function Cards({ article }) {
  return (
    <CardWrapper>
      <CardUpper>
        <Image image={article.image} />
      </CardUpper>
      <CardLower>
        <ArticleDetails>
          <ArticleCategory>{article.category.name}</ArticleCategory>
          <ArticleDate>
            <Moment format="Do/MM/YY">{article.published_at}</Moment>
          </ArticleDate>
          <ArticleAuthor>Aaquib Ahmed</ArticleAuthor>
        </ArticleDetails>
        <Link as={`/article/${article.slug}`} href="/article/[id]">
          <ArticleTitle>{article.title}</ArticleTitle>
        </Link>
        <ArticleDescription>{article.description}</ArticleDescription>
      </CardLower>
    </CardWrapper>
  );
}
