import React from 'react';
import Head from 'next/head';
import { createMarkup } from './Html';

const Metadata: React.FunctionComponent = data => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={createMarkup(JSON.stringify(data))}
    />
  </Head>
);

export default Metadata;
