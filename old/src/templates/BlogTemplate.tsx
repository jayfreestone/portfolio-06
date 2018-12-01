import React from 'react';
import { graphql } from 'gatsby';
import Section from '../../../components/Section';
import H from '../../../components/H';
import Layout from '../components/Layout';
import createMarkup from '../utilities/createMarkup';

const BlogTemplate = ({
  data,
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Section>
        <H>{frontmatter.title}</H>
        {frontmatter.date}
        <div
          className="prose"
          dangerouslySetInnerHTML={createMarkup(html)}
        />
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default BlogTemplate;
