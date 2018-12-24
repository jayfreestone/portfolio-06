import React from 'react';

function createMarkup(html: string) {
  return { __html: html };
}

const Html: React.FunctionComponent<HtmlProps> = ({ html }) => (
  <div dangerouslySetInnerHTML={createMarkup(html)} />
);

interface HtmlProps {
  html: string;
}

export default React.memo(Html);
