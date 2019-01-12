import React from 'react';

export function createMarkup(html: string) {
  return { __html: html };
}

const Html: React.FunctionComponent<HtmlProps> = ({ html, element }) => {
  const Element = element;
  return (
    <Element dangerouslySetInnerHTML={createMarkup(html)} />
  );
};

Html.defaultProps = {
  element: 'div',
};

interface HtmlProps {
  html: string;
  element: 'div'|'span'|'code';
}

export default React.memo(Html);
