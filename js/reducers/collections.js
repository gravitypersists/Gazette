import _ from 'lodash';

let defaultState = {};

let defaultCollection = {
  entries: [],
  layout: []
}

export default function(state = defaultState, action) {

  switch (action.type) {

    case 'RECEIVE_COLLECTIONS':
      _.each(action.collections, col => col = _.defaults(col, defaultCollection));
      return Object.assign({}, state, {...action.collections});

    default:
      return state;
  }
}
