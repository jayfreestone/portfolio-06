import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch';

const { publicRuntimeConfig } = getConfig();

function get(endpoint) {
  return function() {
    return fetch(`${publicRuntimeConfig.API_URL}/${endpoint}`)
      .then(resp => resp.json());
  }
}

export default {
  getPosts: get('writing'),
};
