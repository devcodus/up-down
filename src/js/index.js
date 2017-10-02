import { createStore } from 'redux';
import countReducer from './redux/reducers/countReducer';


const store = createStore(countReducer, 0);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

export default store;
