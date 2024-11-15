import Layout from "@/components/Layout";
import GlobalStyles from "@/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <div id="wrapper">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
