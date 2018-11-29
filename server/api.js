const express = require('express');
const fg = require('fast-glob');
const R = require('ramda');
const fs = require('fs');
const convertContent = require('./utils/convertContent');
const sortByDate = require('./utils/sortByDate');

const router = express.Router();

router.get('/writing', async (req, res) => {
  const [ posts ] = await Promise.all([
    fg(
      ['./data/writing/**/*.md'],
      { transform: (entry) => {
          const slug = /[ \w-]+?(?=\.)/g.exec(entry)[0];

          return R.mergeAll([
            R.pipe(
              convertContent,
              R.omit(['content']),
            )(
              fs.readFileSync(entry, 'utf8')
            ),
            {
              route: `/writing/${slug}`,
              page: '/writing-single',
              query: { slug },
            },
          ]);
        }},
    )
  ]);

  res.json(sortByDate(posts));
});

router.get('/writing/:slug', async (req, res) => {
  const slug = req.params.slug;
  const [ posts ] = await Promise.all([
    fg(
      [`./data/writing/**/${slug}.md`],
      { transform: (entry) => {
          return R.mergeAll([
            convertContent(
              fs.readFileSync(entry, 'utf8')
            ),
            {
              route: `/writing/${slug}`,
              page: '/writing-single',
              query: { slug },
            },
          ]);
        }},
    )
  ]);

  if (!posts.length) {
    res.status(404);
    res.json([]);
  }

  res.json(posts[0]);
});

module.exports = router;
