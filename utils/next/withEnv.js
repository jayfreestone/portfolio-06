function withEnv(config) {
  return Object.assign({}, config, {
    publicRuntimeConfig: {
      API_URL: process.env.API_URL,
    },
  });
}

module.exports = withEnv;
