const R = require('ramda');
const matter = require('gray-matter');

const convertContent = R.pipe(
  file => matter(file, {
    excerpt: true,
  }),
  R.applySpec({
    meta: R.prop('data'),
    content: R.prop('content'),
    excerpt: R.prop('excerpt'),
  }),
);

module.exports = convertContent;
