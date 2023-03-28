import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { Helmet } from "react-helmet";
import { RecoilRoot } from "recoil";
import Layout from "../src/commons/layout/layout";
import { globalStyles } from "../src/styles/globalstyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Helmet>
          <meta
            name="viewport"
            content="minimum-scale=1.0, maximum-scale=1.0, user-scalable=no , width=device-width"
          />
        </Helmet>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
