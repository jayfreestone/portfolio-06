import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import App, { Container } from 'next/app';
import MDX from '../components/wrappers/MDX';
import BaseLayout from '../components/layouts/BaseLayout';

const { publicRuntimeConfig: { SITE_URL } } = getConfig();

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, pathname: ctx.pathname };
  }

  render () {
    const { Component, pageProps, pathname } = this.props;

    return (
      <Container>
        <MDX>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/static/img/favicon.png" type="image/png"/>
            <title>Jay Freestone | Front End Developer</title>
            <meta
              name="description"
              content="I’m a front-end developer living and working in East London.I currently lead the front-end team at Browser London where I help build enterprise web-apps."
            />
            <meta
              name="twitter:url"
              content={`${SITE_URL}${pathname}`}
            />
            <meta
              name="twitter:title"
              property="og:title"
              content="Jay Freestone | Front End Developer"
            />
            <meta
              name="twitter:image"
              content={`${SITE_URL}/static/img/jf-social.jpg`}
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
              content={`${SITE_URL}${pathname}`}
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
              content={`${SITE_URL}/static/img/jf-social.jpg`}
            />
          </Head>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </MDX>
      </Container>
    );
  }
}

export default MyApp;
