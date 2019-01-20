import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/main.scss';

const BaseLayout: React.FunctionComponent = ({ children }) => (
  <div>
    <Head>
      <link rel="preload" as="image" href="/static/img/jf-bar-mask.svg"/>
      <link rel="icon" href="/static/img/favicon.png" type="image/png"/>
    </Head>
    <div className="container">
      <Header
        title="Jay Freestone"
        navItems={[
          {
            link: '/#work',
            label: 'Work',
          },
          {
            link: '/writing',
            label: 'Writing',
          },
          {
            link: '#contact',
            label: 'Contact',
          },
        ]}
      />
    </div>
    {children}
    <Footer />
  </div>
);

export default BaseLayout;
