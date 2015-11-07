
function entries(id) {
  return fetch(`collection/${id}/entries`);
}

export function requestEntries(collection) {
  return {
    types: ['REQUEST_ENTRIES', 'RECEIVE_ENTRIES', 'REQUEST_FAILED_ENTRIES'],
    promise: entries(),
  }
}
