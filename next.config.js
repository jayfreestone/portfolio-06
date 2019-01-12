require('dotenv').config();

const R = require('ramda');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images')
const withPathMap = require('./utils/next/withPathMap');
const withMDX = require('./utils/next/withMDX');
const withEnv = require('./utils/next/withEnv');

module.exports = (phase, { defaultConfig }) => R.pipe(
  withSass,
  withTypescript,
  withImages,
  // withPathMap,
  withEnv,
  // R.when(
  //   (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD),
    withMDX,
  // ),
)(defaultConfig);
