import { createStore } from 'redux';
import appReducer from './redux/reducers/index';
//

// export
// const reducer = function(state, action){
// // input code here
// };

const store = createStore(appReducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

store.dispatch({ type: 'INCREASE_COUNT', payload: 1 });

export default store;

// what's my target today? have this file run on the compiler and localhost
