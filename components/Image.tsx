import React from 'react';
import Observer from '@researchgate/react-intersection-observer';
import Placeholder from './Placeholder';

class Image extends React.Component<ImageProps, ImageState> {
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

    if (hasIntersected) {
      return (
        <div className={className}>
          <Placeholder width={width} height={height}>
            <img
              alt={alt}
              src={src}
              sizes={sizes}
              srcSet={srcset}
              className={className}
            />
          </Placeholder>
        </div>
      );
    }

    return (
      <Observer {...this.options}>
        <div className={className}>
          <Placeholder width={width} height={height}>
            <img
              alt={alt}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            />
          </Placeholder>
        </div>
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
