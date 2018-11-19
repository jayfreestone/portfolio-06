import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import SiteHeader from './../containers/SiteHeader';
import Section from './Section';
import './../styles/main.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Section>
          <SiteHeader />
          <div
          >
            {children}
          </div>
        </Section>
      </>
    )}
  />
);

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout;
