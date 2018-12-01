import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../../../components/Section';
import H from '../../../components/H';
import createMarkup from '../utilities/createMarkup';
import Img from 'gatsby-image';

const WritingPage: React.SFC<IndexPageProps> = ({ data }) => {
  const posts = data.posts.edges;
  console.log(posts);
  return (
    <Layout>
      <section>
        <Section>
          <H>
            Writing
          </H>
          {posts && (
            posts.map(({ node }) => (
              <Section key={node.frontmatter.path}>
                <article>
                  <H>
                    <Link to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </Link>
                  </H>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={createMarkup(node.excerpt)}
                  />
                </article>
              </Section>
            ))
          )}
        </Section>
      </section>
    </Layout>
  );
};

interface WritingPageMeta {
  title: string;
  skills?: string[];
  experience?: {
    company: string,
    role: string,
    dates: string[],
  }[];
  education?: {
    establishment: string,
    certification: string,
    date: string,
  }[];
}

interface WritingPageProps {
  data: {
    headerImage: {
      childImageSharp: {
        fluid: Object;
      };
    },
    content: {
      html: string,
      frontmatter: IndexPageMeta;
    };
  };
}

export const query = graphql`
  query WritingQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fileAbsolutePath: {regex : "\\/writing/"} },
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;

export default WritingPage;
