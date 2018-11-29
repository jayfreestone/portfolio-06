import fetch from 'isomorphic-unfetch';

function get(endpoint) {
  return function() {
    return fetch(`${process.env.API_URL}/api/${endpoint}`)
      .then(resp => resp.json());
  }
}

export default {
  getPosts: get('writing'),
};
