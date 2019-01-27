const fs = require('fs');
const sm = require('sitemap');
const R = require('ramda');
const fg = require('fast-glob');
const withPathMap = require('./utils/next/withPathMap'); 
const { exportPathMap } = withPathMap({});

require('dotenv').config();

function extractPath(path) {
  return /(\.\/dist)(.+)(index\.html)/g.exec(path)[2];
}

function isBlacklisted(path) {
  const blacklist = [ '/404/', '/index/' ];
  return !blacklist.includes(path)
}

function formatPath(path) {
  return {
    url: path,  changefreq: 'weekly'
  };
}

const paths = fg.sync(['./dist/**/*.html']);

const sitemap = sm
  .createSitemap({
    hostname: process.env.SITE_URL,
    cacheTime: 600000,
    urls: R.pipe(
      R.map(extractPath),
      R.filter(isBlacklisted),
      R.map(formatPath),
    )(paths),
  })
  .toXML();

fs.writeFile('./dist/sitemap.xml', sitemap, (err) => {
  if(err) {
      return console.log(err);
  }

  console.log('Sitemap written.');
}); 