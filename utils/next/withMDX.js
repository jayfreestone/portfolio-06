const R = require('ramda');
const nextMDX = require('@zeit/next-mdx');

function withMDX(config) {
  return R.pipe(
    R.over(
      R.lensProp('pageExtensions'),
      R.ifElse(
        R.length,
        R.append('mdx'),
        R.always(['js', 'jsx', 'mdx']),
      ),
    ),
    nextMDX({
      extension: /\.(md|mdx)?$/,
      options: {
        hastPlugins: [],
      },
    }),
  )(config);
}

module.exports = withMDX;

