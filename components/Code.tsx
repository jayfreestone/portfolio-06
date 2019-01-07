import React from 'react';
import Html from './Html';
import Prism from 'prismjs';

class Code extends React.Component<CodeProps> {
  highlight(lang: string, str: string) {
    try {
      return Prism.highlight(str, Prism.languages[lang]);
    } catch (e) {
      console.error(e);
      return str;
    }
  }
  render() {
    const { className, children } = this.props;
    const lang = className.indexOf('language')
      ? className.split('language-')[1]
      : 'javascript';
    return (
      <pre>
        <Html
          element="code"
          html={this.highlight(lang, String(children))}
        />
      </pre>
    );
  }
}

interface CodeProps {
  className: string;
}

export default Code;
