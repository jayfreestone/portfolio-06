import React from 'react';
import Section from './Section';
import H from './H';

const Work = ({
  title,
  date,
  content,
  skills,
}) => (
  <div className="work">
    <Section>
      <H className="work__title">{title}</H>
      <time
        className="work__date"
        dateTime={date}
      >
        {date}
      </time>
      <div className="work__content">
        <Section>
          {content}
        </Section>
      </div>
      <div className="work__skills">
        <Section>
          <H>Skills</H>
          {skills && (
            <ul>
              {skills.map(skill => (
                <li>
                  {skill}
                </li>
              ))}
            </ul>
          )}
      </Section>
      </div>
    </Section>
  </div>
);

export default Work;
