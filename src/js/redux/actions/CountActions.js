export function incrementCount(count) {
  return {
    type: 'INCREASE_COUNT',
    payload: count,
  };
}

export function decrementCount(count) {
  return {
    type: 'DECREASE_COUNT',
    payload: count,
  };
}

// __________________________ //?// what's the difference between the functions above and the const below?
