import count from './countReducer'
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  count: countReducer,
})

export default appReducer;

//do I even need combineReducers? if it's a single reducer? the switch statement lives elsewhere - yes?
