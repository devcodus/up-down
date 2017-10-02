import { combineReducers } from 'redux';
import countReducer from './countReducer';

const appReducer = combineReducers({
  count: countReducer,
});

export default appReducer;
