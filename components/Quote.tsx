import React from 'react';

const Quote: React.FunctionComponent<QuoteProps> = ({
  children,
  attribution = {},
}) => {
  const { author, link } = attribution;

  if (!author) {
    return (
      <blockquote className="quote">
        {children}
      </blockquote>
    );
  }

  return (
    <figure className="quote">
      <div className="quote__body">
        <blockquote
          cite={link}
          className="quote__content"
        >
          {children}
        </blockquote>
        <figcaption
          className="quote__attribution"
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener"
            >
              {author}
            </a>
          ) : author}
        </figcaption>
      </div>
    </figure>
  );
};

interface QuoteProps {
  content: string;
  attribution?: {
    author?: string;
    link?: string;
  };
}

export default Quote;
