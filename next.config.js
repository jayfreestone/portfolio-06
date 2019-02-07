require('dotenv').config();

const R = require('ramda');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');
// const { PHASE_PRODUCTION_SERVER } = process.env.NODE_ENV === 'development'
//   ? {}
//   : require('next-server/constants');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images')
const withPathMap = require('./utils/next/withPathMap');
const withMDX = require('./utils/next/withMDX');
const withEnv = require('./utils/next/withEnv');

module.exports = (phase, { defaultConfig }) => {
  // if (phase === PHASE_PRODUCTION_SERVER) {
  //   // Config used to run in production.
  //   return {};
  // }

  return R.pipe(
    withSass,
    withTypescript,
    // Prevents inlining of images. Can't be 0.
    // https://github.com/twopluszero/next-images/pull/9
    R.set(R.lensProp('inlineImageLimit'), 1),
    withImages,
    withEnv,
    withMDX,
  )(defaultConfig);
}