import { createStore } from 'redux';
// import upCountReducer from './redux/reducers/upCountReducer';
// import downCountReducer from './redux/reducers/downCountReducer';
import appReducer from './redux/reducers';


// const appReducer = combineReducers({
//   // count: countReducer,
//   upCount: upCountReducer, // make this a clear understanding
//   downCount: downCountReducer,
//
// });

const store = createStore(appReducer);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

export default store;
