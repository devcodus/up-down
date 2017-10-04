const inputChangeReducer = (state = 0, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INPUT_CHANGED':
      return payload;

    default:
      return state;
  }
};


export default inputChangeReducer;
