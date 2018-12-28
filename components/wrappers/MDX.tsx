import React from 'react';
import { MDXProvider } from '@mdx-js/tag';

const components = {};

const MDX: React.FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDX;
