import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import Code from './../Code';

const components = {
  code: Code,
};

const MDX: React.FunctionComponent = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDX;
