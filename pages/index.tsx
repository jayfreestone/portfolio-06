import React, { Fragment } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import H from '../components/H';
import Section from '../components/Section';
import Prose from '../components/Prose';
import Work from '../components/Work';
import Bio, { meta } from './../data/writing/bio.mdx';

const { publicRuntimeConfig: { SITE_URL } } = getConfig();

const { experience, skills, education, social, work } = meta;

const Index = () => (
  <div className="bio">
    <Head>
      <title>Jay Freestone | Front-end Developer & Designer</title>
      <meta name="twitter:url" content={SITE_URL}/>
      <meta name="twitter:title" property="og:title" content="Jay Freestone | Front-end Developer & Designer"/>
      <meta name="twitter:image" content={`${SITE_URL}/static/img/jf-social.jpg`}/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@jayfreestone"/>
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content="Jay Freestone | Front-end Developer & Designer"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={`${SITE_URL}/static/img/jf-social.jpg`}/>
    </Head>
    <div className="bio__section banner">
      <div className="banner__inner">
        <div className="banner__image">
          <img src="/static/img/jf-bar-mask.svg" alt="" />
          <img
            srcSet="
              /static/img/jf-bar-sm.jpg 512w,
              /static/img/jf-bar-md.jpg 1024w,
              /static/img/jf-bar-lg.jpg 2048w
            "
            sizes="
              calc(100vw - (2 * var(--s-h-pad))),
              (min-width: 22em) 35vw
            "
            src="/static/img/jf-bar-md.jpg"
            alt="Photo of Jay sitting with a drink"
          />
        </div>
        <div className="banner__title h1">
          <Prose>
            <Bio />
          </Prose>
        </div>
      </div>
    </div>
    <div className="bio__main">
      <section id="stats" className="bio__section bio__stats stats">
        <Section>
          <div className="stats__section">
            <H className="stats__title">Experience</H>
            <dl>
              {experience.map(({ dates, place, role }) => (
                <Fragment>
                  <dt>{place}</dt>
                  <dd>
                    {role}<br />
                    {(dates.length === 1 ? [...dates, 'Present'] : dates).join('–')}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </div>
          <div className="stats__section">
            <H className="stats__title">Skills</H>
            <ul>
              {skills.map(skill => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="stats__section">
            <H className="stats__title">Education</H>
            <dl>
              {education.map(({ place, qualification, date }) => (
                <Fragment>
                  <dt>{place}</dt>
                  <dd>
                    {qualification}<br />
                    {date}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </div>
        </Section>
      </section>
      <Section>
        <section id="work" className="bio__section bio__work">
          <div className="work">
            <H className="bio__work-title">Work</H>
          </div>
          <ul className="work-list">
            {work.map(({ content, meta: projectMeta }) => (
              <li className="work-list__item">
                <Work
                  title={projectMeta.title}
                  date={projectMeta.date}
                  skills={projectMeta.skills}
                  content={content}
                />
              </li>
            ))}
          </ul>
        </section>
      </Section>
    </div>
</div>
);

export default Index;
