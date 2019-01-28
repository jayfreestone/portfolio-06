import React from 'react';
import Observer from '@researchgate/react-intersection-observer';
import hasIn from 'ramda/es/hasIn';

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
    triggerOnce: true,
    onChange: this.handleIntersection.bind(this),
  };

  handleIntersection(e: IntersectionObserverEntry) {
    this.setState({ hasIntersected: e.isIntersecting });
  }

  render() {
    const { src, srcset, sizes, className, alt, width, height } = this.props;
    const { hasIntersected } = this.state;

    return (
      <Observer {...this.options}>
        <img
          alt={alt}
          src={hasIntersected ? src : Image.generatePlaceholderSrc(width, height)}
          {...(hasIntersected ? {
            sizes,
            srcSet: srcset,
          } : {})}
          className={className}
        />
      </Observer>
    );
  }
}

interface ImageProps {
  src: string;
  srcset?: string;
  sizes?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

interface ImageState {
  hasIntersected: boolean;
}

export default Image;
