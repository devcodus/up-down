import { combineReducers } from 'redux';
import countReducer from './countReducer';
import inputChangeReducer from './inputChangeReducer';

const appReducer = combineReducers({
  total: countReducer,
  change: inputChangeReducer,

});

export default appReducer;
