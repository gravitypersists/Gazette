
let defaultState = {
  inProgress: false,
  successful: true,
  items: []
};

export default function(state = defaultState, action) {
  switch (action.type) {

    case 'RECEIVE_ENTRIES':
      return Object.assign({}, state, {
        inProgress: false,
        successful: true,
        items: [...state.items, ...action.newItems]
      });

    case 'REQUEST_ENTRIES':
      return Object.assign({}, state, {
        inProgress: true,
        successful: null
      });

    case 'REQUEST_FAILED_ENTRIES':
      return Object.assign({}, state, {
        inProgress: false,
        successful: null
      });

    default:
      return state;
  }
}
