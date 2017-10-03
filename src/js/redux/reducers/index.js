import { combineReducers } from 'redux';
import upCountReducer from './upCountReducer';
import downCountReducer from './downCountReducer';

const appReducer = combineReducers({
  // count: countReducer,
  upCount: upCountReducer, // make this a clear understanding
  downCount: downCountReducer,

});

export default appReducer;
