const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { ...state, count: +1 };

    case 'DECREASE_COUNT':
      return { ...state, count: -1 };

    default:
      return state;
  }
};

export default countReducer;
// import count from './countReducer'

// delete extra redux folder - salvage necessary bits first
// push to repo
// check in with Jay
