import React from 'react';

export const Level = React.createContext(0);

const Section = (props) => (
  <Level.Consumer>{level =>
    <Level.Provider value={level + 1}>
      {props.children}
    </Level.Provider>
  }</Level.Consumer>
);

export default Section;
