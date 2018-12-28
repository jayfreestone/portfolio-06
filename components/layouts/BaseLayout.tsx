import React from 'react';
import Header from '../Header';
import '../../styles/main.scss';

const BaseLayout: React.FunctionComponent = ({ children }) => (
  <div>
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
  </div>
);

export default BaseLayout;
