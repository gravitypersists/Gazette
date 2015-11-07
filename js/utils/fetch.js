// A thin wrapper around isomorphic-fetch, which abstracts the
// application of constants while working with endpoints

import fetchRaw from 'isomorphic-fetch';

const BASE_URL = 'press.firebaseIO.com/';

export default function fetch(url, options = {}) {
  let method = (options.method && options.method.toUpperCase()) || 'GET';
  let fullUrl = BASE_URL + url;

  let config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (options.body) options.body = JSON.stringify(options.body);
  return fetchRaw(fullUrl, Object.assign(options, config));
}
