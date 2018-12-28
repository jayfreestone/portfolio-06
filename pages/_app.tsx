import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import MDX from '../components/wrappers/MDX';
import BaseLayout from '../components/layouts/BaseLayout';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <MDX>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
