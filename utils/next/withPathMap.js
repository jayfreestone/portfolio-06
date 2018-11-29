const fg = require('fast-glob');

// @todo Use api to generate.

function withPathMap(config) {
  return Object.assign({}, config, {
    exportPathMap: async function () {
      const posts = await fg(
        ['./data/writing/**/*.md'],
        { transform: entry => {
            const slug = /[ \w-]+?(?=\.)/g.exec(entry)[0];
            return {
              [`/writing/${slug}`]: {
                page: '/writing-single',
                query: { slug },
              },
            };
          }},
      );

      const postRoutes = posts
        .reduce((obj, route) => (
          Object.assign({}, obj, route)
        ), {});

      return Object.assign({}, postRoutes, {
        '/': { page: '/' },
      });
    }
  });
}

module.exports = withPathMap;
