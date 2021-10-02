import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import React from "react";

const Category = ({ category, categories }) => {
  console.log("single-categ -->", category);
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };
  return (
    <Layout categories={categories}>
      <Seo seo={seo} global={global} />
      <div className="container">
        <div className='categoryName'>{category.name}</div>
        <Articles articles={category.articles} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
