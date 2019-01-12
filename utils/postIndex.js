const fs = require('fs');
const fg = require('fast-glob');
const mdx = require('@mdx-js/mdx');
const babel = require('@babel/core');

function parse(str) {
  const cleaned = str
    .replace(/'/g, '"')
    .replace(/,\s*}/g, '}')
    .replace(/([^\s]+)(?=:)/g, '"$1"');
  return JSON.parse(cleaned);
}

const postIndex = fg.sync(
  ['./pages/writing/**/*.mdx'],
  { transform: (entry) => {
    const jsx = mdx.sync(fs.readFileSync(entry, { encoding: 'utf-8' }));
    const matches = /export const meta = ({(\s*?.*?)*?})/gim.exec(jsx);
    const meta = parse(matches[1]);
    console.log(entry);

    const filename = /[ \w-]+?(?=\.)/g.exec(entry)[0];

    const slug = filename !== 'index'
      ? filename
      : /([ \w-]+)(?=\/[ \w-]+?(?=\.))/g.exec(entry)[0];

    return Object.assign({}, meta, {
      slug: '/writing/' + slug,
    });
  }},
);

module.exports = postIndex;