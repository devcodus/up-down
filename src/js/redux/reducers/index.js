import { combineReducers } from 'redux';
import countReducer from './countReducer';
import inputChangeReducer from './inputChangeReducer';

const appReducer = combineReducers({
  change: countReducer,
  number: inputChangeReducer,

});

export default appReducer;
