import React, { Fragment } from 'react';
import Image from '../components/Image';
import H from '../components/H';
import Section from '../components/Section';
import Prose from '../components/Prose';
import Bio, { meta } from './../data/writing/bio.mdx';

const { experience, skills, education, social, work } = meta;

const Index = () => (
  <div>
    <div className="banner">
      <div className="banner__image">
        <img src="/static/img/jf-bar-mask.svg" alt="" />
        <img src="/static/img/jf-bar.png" alt="" />
      </div>
      {/* <div className="banner__pre-title">
        Yo
      </div> */}
      <div className="banner__title h1">
        <Prose>
          <Bio />
        </Prose>
      </div>
    </div>
    <div className="stats">
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
        <div className="stats__section">
          <H className="stats__title">Contact</H>
          <dl>
            {Object.keys(social).map((key) => {
              const item = social[key];
              return (
                <Fragment>
                  <dt>{item.type}</dt>
                  <dd>
                    <a href={item.link}>
                      {item.label}
                    </a>
                  </dd>
                </Fragment>
              );
            })}
          </dl>
        </div>
      </Section>
    </div>
    <Section>
      <H>Work</H>
      <ul>
        {work.map(({ content, meta: projectMeta }) => (
          <li>
            <Section>
              <H>{projectMeta.title}</H>
              <time dateTime={projectMeta.date}>
                {projectMeta.date}
              </time>
              <Section>
                {content}
              </Section>
              {projectMeta.skills && (
                <ul>
                  {projectMeta.skills.map(projectSkill => (
                    <li>
                      {projectSkill}
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          </li>
        ))}
      </ul>
    </Section>
  </div>
);

export default Index;
