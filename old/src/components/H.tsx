import React from 'react';
import { Level } from './Section';

const H = props => (
  <Level.Consumer>{level => {
    const Heading = `h${Math.min(level, 6)}`;
    return <Heading {...props} />;
  }}</Level.Consumer>
);

export default H;
