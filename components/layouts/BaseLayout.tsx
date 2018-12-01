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
            link: '/writing',
            label: 'Writing',
          },
        ]}
      />
      {children}
    </Section>
  </div>
);

export default BaseLayout;
