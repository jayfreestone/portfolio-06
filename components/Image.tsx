import React from 'react';
import Observer from '@researchgate/react-intersection-observer';

class Image extends React.Component<ImageProps, ImageState> {
  static generatePlaceholderSrc(width: number, height: number): string {
    return `data:image/svg+xml,%3Csvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E
  `;
  }

  state = {
    hasIntersected: false,
  };

  options = {
    rootId: 'image-lazyload',
    rootMargin: '0px',
    threshold: 0.1,
    onChange: this.handleIntersection.bind(this),
  };

  handleIntersection(e: IntersectionObserverEntry) {
    this.setState({ hasIntersected: e.isIntersecting });
  }

  render() {
    const { src, className } = this.props;
    const { hasIntersected } = this.state;

    if (hasIntersected) {
      return (
        <img
          src={`/static/img/${src}`}
          className={className}
        />
      );
    }

    return (
      <Observer {...this.options}>
        <img
          src={Image.generatePlaceholderSrc(200, 100)}
          className={className}
        />
      </Observer>
    );
  }
}

interface ImageProps {
  src: string;
  className?: string;
}

interface ImageState {
  hasIntersected: boolean;
}

export default Image;
