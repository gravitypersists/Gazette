import _ from 'lodash';

let defaultState = {
  name: '',
  avatar: null,
  notLoaded: true
};


export default function(state = defaultState, action) {

  switch (action.type) {

    case 'RECEIVE_USER':
      return Object.assign({}, state, {...action.user, notLoaded: false});

    default:
      return state;
  }
}
