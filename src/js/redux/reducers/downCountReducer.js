const downCountReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'DECREASE_COUNT':
      return state - payload;

    default:
      return state;
  }
};

export default downCountReducer;
