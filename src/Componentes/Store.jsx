import { createStore } from 'redux';

const initialState = {
  isChecked: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CHECKED':
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
