import _ from 'lodash';

let defaultState = {};

let defaultCollection = {
  entries: [],
  layout: []
}

export default function(state = defaultState, action) {

  switch (action.type) {

    case 'RECEIVE_COLLECTIONS':
      let clone = _.cloneDeep(action.collections);
      _.each(clone, col => col = _.defaults(col, defaultCollection));
      return Object.assign({}, state, {...clone});

    default:
      return state;
  }
}
