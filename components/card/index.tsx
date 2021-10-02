import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";
import Moment from "react-moment";
import {
  CardWrapper,
  CardUpper,
  ImageWrapper,
  CardLower,
  ArticleDetails,
  ArticleCategory,
  ArticleDate,
  ArticleAuthor,
  ArticleTitle,
  ArticleDescription,
} from "./style";

export default function Cards({ article }) {
  console.log(article);
  return (
    <CardWrapper>
      <CardUpper>
        {/* <ImageWrapper></ImageWrapper> */}
        <div className="unset-img">
          <Image
            src={getStrapiMedia(article.image)}
            alt={article.title}
            layout="fill"
            className="custom-img"
          />
        </div>
      </CardUpper>
      <CardLower>
        <ArticleDetails>
          <ArticleCategory>{article.category.name}</ArticleCategory>
          <ArticleDate>
            <Moment format="Do/MM/YY">{article.published_at}</Moment>
          </ArticleDate>
          <ArticleAuthor>{article.author.name}</ArticleAuthor>
        </ArticleDetails>
        <Link as={`/article/${article.slug}`} href="/article/[id]">
          <ArticleTitle>{article.title}</ArticleTitle>
        </Link>
        <ArticleDescription>{article.description}</ArticleDescription>
      </CardLower>
    </CardWrapper>
  );
}
