import React from 'react';

export const Level = React.createContext(1);

const Section: React.FunctionComponent = props => (
  <Level.Consumer>{level =>
    <Level.Provider value={level + 1}>
      {props.children}
    </Level.Provider>
  }</Level.Consumer>
);

export default Section;
