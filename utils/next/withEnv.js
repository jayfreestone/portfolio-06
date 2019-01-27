function withEnv(config) {
  return Object.assign({}, config, {
    publicRuntimeConfig: {
      API_URL: process.env.API_URL,
      SITE_URL: process.env.SITE_URL,
      ANALYTICS_UID: process.env.ANALYTICS_UID,
    },
  });
}

module.exports = withEnv;
