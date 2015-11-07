import Firebase from 'firebase';

const ref = new Firebase('https://press.firebaseio.com/collections');

function receiveCollection(collections) {
  return { collections, type: 'RECEIVE_COLLECTIONS' }
}

export function subscribe() {
  return dispatch => {
    ref.on('value', c => dispatch(receiveCollection(c.val())))
  }
}

export function create(collection) {
  return dispatch => {
    let newCollection = ref.push();
    newCollection.set(collection);
    // dispatch(receiveCollection(newCollection.val()));
  }
}
