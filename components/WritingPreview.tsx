import React from 'react';
import Link from 'next/link';
import Section from './Section';
import H from './H';
import formatWritingDate from './../utils/formatWritingDate';

const WritingPreview: React.FunctionComponent<WritingPreviewProps> = ({
  title,
  date,
  excerpt,
  slug,
}) => (
  <div className="writing-preview">
    <Section>
      <H>
        <Link href={{ pathname: slug }}>
          <a>
            {title}
          </a>
        </Link>
      </H>
      <div className="writing-preview__meta">
        <time>{formatWritingDate(date)}</time>
      </div>
      <p>{excerpt}</p>
    </Section>
  </div>
);

interface WritingPreviewProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default WritingPreview;
