import { createStore } from 'redux';
// import { reducer } from 'redux-form';
//
//
// export
const reducer = function(state, action){
  return "foo";
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "INCREASE_COUNT", payload: 1})
