
let defaultState = {};

export default function(state = defaultState, action) {

  switch (action.type) {

    case 'RECEIVE_COLLECTIONS':
      return Object.assign({}, state, {...action.collections});

    default:
      return state;
  }
}
