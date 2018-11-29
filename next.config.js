require('dotenv').config();

const R = require('ramda');
const withSass = require('@zeit/next-sass');
const withPathMap = require('./utils/next/withPathMap');
const withEnv = require('./utils/next/withEnv');

module.exports = R.compose(
  withSass,
  withPathMap,
  withEnv,
)({});
