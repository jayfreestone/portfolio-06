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
      <div className="code">
        <span className="code__language">{lang}</span>
        <div className="code__content">
          <Html
            element="code"
            html={this.highlight(lang, String(children))}
          />
        </div>
      </div>
    );
  }
}

interface CodeProps {
  className: string;
}

export default Code;
