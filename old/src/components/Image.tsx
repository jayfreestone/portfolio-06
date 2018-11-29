import React from 'react';
// import buildImageURL from '../utilities/buildImageURLs';

const dummySrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const Image: React.SFC<ImageProps> = ({
  source,
  crops,
}) => {
  return (
    <div>
      <img
        src={dummySrc}
      />
    </div>
  );
};

interface ImageProps {
  source?: string;
  crops?: {
    w: number;
    h: number;
  }[];
  className?: string;
}

export default Image;
