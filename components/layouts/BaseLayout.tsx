import React from 'react';
import Header from '../Header';
import Section from '../Section';
import '../../styles/main.scss';

const BaseLayout: React.FunctionComponent = ({ children }) => (
  <div>
    <Section>
      <Header
        title="Jay Freestone"
        navItems={[
          {
            link: '/#work',
            label: 'Work',
          },
          {
            link: '/writing',
            label: 'Writing',
          },
          {
            link: '/#contact',
            label: 'Contact',
          },
        ]}
      />
      {children}
    </Section>
  </div>
);

export default BaseLayout;
