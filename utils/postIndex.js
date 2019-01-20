const fs = require('fs');
const fg = require('fast-glob');
const mdx = require('@mdx-js/mdx');
const babel = require('@babel/core');

function parse(str) {
  const cleaned = str
    .replace(/'/g, '"')
    .replace(/,\s*}/g, '}')
    .replace(/([^\s]+)(?=:)/g, '"$1"');
    console.log(cleaned);
  return JSON.parse(cleaned);
}

const posts = fg.sync(
  ['./pages/writing/**/*.mdx'],
  { transform: (entry) => {
    const jsx = mdx.sync(fs.readFileSync(entry, { encoding: 'utf-8' }));
    const matches = /export const meta = ({(\s*?.*?)*?})/gim.exec(jsx);
    const meta = parse(matches[1]);

    const filename = /[ \w-]+?(?=\.)/g.exec(entry)[0];

    const slug = filename !== 'index'
      ? filename
      : /([ \w-]+)(?=\/[ \w-]+?(?=\.))/g.exec(entry)[0];

    return Object.assign({}, meta, {
      slug: '/writing/' + slug,
    });
  }},
);

const postIndex = posts.sort((a, b) => (
  new Date(a.date) < new Date(b.date)
));

module.exports = postIndex;