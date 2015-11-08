import Firebase from 'firebase';
import layouts from '../content/layouts';

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
  collection.layout = layouts.layouts	;
  collection.entries = [];
  return dispatch => {
    let newCollection = ref.push();
    newCollection.set(collection);
    window.hackhistory.pushState({}, `/col/${newCollection.key()}`);
  }
}

export function setCollectionLayout(id, layout) {
  ref.child(id).set({layout});
  return { type: 'NONE' };
}
