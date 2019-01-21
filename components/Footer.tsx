import React, { Fragment } from 'react';
import H from './H';
import Section from './Section';
import { meta } from './../data/writing/bio.mdx';
const { social } = meta;

const Footer = () => (
  <footer className="site-footer" id="contact">
    <div className="container">
      <div className="site-footer__inner">
        <Section>
          <div className="site-footer__title">
            <H>Contact</H>
          </div>
          <dl className="site-footer__contact">
            {Object.keys(social).map((key) => {
              const item = social[key];
              return (
                <Fragment>
                  <dt>{item.type}</dt>
                  <dd>
                    <a
                      href={item.link}
                      {...(item.link.indexOf('http') > -1 ? {
                        target: '_blank',
                        rel: 'noopener',
                      } : {})}
                    >
                      {item.label}
                    </a>
                  </dd>
                </Fragment>
              );
            })}
          </dl>
        </Section>
        <div className="site-footer__copyright">
          &copy; {new Date().getFullYear()} Jay Freestone
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
