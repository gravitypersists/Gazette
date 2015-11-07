import fetch from '../utils/fetch';

function collections(id) {
  return fetch(`collections`);
}

export function request() {
  return {
    types: ['REQUEST_COLLECTIONS', 'RECEIVE_COLLECTIONS', 'REQUEST_FAILED_COLLECTIONS'],
    promise: collections(),
  }
}
