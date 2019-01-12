import React from 'react';
import H from '../H';
import Section from '../Section';
import Prose from '../Prose';

class WritingSingle extends React.Component<WritingSingleProps> {
  render() {
    const { children, meta } = this.props;
    return (
        <article>
            <H>{meta.title}</H>
            {meta.date}
            <Section>
                <Prose>
                  {children}
                </Prose>
            </Section>
        </article>
    );
  }
}

interface WritingSingleProps {
  meta: {
    title: string;
    date: string;
  };
}

export default WritingSingle;
