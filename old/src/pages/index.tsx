import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../../../components/Section';
import H from '../../../components/H';
import createMarkup from '../utilities/createMarkup';
import Img from 'gatsby-image';

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => {
  const html = data.content.html;
  const meta = data.content.frontmatter;
  const headerImage = data.headerImage.childImageSharp;
  return (
    <Layout>
      <section>
        <Section>
          <div className="banner">
            <Img
              className="banner__image"
              fluid={Object.assign({}, headerImage.fluid, {
                sizes: '90vw',
              })}
            />
            {meta.title && (
              <H
                className="banner__title h1"
                dangerouslySetInnerHTML={createMarkup(meta.title)}
              />
            )}
          </div>
          {html && (
            <div
              className="prose"
              dangerouslySetInnerHTML={createMarkup(html)}
            />
          )}
          <Section>
            <div className="prose">
              {meta.skills && (
                <>
                  <H>Skills</H>
                  <ul>
                    {meta.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}
              {meta.experience && (
                <>
                  <H>Experience</H>
                  <dl>
                    {meta.experience.map(({ company, role, dates }) => (
                      <Fragment key={role}>
                        <dt>{company}</dt>
                        <dd>
                          {role} <br/>
                          {dates[0]} &ndash; {dates[1] || 'Present'}
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </>
              )}
              {meta.education && (
                <>
                  <H>Education</H>
                  <dl>
                    {meta.education.map(({ establishment, certification, date }) => (
                      <Fragment key={`${establishment}-${certification}`}>
                        <dt>{establishment}</dt>
                        <dd>
                          {certification} <br/>
                          {date}
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </>
              )}
            </div>
          </Section>
        </Section>
      </section>
    </Layout>
  );
};
interface IndexPageMeta {
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

interface IndexPageProps {
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
  query IndexPageQuery {
    headerImage: file(relativePath: { eq: "images/jf-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1125, cropFocus: SOUTH) {
          aspectRatio
          base64
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
    content: markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        path
        title
        skills
        experience {
          company
          role
          dates
        }
        education {
          certification
          establishment
          date
        }
      }
    }
  }
`;

export default IndexPage;
