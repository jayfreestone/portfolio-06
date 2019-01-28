import React, { Fragment } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import App, { Container } from 'next/app';
import MDX from '../components/wrappers/MDX';
import BaseLayout from '../components/layouts/BaseLayout';
import { createMarkup } from '../components/Html';

const { publicRuntimeConfig: { URL, ANALYTICS_UID } } = getConfig();

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, pathname: ctx.pathname };
  }

  render() {
    const { Component, pageProps, pathname } = this.props;

    return (
      <Container>
        <Head>
          <link
            rel="preload"
            href="/static/fonts/graphik/subset-a25573ad4f912b1ffce4dc60a7e784a9.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/static/img/favicon.png" type="image/png" />
          <title>Jay Freestone | Front End Developer</title>
          <meta
            name="description"
            content="I’m a front-end developer living and working in East London.I currently lead the front-end team at Browser London where I help build enterprise web-apps."
          />
          <meta
            name="twitter:url"
            content={`${URL}${pathname}`}
          />
          <meta
            name="twitter:title"
            property="og:title"
            content="Jay Freestone | Front End Developer"
          />
          <meta
            name="twitter:image"
            content={`${URL}/static/img/jf-social.jpg`}
          />
          <meta
            name="twitter:card"
            content="summary"
          />
          <meta
            name="twitter:site"
            content="@jayfreestone"
          />
          <meta
            property="og:url"
            content={`${URL}${pathname}`}
          />
          <meta
            property="og:title"
            content="Jay Freestone | Front End Developer"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            property="og:image"
            content={`${URL}/static/img/jf-social.jpg`}
          />
          {ANALYTICS_UID && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_UID}`}
              >
              </script>
              <script
                dangerouslySetInnerHTML={createMarkup(`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', '${ANALYTICS_UID}');
                `)}
              />
            </Fragment>
          )}
        </Head>
        <BaseLayout>
          <MDX>
            <Component {...pageProps} />
          </MDX>
        </BaseLayout>
      </Container>
    );
  }
}

export default MyApp;
