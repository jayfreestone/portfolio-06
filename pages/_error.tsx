import React from 'react';
import Prose from './../components/Prose';
import H from './../components/H';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    const { statusCode } = this.props;
    return (
      <div className="container">
        <Prose>
          <H>
            <span role="image" aria-label="Man shrugging">🤷‍♂️</span>&nbsp;
            {statusCode === 404 ? 'Not Found' : statusCode }
          </H>
          <p>
            {statusCode === 404
              ? 'No idea where where that went.'
              : 'Something went wrong.'}
          </p>
        </Prose>
      </div>
    );
  }
}

export default Error;
