const countReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INCREASE_COUNT':
      return state + payload;

    case 'DECREASE_COUNT':
      return state - payload;

    default:
      return state;
  }
};

export default countReducer;
