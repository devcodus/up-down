const countReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREASE_COUNT':
    debugger;
      return state.number + state.change;

    case 'DECREASE_COUNT':
      return state.number - state.change;

    default:
      return state;
  }
};

export default countReducer;
