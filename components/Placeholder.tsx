import React from 'react';

/**
 * Direct children of the IntersectionObserver component need to be classes.
 */
class Placeholder extends React.Component<PlaceholderProps> {
  render() {
    const {
      width,
      height,
      children,
    } = this.props;

    return (
      <div
        className="placeholder"
        {...(height && width) ? {
          style: { paddingBottom: `${(height / width) * 100}%` },
        } : {}}
      >
        {children}
      </div>
    );
  }
}

interface PlaceholderProps {
  width?: number;
  height?: number;
}

export default Placeholder;
