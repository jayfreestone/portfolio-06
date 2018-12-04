import React from 'react';
import Image from '../components/Image';
import H from '../components/H';

const Index = () => (
  <div>
    <div className="banner">
      <div className="banner__image">
        <Image
          src="jf-bg.jpg"
        />
      </div>
      <H className="banner__title">
        A frontend developer living and working in East&nbsp;London.
      </H>
    </div>
  </div>
);

export default Index;
