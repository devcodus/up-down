import { createStore } from 'redux';

const countReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREASE_COUNT':
      return state + payload;

    case 'DECREASE_COUNT':
      return state - payload;

    default:
      return state;
  }
};


const store = createStore(countReducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState());
});


export default store;
