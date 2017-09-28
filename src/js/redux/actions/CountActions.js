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
