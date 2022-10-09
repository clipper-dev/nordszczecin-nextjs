import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { description, title } from "../data/main";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="UTF-8"></meta>
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="/res/1.jpg" href="/res/1.jpg" />
        <meta name="robots" content="index, follow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
      id="gtm-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtm-script2" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
