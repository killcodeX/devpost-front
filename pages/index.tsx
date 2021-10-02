import React, { useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Articles from "../components/articles";
import { fetchAPI } from "../lib/api";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getSeo, getArticles } from "../redux/actions/actions";
import { wrapper } from "../redux/store";

const Home = ({ articles, categories, homepage }) => {
  const dispatch = useDispatch();
  const global = useSelector((state: any) => state.global);

  useEffect(() => {
    dispatch(getCategory(categories));
    dispatch(getSeo(homepage));
    dispatch(getArticles(articles));
  }, []);

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} global={global} />
      <div className="container">
        <Articles articles={articles}/>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({store}) => {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
  
};

export default Home;
