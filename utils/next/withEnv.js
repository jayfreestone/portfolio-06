function withEnv(config) {
  return Object.assign({}, config, {
    publicRuntimeConfig: {
      API_URL: process.env.API_URL,
      URL: process.env.URL,
      ANALYTICS_UID: process.env.ANALYTICS_UID,
    },
  });
}

module.exports = withEnv;
