export default {
  getPosts() {
    return Promise.resolve(preval`
      module.exports = require('./postIndex');
    `);
  },
};
