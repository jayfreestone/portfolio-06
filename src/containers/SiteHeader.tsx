import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import _path from 'ramda/src/path';
import _prop from 'ramda/src/prop';
import Header from '../components/Header';

const render = (data) => {
  const meta: any = _path(['site', 'siteMetadata'], data);
  return (
    <Header
      title={_prop('title')(meta)}
      navItems={_prop('primaryMenuLinks')(meta)}
    />
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query SiteHeaderQuery {
        site {
          siteMetadata {
            title
            primaryMenuLinks {
              label
              link
            }
          }
        }
      }
    `}
    render={render}
  />
);
