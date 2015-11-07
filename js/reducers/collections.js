
let defaultState = {
  inProgress: false,
  successful: true,
  items: []
};

export default function(state = defaultState, action) {
  console.log(action);
  switch (action.type) {

    case 'RECEIVE_COLLECTIONS':
      return Object.assign({}, state, {
        inProgress: false,
        successful: true,
        items: [...state.items, ...action.newItems]
      });

    case 'REQUEST_COLLECTIONS':
      return Object.assign({}, state, {
        inProgress: true,
        successful: null
      });

    case 'REQUEST_FAILED_COLLECTIONS':
      return Object.assign({}, state, {
        inProgress: false,
        successful: null
      });

    default:
      return state;
  }
}
