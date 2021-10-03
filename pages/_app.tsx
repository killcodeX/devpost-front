import App from "next/app";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/theme";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
import { fetchAPI } from "../lib/api";
import { getGlobal } from "../redux/actions/actions";
import { getStrapiMedia } from "../lib/media";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const { global } = pageProps;

  useEffect(() => {
    dispatch(getGlobal(global));
  }, []);

  const theme = useSelector((state: any) => state.theme);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        {/* bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" /> */}
        <title>{global.siteName}</title>
      </Head>
      <ThemeProvider theme={theme ? dark : light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};

export default wrapper.withRedux(MyApp);
