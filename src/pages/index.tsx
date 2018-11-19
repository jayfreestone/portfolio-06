import React from 'react';
import { Link, graphql } from 'gatsby';
import _prop from 'ramda/src/prop';
import _path from 'ramda/src/path';
import Layout from '../components/Layout';
import Section from '../components/Section';
import H from '../components/H';
import createMarkup from '../utilities/createMarkup';

const IndexPage = ({ data }) => {
  const html: string = _path(['markdownRemark', 'html'], data);
  const meta = _path(['markdownRemark', 'frontmatter'], data);
  return (
    <Layout>
      <section>
        <Section>
          <H className="h1" dangerouslySetInnerHTML={createMarkup(_prop('title', meta))} />
          <div className="prose" dangerouslySetInnerHTML={createMarkup(html)} />
        </Section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default IndexPage;
